$(document).ready(function() {
  var moveCarousel = function(carousel, direction) {
    return function() {
      carousel[direction]();
      return false;
    };
  };

  $(".project-carousel").jcarousel({
    wrap: "last",
    animation: 600,
    scroll: 1,
    easing: "easeOutBack",
    initCallback: function(carousel) {
      $(".project-carousel .next-project").bind("click", moveCarousel(carousel, "next"));
      $(".project-carousel .prev-project").bind("click", moveCarousel(carousel, "prev"));
    }
  });

  $.each([".homepage-carousel-shortbord", ".homepage-carousel-umbrella-today"], function(idx, selector) {
    $(selector + " .slides").cycle({
      fx: "fade",
      timeout: 2000
    });
  });

});
