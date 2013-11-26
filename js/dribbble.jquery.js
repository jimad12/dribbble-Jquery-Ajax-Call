//Plugin settings API Call for A Dribbble player account.
(function($) {
  var ajaxCall = function(url, options, pagination) {
    var data = {};
    if(pagination) {
      data.page = options.page,
      data.per_page = options.per_page
    }
//Now provide the url, the options, & pagination definition for the above parameters
    return $.ajax({
      url: "http://api.dribbble.com" + url,
      dataType: "jsonp",
      data: data
    }).done(options.callback);
  };
  var baseSettings = {
    callback: function() {},
    per_page: 15,
    page: 1,
    id: ""
  };


// Jquery Ajax Method Calls  for player's shots, or everyone shots.
  $.dribbble = {
    getShot: function(opts) {
      var options = $.extend({}, baseSettings, opts);
      ajaxCall("/shots/" + options.id, options, false);
    },
    getShots: function(opts) {
      var options = $.extend({}, baseSettings, opts);
      ajaxCall("/shots/everyone/", options, true);
    },
    getPlayerShots: function(opts) {
      var options = $.extend({}, baseSettings, opts);
      ajaxCall("/players/" + options.id + "/shots", options, true);
    },
    getPlayerShotsFollowing: function(opts) {
      var options = $.extend({}, baseSettings, opts);
      ajaxCall("/players/" + options.id + "/shots/following", options, true);
    }
  };
})(jQuery);
