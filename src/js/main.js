(function(global, doc, $, ns, undefined) {
  'use strict';
  ns = ns || {};
  $(function() {
    if(location.href.match(/https/)) location.replace('http://gonshi.github.io/three-codes');
    ns.ua();
    ns.songReset();
		ns.init();
    /*
    ns.itunesSearch({
      term: 'Teardrops On My Guitar',
      limit: 10
    });*/
  });

	ns.init = function(){
		ns.codePattern = Math.floor( Math.random() * ns.songList.length );
    //ns.codePattern = ns.songList.length - 1;
		ns.currentSong = 0;
		ns.tempo = 60 / ns.songList[ns.codePattern][ns.currentSong].bpm;
    ns.scroll();

		//reset Btn
		var btn = $('.btns');
		btn.find('.first').removeClass('selected');
		btn.find('.second').removeClass('selected');
		btn.find('.third').removeClass('selected');
		ns.btnHandler(0);

    ns.resetAnswer();

    // 裏サイトへ
    $('#ura').on('click', function(){
      $('#wrapper').velocity({
        rotateY: '90deg',
        scale: 0.5
      }, 1500, function(){
        $('.threeSize').show();

        $('#wrapper').velocity({
          rotateY: '180deg',
          scale: 1
        }, 1500);
      });
    });
	};

  global.codes = ns;
})(this, document, jQuery, this.codes);
