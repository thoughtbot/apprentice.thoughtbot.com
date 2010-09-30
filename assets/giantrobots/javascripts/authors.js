jQuery(document).ready(function() {
	$('a.zoom').fancyZoom();
	authors = {
		dancroak: "Dan Croak",
		qrush: "Nick Quaranto",
		chadpytel: "Chad Pytel",
		lolconomy: "Mike Burns",
		asimeoni: "Angelo Simeoni",
		emill: "Eric Mill",
		fyates: "Fred Yates",
		jankowski: "Matt Jankowski",
		jferris: "Joe Ferris",
		jyurek: "Jon Yurek",
		kevin: "Kevin Burg",
		possibilist: "Floyd Wright",
		tsaleh: "Tammer Saleh",
		thoughtbotjc: "Jared Carroll",
		thoughtbotet: "Eric Torrey",
		thoughtbotjm: "Jason Martinez",
		thoughtbotmmk: "Mike McKenna",
		thoughtbotmr: "Micah Rich",
		jasonmorrisontb: "Jason Morrison",
		jdclayton: "Josh Clayton",
		tristandunn: "Tristan Dunn",
		ubuwaits: "Chad Mazzola",
		kylehasmanypixels: "Kyle Fiedler",
		hgimenez: "Harold Giménez",
		elindsay: "Emma Lindsay",
    mmongeau: "Matt Mongeau"
	};

	jQuery(".author").each(function(i) { 
		author = this.innerHTML;
		this.innerHTML = this.innerHTML.replace(author, authors[author]||author);
	});

	jQuery("#dsq-comments code").each(function() { jQuery(this).wrap("<pre></pre>"); });


	hljs.initHighlightingOnLoad();

	jQuery(".page-top").each(function(i) {
		var post = jQuery(this);
		if(parseInt(post.attr('id')) <= 722112946) {
			post.addClass("old");
		}
	});
});
