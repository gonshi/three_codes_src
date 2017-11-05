(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

  ns.ua = function(){
    var _agent = navigator.userAgent.toLowerCase();
    if(_agent.match('iphone') || _agent.match('ipod') || _agent.match('android')){
        $('body').addClass('is_sp');
        window.mobile = true;
    }
  };

  global.codes = ns;
})(this, document, jQuery, this.codes);
