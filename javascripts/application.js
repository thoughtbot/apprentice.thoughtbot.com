$(document).ready(function() {
  var moveCarousel = function(carousel, direction) {
    return function() {
      carousel[direction]();
      return false;
    };
  };

  var updateButtonStatus = function(carousel) {
    current = carousel.first ? carousel.first : 1;
    $(".project-nav .status").text("Project " + current + " of " + carousel.size());
  }

  $(".project-carousel").jcarousel({
    wrap: "both",
    animation: 600,
    scroll: 1,
    easing: "easeOutBack",
    buttonNextHTML: null,
    buttonPrevHTML: null,
    buttonNextCallback: updateButtonStatus,
    buttonPrevCallback: updateButtonStatus,
    initCallback: function(carousel) {
      $('.prev-project').bind('click', function() {
        carousel.prev();
        updateButtonStatus(carousel);
        return false;
      });

      $('.next-project').bind('click', function() {
        carousel.next();
        updateButtonStatus(carousel);
        return false;
      });

      updateButtonStatus(carousel);
    }
  });

  $.each([".homepage-carousel-shortbord", ".homepage-carousel-umbrella-today"], function(idx, selector) {
    $(selector + " .slides").cycle({
      fx: "fade",
      timeout: 0,
      pager: selector + " .image-switcher-tools"
    });
  });

});
