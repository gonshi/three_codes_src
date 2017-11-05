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
