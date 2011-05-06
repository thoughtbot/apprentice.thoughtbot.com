var auto = $.jqwidont.auto(); // is automatic initialisation enabled?
$.jqwidont.auto(false);       // disable it

$(document).ready(function() {
  $('p').widont();

  // slider stuff
  $('#portfolio-slider, #portfolio-slider div').hide();

  $('#portfolio a').click(function(){
    var divname = this.title

    if ($('#portfolio-slider:hidden').length) {
      $('#portfolio-slider').show();
      $("#"+divname+"-project").slideDown();
      return false;
    } else {
      $("#"+divname+"-project").slideDown().siblings().slideUp();
      return false;
    }
  });

  $('#portfolio-slider div ul.slider').nivoSlider({
    effect:'fade',
    directionNavHide:false,
    controlNav:false
  });
});