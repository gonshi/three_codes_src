(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};
  var strokeTime = 1000;
	ns.btnHandler = function(_type){
		var type = ns.typeList[_type];
		var nextIndex = ns.codeArray.indexOf( ns.songList[ns.codePattern][ns.currentSong].code[type] );
		var nextPos = -1 * ns.codeHeight * nextIndex;
		var slotTarget = $('.slot .' + type);
		var btnTarget = $('.btns .' + type);
		btnTarget.addClass('next');
		btnTarget.on('click', function(){
			slotTarget.clearQueue().stop();
			slotTarget.css({'background-position': '0 ' + nextPos + 'px'});
			ns.codeSound[nextIndex].play();
			btnTarget.off('click').addClass('selected').removeClass('next');
      // chara animate
      $('.chara').addClass( 'play' );

      // guitar Effect
      $('.guitarEffect__0001')
        .css({'bottom': '20px', 'right': '40px', 'opacity': 0})
        .animate({'bottom': '10px', 'right': '10px', 'opacity': 1}, 500,'linear')
        .animate({'bottom': 0, 'right': '-20px', 'opacity': 0}, 500,'linear');

      $('.guitarEffect__0002')
        .css({'bottom': '-30px', 'right': '40px', 'opacity': 0})
        .animate({'bottom': '-60px', 'right': '20px', 'opacity': 1}, 500,'linear')
        .animate({'bottom': '-90px', 'right': 0, 'opacity': 0}, 500,'linear');


      setTimeout(function(){
        // for Next Step
        if( _type === 2 ){
          ns.itunesLookUp(ns.songList[ns.codePattern][ns.currentSong].id);
        }
        else{
          $( '.chara' ).removeClass( 'play' );
          ns.btnHandler( _type + 1 );
        }
      }, strokeTime);
		});
	};

	global.codes = ns;
})(this, document, jQuery, this.codes);
