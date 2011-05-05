var auto = $.jqwidont.auto(); // is automatic initialisation enabled?
$.jqwidont.auto(false);       // disable it

$(document).ready(function() {
  $('p').widont();
  
  //slider stuff
  $('#gulfcoast-slider').hide();
  
  $('#gulfcoast a').click(function(){
    $('#gulfcoast-project').slideToggle();
  });
});