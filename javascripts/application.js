var auto = $.jqwidont.auto(); // is automatic initialisation enabled?
$.jqwidont.auto(false);       // disable it

$(document).ready(function() {
  $('p').widont();

  // slider stuff
  $('#portfolio-slider').hide();

  $('#portfolio a').click(function(){
    var divname = this.title

    if ($('#portfolio-slider:hidden').length) {
      $('#portfolio-slider').show();
      $("#"+divname+"-project").slideDown();
      return false;
    } else {
      return false;
    }
  });
});

$(window).load(function() {
    $('#portfolio-slider div ul.slider').nivoSlider({
      effect:'fade',
      directionNavHide:false,
      controlNav:false
    });
});