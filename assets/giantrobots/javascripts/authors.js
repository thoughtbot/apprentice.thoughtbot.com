jQuery(document).ready(function() {
  authors = {
    adarshp: 'Adarsh Pandit',
    asimeoni: 'Angelo Simeoni',
    benwhitla: 'Ben Whitla',
    codeulate: 'Ben Orenstein',
    cpytel: 'Chad Pytel',
    dancroak: 'Dan Croak',
    drapergeek: 'Jason Draper',
    edwardloveall: 'Edward Loveall',
    elindsay: 'Emma Lindsay',
    emill: 'Eric Mill',
    fyates: 'Fred Yates',
    g3niu5: 'Paul Webb',
    gabebw: 'Gabe Berke-Williams',
    griffindy: 'Dylan Griffin',
    hgimenez: 'Harold Giménez',
    highwaybobbery: 'Alex Berry',
    hrward: 'Harlow Ward',
    hyperbuddha: 'Alex Godin',
    jankowski: 'Matt Jankowski',
    jasonmorrisontb: 'Jason Morrison',
    jayroh: 'Joel Oliveira',
    jdclayton: 'Josh Clayton',
    jferris: 'Joe Ferris',
    joshsteiner: 'Josh Steiner',
    jyurek: 'Jon Yurek',
    kaishinlab: 'Reda Lemeden',
    kevin: 'Kevin Burg',
    kylehasmanypixels: 'Kyle Fiedler',
    lolconomy: 'Mike Burns',
    lukegriffithsapprentice: 'Luke Griffiths',
    mmongeau: 'Matt Mongeau',
    plapier: 'Phil LaPier',
    possibilist: 'Floyd Wright',
    qrush: 'Nick Quaranto',
    readeharris: 'Reade Harris',
    sikachu: 'Prem Sichanugrist',
    stevehickeydesign: 'Steve Hickey',
    thegrantovich: 'Alex Grant',
    theinterstellarmedium: 'Galen Frechette',
    theinterstellarmedium2: 'Galen Frechette',
    theladysauce: 'Seana Quental',
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
