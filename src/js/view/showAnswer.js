(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

  ns.showAnswer = function(json){
    $('.jacket img').attr({'src': json.results[0].artworkUrl100});
    $('.answer .trackName').text(json.results[0].trackName);
    $('.answer .artistName').text(json.results[0].artistName);

    setTimeout(function(){
      $('.answer')
        .css({'display': 'block'})
        .animate({'opacity': 1});

      $('.jacket')
        .css({'display': 'block', 'top': '-80px'})
        .animate({'opacity': 1, 'top': '-120px'});
    }, 3000);
  };

  ns.resetAnswer = function(){
    $('.answer, .jacket')
      .animate({'opacity': '0'});
  };

	global.codes = ns;
})(this, document, jQuery, this.codes);
