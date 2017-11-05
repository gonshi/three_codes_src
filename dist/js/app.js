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

(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

  ns.songReset = function(){
    ns.songList = [
      //[
      //  {
      //    id: '129767452',
      //    code:{
      //      first: 'Am',
      //      second: 'Em',
      //      third: 'F'
      //    },
      //    bpm: 97,
      //    beat: 2,
      //    start: 14.7
      //  } // チェリー
      //],
      [
        {
          id: '827638927',
          code:{
            first: 'Fs',
            second: 'Cs',
            third: 'Dsm'
          },
          bpm: 140,
          beat: 4,
          start: 0
        }//let it go
      ],
      [
        {
          id: '317186341',
          code:{
            first: 'G',
            second: 'A',
            third: 'D'
          },
          bpm: 115,
          beat: 2,
          start: 0.6
        } // funny bunny
      ],
      //[
      //  {
      //    id: '592933803',
      //    code:{
      //      first: 'C',
      //      second: 'D',
      //      third: 'Em'
      //    },
      //    bpm: 100,
      //    beat: 2,
      //    start: 3.8
      //  } // 今夜はブギーバック
      //],
      /*
      [
        {
          id: '401138169',
          code:{
            first: 'Bm',
            second: 'D',
            third: 'G'
          },
          bpm: 190,
          beat: 4,
          start: -1.3
        } //HELP
      ]
      */
      [
        {
          id: '416565145',
          code:{
            first: 'G',
            second: 'D',
            third: 'Em'
          },
          bpm: 138,
          beat: 4,
          start: 3.2
        }
      ],
			[
        {
					id: '254659541',
          code:{
            first: 'Bb',
            second: 'Gm',
            third: 'Dm'
          },
          bpm: 62,
          beat: 4,
          start: 3.2
        } // forever love
			],
			[
				{
					id: '879034409',
					code:{
						first: 'Bm',
						second: 'Em',
						third: 'Am'
					},
					bpm: 192,
					beat: 4,
					start: 19.0
				}
			], // ファントムヴァイブレーション
			[
				{
					id: '271601352',
					code:{
						first: 'G',
						second: 'A',
						third: 'Bm'
					},
					bpm: 96,
					beat: 2,
					start: -0.5
				}
			], // CALL ME
			[
				{
					id: '201281527',
					code:{
						first: 'C',
						second: 'F',
						third: 'G'
					},
					bpm: 105,
					beat: 2,
					start: 10.9
				}
			], // CALL ME
			//[
			//	{
			//		id: '379048300',
			//		code:{
			//			first: 'Bm',
			//			second: 'G',
			//			third: 'A'
			//		},
			//		bpm: 150,
			//		beat: 4,
			//		start: 1.3
			//	}
			//], // 忘却の空
			[
				{
					id: '681020904',
					code:{
						first: 'G',
						second: 'A',
						third: 'Fsm'
					},
					bpm: 122,
					beat: 4,
					start: 9.4
				}
			], // 恋するフォーチュンクッキー
			[
				{
					id: '574710838',
					code:{
						first: 'A',
						second: 'B',
						third: 'Csm'
					},
					bpm: 150,
					beat: 4,
					start: 13.7
				}
			], // GROMOROUS SKY
			[
				{
					id: '174420177',
					code:{
						first: 'Am',
						second: 'Dm',
						third: 'G'
					},
					bpm: 142,
					beat: 4,
					start: 16.7
				}
			], // 勝手にしやがれ
      /*
			[
				{
					id: '3625571',
					code:{
						first: 'F',
						second: 'C',
						third: 'Dm'
					},
					bpm: 124,
					beat: 4,
					start: 14.0
				}
			], // By the way
      */
			[
				{
					id: '573927210',
					code:{
						first: 'C',
						second: 'G',
						third: 'Am'
					},
					bpm: 138,
					beat: 4,
					start: 8.0
				}
			], // Overdrive
			[
				{
					id: '321108219',
					code:{
						first: 'As',
						second: 'F',
						third: 'Gm'
					},
					bpm: 100,
					beat: 4,
					start: 11.5
				}
			] // Taylor swift Teardrops On My Guitar
		];
	};
	global.codes = ns;
})(this, document, jQuery, this.codes);

