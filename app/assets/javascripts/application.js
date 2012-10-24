// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.

// disable automatic initialization
$.jqwidont.auto(false);

$(document).ready(function() {
  $('p').widont();

  $('#portfolio').localScroll();

  var images = {
    "owneraide": 4,
    "awesome": 3,
    "vpp": 3,
    "iora": 3,
    "tastedmenu": 3,
    "stattleship": 3,
    "gulfcoast": 3,
    "umbrellatoday": 2,
  };

  $('body#portfolio').ready(function(){
    var divname = (document.title);
    divname = divname.substring(0, divname.indexOf(' :'));

    var slider  = $("#" + divname + "-project")

    if (slider.find("li").size() == 0) {
      var list = slider.find("ul");
      list.empty();

      for(var i = 1; i <= images[divname]; i++) {
        list.append("<li><img src='/images/portfolio/large/" + divname + "-" + i + ".jpg' /></li>");
      }

      list.nivoSlider({
        effect:'fade',
        manualAdvance:true,
        directionNavHide:false,
        animSpeed: 100
      });
    }

    return false;
  });

  $(".event-coupon-wrapper strong:contains('Webcast')").addClass("webcast");
  $(".event-coupon-wrapper strong:contains('Workshop')").addClass("workshop");
  $(".event-coupon-wrapper strong:contains('Book')").addClass("book");
});
