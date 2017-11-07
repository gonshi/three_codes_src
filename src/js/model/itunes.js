(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

	var fadeLimit = 25;
	var fadeCount = 0;
	var interval = 20;
	var lastingTime = 5000; // 演奏後に曲を続かせるduration
  var fadeVal;
  var thinkTime = 1500;
	ns.defaultFadeVal = 0.02;

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
