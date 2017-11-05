(function(global, doc, $, ns, undefined) {
	'use strict';
	ns = ns || {};

    boombox.setup();
    boombox.visibilityChange = new Function();
    //boombox.onFocus = new Function();
    boombox.onPageShow = new Function();
    boombox.onBlur = new Function();
    boombox.onPageHide = new Function();

    ns.preload = function(src, _callback){
        var callback = _callback || new Function();
        var id;
        if(src.match(/audio\/(.*?)\.mp3/)){
            id = (src.match(/audio\/(.*?)\.mp3/))[1];
        }
        else{
            id = 'song';
        }

        // preload
        boombox.load(id, {
            src: [
                {
                    media: 'audio/mp3',
                    path: src
                }
            ],
        }, function(){
            console.log(id);
            callback();
        });
        boombox.get(id).volume(0);
        boombox.get(id).play();
        boombox.get(id).pause();
        boombox.get(id).volume(1);
    };

    ns.play = function(src, _delay){
        var id;
        if(src.match(/audio\/(.*?)\.mp3/)){
            id = (src.match(/audio\/(.*?)\.mp3/))[1];
        }
        else{
            id = 'song';
        }

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

	global.codes = ns;
})(this, document, jQuery, this.codes);
