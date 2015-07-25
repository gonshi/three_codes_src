(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

  ns.ua = function(){
    var _agent = navigator.userAgent.toLowerCase();
    if( _agent.match('iphone') || _agent.match('ipod') || _agent.match('ipad') || _agent.match('android') || !_agent.match('chrome') ){
      $('#wrapper').css({'display': 'none'});
      $('#error').css({'display': 'block'});
    }
  };
	
  global.codes = ns;
})(this, document, jQuery, this.codes);