(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};
  ns.speed = 1500;
  ns.maxHeight = 10499;
	ns.codeArray = ['A','B','C','D','E','F','G','Am','Bm','Cm','Dm','Em','Fm','Gm','As','Bs','Cs','Ds','Es','Fs','Gs','Ab','Bb','Cb','Db','Eb','Fb','Gb','Asm','Bsm','Csm','Dsm','Esm','Fsm','Gsm','Abm','Bbm','Cbm','Dbm','Ebm','Fbm','Gbm'];
	ns.codeHeight = 250;
  ns.typeList = ['first', 'second', 'third'];

  var notFoundCode = [ 'Asm', 'Gsm', 'Abm', 'Bbm', 'Gbm' ];

	// for code play
	ns.codePattern = 0;
	ns.currentSong = 0;
	// audio
	ns.codeSound = [];
  // charac
  ns.charaHeight = 489;

	var codeArray_i;
  var nCode_i;
  var exist_code;
  var _codeArrayLength = ns.codeArray.length;
  var _nCodeLength = notFoundCode.length;

	for( codeArray_i = 0; codeArray_i < _codeArrayLength; codeArray_i++ ){
    exist_code = true;
    for( nCode_i = 0; nCode_i < _nCodeLength; nCode_i++ ){
      if( ns.codeArray[codeArray_i] === notFoundCode[nCode_i] ){
        exist_code = false;
        break;
      }
    }
    if(exist_code){
      ns.codeSound[codeArray_i] = 'audio/' + ns.codeArray[codeArray_i] + '.mp3';
    }
	}
  global.codes = ns;
})(this, document, jQuery, this.codes);

