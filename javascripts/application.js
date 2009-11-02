$(document).ready(function() {
  $(".homepage-carousel").jcarousel({
    initCallback: function(carousel) {
      $(".homepage-carousel .jcarousel-control a").bind("click", function() {
        $(this).siblings().removeClass("active").end().addClass("active");
        carousel.scroll($.jcarousel.intval($(this).text()));
        return false;
      });
    }
  });
});
