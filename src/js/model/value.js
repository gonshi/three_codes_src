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
      ns.codeSound[codeArray_i] = new Audio( 'audio/' + ns.codeArray[codeArray_i] + '.mp3');
    }
	}
  global.codes = ns;
})(this, document, jQuery, this.codes);
