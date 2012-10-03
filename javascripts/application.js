var auto = $.jqwidont.auto(); // is automatic initialisation enabled?
$.jqwidont.auto(false);       // disable it

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

  $('document').ready(function(){
    var divname = $('body').attr('id');
    console.log(divname)
    var slider  = $("#" + divname + "-project")
    console.log(divname)


    if (slider.find("li").size() == 0) {
      var list = slider.find("ul");
      list.empty();

      for(var i = 1; i <= images[divname]; i++) {
        list.append("<li><img src='/images/portfolio/large/" + divname + "-" + i + ".jpg' /></li>");
      }

      list.nivoSlider({
        effect:'fade',
        manualAdvance:true,
        directionNavHide:false
      });
    }

    return false;
  });

  $(".event-coupon-wrapper strong:contains('Webcast')").addClass("webcast");
  $(".event-coupon-wrapper strong:contains('Workshop')").addClass("workshop");
  $(".event-coupon-wrapper strong:contains('Book')").addClass("book");
});
