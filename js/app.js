//provide the Dribbble's player info or id
$(function() {
  $.dribbble.getShot({
    //id: "1315388",
     //id: "626625",
    callback: function(data) {
      console.log(data);
    }
  });
  //Add desired # shots to  page
  $.dribbble.getPlayerShotsFollowing({
    id: "sturobson",
    page: 1,
    per_page: 30,
    callback: function(data) {
      for(var i = 0; i < data.shots.length; i++) {
        var shot = data.shots[i];
        var wrapperDiv = $("<div />", {
          "class" : "wrapper"
        });

//Specify the field to get from player's id 
//like Shot's title, img, player's name & location 
        var title = $("<h2 />", {
          text: shot.title
        });
        
        var location = $("<h3/>", {
            text: shot.player.location
          });
          

        var img = $("<img />", {
          alt: shot.title,
          src: shot.image_url
        });

        var user = $("<a />", {
          text: shot.player.name,
          href: shot.player.url
        });

//Add the fields to the page in order of user's name & location, shot's title & image.
        wrapperDiv
        .append(user)
        .append(location)
        .append(title)
        .append(img);

        $("body").append(wrapperDiv);
      }
    }
  });
});
