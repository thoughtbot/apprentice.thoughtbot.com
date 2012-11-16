var ga_track_portfolio = function(event_name) {
  _gaq.push(['_trackEvent', 'Portfolio', 'Navigation', event_name]);
}

$('body#portfolio').ready(function(){
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
});