(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

	var fadeLimit = 25;
	var fadeCount = 0;
	var interval = 20;
	var lastingTime = 5000; // 演奏後に曲を続かせるduration
  var fadeVal;
  var thinkTime = 1500;
	ns.defaultFadeVal = 0.013;

	ns.itunesSearch = function(options){
		var params = {
			lang: 'ja_jp',
			entry: 'music',
			media: 'music',
			country: 'JP',
		};
		if (options && options.term) {
			params.term = options.term;
		}
		if (options && options.limit) {
			params.limit = options.limit;
		}
		$.ajax({
			url: 'https://itunes.apple.com/search',
			method: 'GET',
			data: params,
			dataType: 'jsonp',
			success: function(json) {
				showData(json, options);
			},
			error: function() {
				//console.log('itunes api search error. ', arguments);
			},
		});
		var showData = function(json) {
			for (var i = 0, len = json.results.length; i < len; i++) {
        /*
				var result = json.results[i];
				console.log(result.artistName);
				console.log(result.trackId);
				console.log(result.previewUrl);
        */
			}
		};
	};

	ns.itunesLookUp = function(id){
		var params = {
			id: id,
			country: 'JP',
		};

		$.ajax({
			url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsLookup',
			method: 'GET',
			data: params,
			dataType: 'jsonp',
			success: function(json) {
				play(json);
			},
			error: function() {
				//console.log('itunes api search error. ', arguments);
			},
		});

		var play = function(json) {
            ns.json = json;
            fadeVal = ns.defaultFadeVal;
            if( json.results[0].previewUrl.substr(-3, 3) === 'm4v' ) fadeVal = 0.038; // ビデオは音が小さいので最大まであげる
            ns.song = json.results[0].previewUrl;
            ns.preload(ns.song);
        };
	};

    ns.itunesPlay = function(){
      // thinking expression
      $('.chara').removeClass( 'play' ).addClass( 'think' );
      setTimeout(function(){ //thinking time expression
        var play = function(){
            if(ns.song_loaded){
                var delay;

                ns.showAnswer(ns.json);
                $('.chara').removeClass( 'think' ).addClass( 'got' );
                if( ( delay = ns.songList[ns.codePattern][ns.currentSong].start ) < 0 ){
                  setTimeout(function(){
                    ns.setVolume(ns.song, 0);
                    ns.play(ns.song);
                    fadeIn();
                  }, delay * -1000);
                }
                else{
                  ns.setVolume(ns.song, 0);
                  ns.play(ns.song, delay);
                  fadeIn();
                }
                setTimeout(function(){
                  danceAndPlay('first', ns.tempo, ns.songList[ns.codePattern][ns.currentSong].beat );
                  setTimeout(function(){
                    $('.chara').removeClass( 'got' );
                  }, thinkTime);
                }, 1400 ); // wait for fade in expression of the song

                ns.song_loaded = false;
            }
            else{
                requestAnimationFrame(play);
            }
        };

        play();
      }, thinkTime);
    };

	var danceAndPlay = function(type, tempo, beat){
		var _i = 1;
		var typeNum = ns.typeList.indexOf(type);
		var codeName = ns.songList[ns.codePattern][ns.currentSong].code[type];
        ns.play(ns.codeSound[ns.codeArray.indexOf(codeName)]);
		animateCode(type);
		for(; _i < beat; _i++){
			animateCode(type, tempo, _i);
		}
		setTimeout(function(){
			if( typeNum + 1 < 3 ) danceAndPlay(ns.typeList[typeNum + 1], ns.tempo, beat);
			else{
				setTimeout(function(){
					fadeOut();
				}, lastingTime);
			}
		}, tempo * beat * 1000);
	};

	var fadeIn = function(){
        setTimeout(function(){
            ns.changeVolume(ns.song, fadeVal);
            fadeCount++;
            if( fadeCount < fadeLimit ){
                fadeIn();
            }
            else{
                fadeCount = 0;
            }
        },interval);
	};

	var fadeOut = function(){
        setTimeout(function(){
            ns.changeVolume(ns.song, -fadeVal);
            fadeCount++;

            if( fadeCount < fadeLimit - 1){
                fadeOut();
            }
            else{
                ns.pause(ns.song);
                fadeCount = 0;
                ns.songList.splice( ns.codePattern, 1); // 一度出たやつはもう出ないようにする
                if( ns.songList.length === 0 ) ns.songReset();
                ns.init();
            }
        },interval);
	};

	var animateCode = function(type, tempo, count){
		setTimeout(function(){
			$('.slot .' + type)
				.animate({'transform': 'scale(1.2)'}, 50)
				.animate({'transform': 'scale(1)'}, 50);
		},tempo * count * 1000);
	};

	global.codes = ns;
})(this, document, jQuery, this.codes);

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

        if(_type === 0){
            for(var i = 0; i < 3; i++){
              var type = ns.typeList[i];
              var _nextIndex = ns.codeArray.indexOf( ns.songList[ns.codePattern][ns.currentSong].code[type] );
              ns.preload(ns.codeSound[_nextIndex]);
            }
        }

		btnTarget.addClass('next');
		btnTarget.on('click', function(){
			slotTarget.clearQueue().stop();
			slotTarget.css({'background-position': '0 ' + nextPos + 'px'});

			ns.play(ns.codeSound[nextIndex]);
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


            if(_type === 0){
                ns.itunesLookUp(ns.songList[ns.codePattern][ns.currentSong].id);
            }

            setTimeout(function(){
              if(_type === 2){
                  ns.itunesPlay();
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

(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

    boombox.setup();
    boombox.visibilityChange = new Function();
    //boombox.onFocus = new Function();
    boombox.onPageShow = new Function();
    boombox.onBlur = new Function();
    boombox.onPageHide = new Function();

    ns.song_id = [];

    ns.preload = function(src, _callback){
        var callback = _callback || new Function();
        var id = ns.getId(src);

        // preload
        boombox.load(id, {
            src: [
                {
                    media: 'audio/mp3',
                    path: src
                }
            ],
        }, function(){
            if(id.match('song')) ns.song_loaded = true;
            callback();
        });
        boombox.get(id).volume(0);
        boombox.get(id).play();
        boombox.get(id).pause();
        boombox.get(id).volume(1);
        boombox.get(id).current_volume = 1;
    };

    ns.play = function(src, _delay){
        var id = ns.getId(src);;
        if(!boombox.get(id)) ns.preload(src);

        var delay = _delay || 0;

        if(delay === 0){
            boombox.get(id).replay();
        }
        else{
            boombox.get(id).state.time.pause = (boombox.get(id).state.time.progress + delay) * 1000;
            boombox.get(id).resume();
        }
    };

    ns.changeVolume = function(src, volume){
        var id = ns.getId(src);
        if(!boombox.get(id)) ns.preload(src);

        boombox.get(id).current_volume += volume;
        boombox.get(id).volume(boombox.get(id).current_volume);
    }

    ns.setVolume = function(src, volume){
        var id = ns.getId(src);
        if(!boombox.get(id)) ns.preload(src);

        boombox.get(id).current_volume = volume;
        boombox.get(id).volume(boombox.get(id).current_volume);
    }

    ns.pause = function(src){
        var id = ns.getId(src);
        if(!boombox.get(id)) ns.preload(src);

        boombox.get(id).pause();
    }

    ns.getId = function(src){
        var id;
        if(src.match(/audio\/(.*?)\.mp3/)){
            id = (src.match(/audio\/(.*?)\.mp3/))[1];
        }
        else{
            var is_matched = false;
            var match_id;
            for(var i = 0; i < ns.song_id.length; i++){
                if(ns.song_id[i] === src){
                    match_id = i;
                    is_matched = true;
                }
            }

            if(!is_matched){
                ns.song_id.push(src);
                match_id = ns.song_id.length - 1;
            }

            id = 'song' + match_id;
        }
        return id;
    }

	global.codes = ns;
})(this, document, jQuery, this.codes);

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

(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

  ns.showAnswer = function(json){
    $('.jacket img').attr({'src': json.results[0].artworkUrl100});
    $('.answer .trackName').text(json.results[0].trackName);
    $('.answer .artistName').text(json.results[0].artistName);

    $('.answer')
      .css({'display': 'block'})
      .animate({'opacity': 1});

    $('.jacket')
      .css({'display': 'block', 'top': '-80px'})
      .animate({'opacity': 1, 'top': '-120px'});
  };

  ns.resetAnswer = function(){
    $('.answer, .jacket')
      .animate({'opacity': '0'});
  };

	global.codes = ns;
})(this, document, jQuery, this.codes);

(function(global, doc, $, ns, undefined) {
  'use strict';
  ns = ns || {};
  $(function() {
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
