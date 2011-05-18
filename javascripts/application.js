var auto = $.jqwidont.auto(); // is automatic initialisation enabled?
$.jqwidont.auto(false);       // disable it

$(document).ready(function() {
  $('p').widont();

  // slider stuff
  $('#portfolio-slider, #portfolio-slider div').hide();

  $('#portfolio').localScroll();

  $('#portfolio a').click(function(){
    var divname = this.title


    if ($('#portfolio-slider:hidden').length) {
      $('#portfolio-slider').slideDown();
      $("#"+divname+"-project").slideDown();
      return false;
    } else {
      $("#"+divname+"-project").slideDown().siblings().slideUp();
      return false;
    };
  });

  $('#portfolio-slider div ul.slider').nivoSlider({
    effect:'sliceDown',
    manualAdvance:true,
    directionNavHide:false,
    controlNav:false
  });
});