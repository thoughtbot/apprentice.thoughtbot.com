$(document).ready(function() {

  var updateButtonStatus = function(carousel) {
    current = carousel.first ? carousel.first : 1;
    $('.project-nav a').removeClass("active");
    $('.project-nav a').eq(current-1).addClass("active");
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
      $('.project-nav a').bind('click', function() {
        carousel.scroll($.jcarousel.intval($(this).text()));
        updateButtonStatus(carousel);
        pageTracker._trackEvent('Homepage', 'Carousel', $(this).text());
        return false;
      });

      updateButtonStatus(carousel);
    }
  });

  $.each([".homepage-carousel-shortbord", ".homepage-carousel-umbrella-today", ".homepage-carousel-carbonrally", ".homepage-carousel-buywithme",  ".homepage-carousel-naturenetwork",  ".homepage-carousel-teal"], function(idx, selector) {
    $(selector + " .slides").cycle({
      fx: "fade",
      timeout: 0,
      pager: selector + " .image-switcher-tools"
    });
  });

});
