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
            if(id.match('song')){
                setTimeout(function(){
                    ns.song_loaded = true;
                }, 500);
            }
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
        boombox.get(id).current_volume =
            Math.max(
                Math.min(boombox.get(id).current_volume, 1)
            , 0);
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
