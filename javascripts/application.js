var auto = $.jqwidont.auto(); // is automatic initialisation enabled?
$.jqwidont.auto(false);       // disable it

$(document).ready(function() {
  $('p').widont();

  $('#portfolio-slider, #portfolio-slider div').hide();
  $('#portfolio').localScroll();

  var images = {
    "gulfcoast": 4,
    "pozit": 3,
    "coupondudes": 4,
    "gnite": 2,
    "umbrellatoday": 2,
    "carbonrally": 2,
    "saftystream": 4,
    "shortboard": 4
  };

  $('#portfolio a').click(function(){
    var divname = this.title;
    var slider  = $("#" + divname + "-project")

    if ($('#portfolio-slider:hidden').size() == 1) {
      $('#portfolio-slider').slideDown();
      slider.slideDown();
    } else {
      slider.slideDown().siblings().slideUp();
    }

    if (slider.find("li").size() == 1) {
      var list = slider.find("ul");
      list.empty();

      for(var i = 1; i <= images[divname]; i++) {
        list.append("<li><img src='/images/portfolio/large/" + divname + "-" + i + ".png' /></li>");
      }

      list.nivoSlider({
        effect:'sliceDown',
        manualAdvance:true,
        directionNavHide:false,
        controlNav:false
      });
    }

    return false;
  });
});
