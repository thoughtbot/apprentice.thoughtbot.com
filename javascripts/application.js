$(document).ready(function() {
  var homepageCarouselCallback = function(selector) {
    return function(carousel) {
      $(selector).find(".jcarousel-control a").bind("click", function() {
        $(this).siblings().removeClass("active").end().addClass("active");
        carousel.scroll(parseInt($(this).text()));
        return false;
      });
    };
  },
  moveCarousel = function(carousel, direction) {
    return function() {
      carousel[direction]();
      return false;
    };
  },
  carousels = [
    ".homepage-carousel-umbrella-today",
    ".homepage-carousel-other"];

  $.each(carousels, function(idx, selector) {
    $(selector).jcarousel({
      initCallback: homepageCarouselCallback(selector)
    });
  });

  $(".project-carousel").jcarousel({
    initCallback: function(carousel) {
      $(".project-carousel .next-project").bind("click", moveCarousel(carousel, "next"));
      $(".project-carousel .prev-project").bind("click", moveCarousel(carousel, "prev"));
    }
  });
});
