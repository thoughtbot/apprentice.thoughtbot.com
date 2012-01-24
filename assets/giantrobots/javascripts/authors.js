jQuery(document).ready(function() {
  authors = {
    asimeoni: 'Angelo Simeoni',
    codeulate: 'Ben Orenstein',
    cpytel: 'Chad Pytel',
    dancroak: 'Dan Croak',
    elindsay: 'Emma Lindsay',
    emill: 'Eric Mill',
    fyates: 'Fred Yates',
    gabebw: 'Gabe Berke-Williams',
    hgimenez: 'Harold Giménez',
    hyperbuddha: 'Alex Godin',
    kevin: 'Kevin Burg',
    kylehasmanypixels: 'Kyle Fiedler',
    jankowski: 'Matt Jankowski',
    jasonmorrisontb: 'Jason Morrison',
    jdclayton: 'Josh Clayton',
    jferris: 'Joe Ferris',
    jyurek: 'Jon Yurek',
    lolconomy: 'Mike Burns',
    lukegriffithsapprentice: 'Luke Griffiths',
    mmongeau: 'Matt Mongeau',
    plapier: 'Phil LaPier',
    possibilist: 'Floyd Wright',
    qrush: 'Nick Quaranto',
    saucecodestoo: 'Seana Quental',
    sikachu: 'Prem Sichanugrist',
    stevehickeydesign: 'Steve Hickey',
    theinterstellarmedium: 'Galen Frechette',
    thoughtbotet: 'Eric Torrey',
    thoughtbotjc: 'Jared Carroll',
    thoughtbotjm: 'Jason Martinez',
    thoughtbotmmk: 'Mike McKenna',
    thoughtbotmr: 'Micah Rich',
    tristandunn: 'Tristan Dunn',
    tsaleh: 'Tammer Saleh',
    ubuwaits: 'Chad Mazzola'
  };

  $(".author").each(function(index) {
    var userName = $(this).text().replace('-', '');
    var realName = authors[userName] || userName;

    $(this).text(realName);
  });
});
