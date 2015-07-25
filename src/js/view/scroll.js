(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

  ns.scroll = function(){
    for( var i = 0; i < 3; i++ ){
      rotate(i);
    }
  };

  var rotate = function(i){
    (function(_i){
      $('.slot ' + '.' + ns.typeList[_i]).css({
        'background-position': '0 1px'
      })
      .animate({
        'background-position': '0 ' + ns.maxHeight + 'px'
      },
      {
        duration: ns.speed,
        easing: 'linear',
        complete: function(){
          rotate(_i);	
        }
      });
    })(i);
  };

	global.codes = ns;
})(this, document, jQuery, this.codes);
