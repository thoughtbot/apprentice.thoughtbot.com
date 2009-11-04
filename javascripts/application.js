$(document).ready(function() {
  var moveCarousel = function(carousel, direction) {
    return function() {
      carousel[direction]();
      return false;
    };
  };

  $(".project-carousel").jcarousel({
    wrap: "last",
    initCallback: function(carousel) {
      $(".project-carousel .next-project").bind("click", moveCarousel(carousel, "next"));
      $(".project-carousel .prev-project").bind("click", moveCarousel(carousel, "prev"));
    }
  });
});
