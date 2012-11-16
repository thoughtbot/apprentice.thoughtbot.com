$('body#portfolio').ready(function(){
  var ga_track_portfolio = function(event_name) {
    _gaq.push(['_trackEvent', 'Portfolio', 'Navigation', event_name]);
  }

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

  var divname = (document.title);
  divname = divname.substring(0, divname.indexOf(' :'));

  var slider  = $("#" + divname + "-project");

  ga_track_portfolio('View Details');

  if ($('#portfolio-slider:hidden').size() == 1) {
    $('#portfolio-slider').slideDown();
    slider.slideDown();
  } else {
    slider.slideDown().siblings().slideUp();
  }

  $('a.nivo-prevNav').click(function(){
    ga_track_portfolio('Previous');
  });

  $('a.nivo-nextNav').click(function(){
    ga_track_portfolio('Next');
  });

  $('.nivo-control').click(function(){
    ga_track_portfolio('Paging');
  });


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
