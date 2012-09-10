jQuery(document).ready(function() {
  authors = {
    asimeoni: 'Angelo Simeoni',
    adarshp: 'Adarsh Pandit',
    codeulate: 'Ben Orenstein',
    cpytel: 'Chad Pytel',
    dancroak: 'Dan Croak',
    drapergeek: 'Jason Draper',
    elindsay: 'Emma Lindsay',
    emill: 'Eric Mill',
    fyates: 'Fred Yates',
    gabebw: 'Gabe Berke-Williams',
    g3niu5: 'Paul Webb',
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
    theladysauce: 'Seana Quental',
    sikachu: 'Prem Sichanugrist',
    stevehickeydesign: 'Steve Hickey',
    theinterstellarmedium: 'Galen Frechette',
    theinterstellarmedium2: 'Galen Frechette',
    thoughtbotet: 'Eric Torrey',
    thoughtbotjc: 'Jared Carroll',
    thoughtbotjm: 'Jason Martinez',
    thoughtbotmmk: 'Mike McKenna',
    thoughtbotmr: 'Micah Rich',
    tristandunn: 'Tristan Dunn',
    tsaleh: 'Tammer Saleh',
    ubuwaits: 'Chad Mazzola',
    highwaybobbery: 'Alex Berry',
    jayroh: 'Joel Oliveira',
    hrward: 'Harlow Ward',
    kaishinlab: 'Reda Lemeden',
    edwardloveall: 'Edward Loveall',
    benwhitla: 'Ben Whitla',
    joshsteiner: 'Josh Steiner',
    griffindy: 'Dylan Griffin',
    readeharris: 'Reade Harris',
    thegrantovich: 'Alex Grant'
  };

  $(".author").each(function(index) {
    var userName = $(this).text().replace('-', '');
    var realName = authors[userName] || userName;

    $(this).text(realName);
  });
});
