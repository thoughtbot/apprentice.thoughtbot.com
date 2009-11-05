$(document).ready(function() {

  var updateButtonStatus = function(carousel) {
    current = carousel.first ? carousel.first : 1;
  }

  $(".project-carousel").jcarousel({
    vertical: true,
    wrap: "both",
    animation: 600,
    scroll: 1,
    buttonNextHTML: null,
    buttonPrevHTML: null,
    buttonNextCallback: updateButtonStatus,
    buttonPrevCallback: updateButtonStatus,
    initCallback: function(carousel) {
      jQuery('.project-nav a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
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
