/* 0.4.6 2019-12-16 15:29:28 */
var app=new function(){this.name="Alive",this.version="6",this.date="2018",this.folder="asset-v6/",this.looptime=7110,this.totalframe=342,this.nbpolo=7,this.nbloopbonus=3,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=26,this.recminloop=3,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.sndmetronome="-metronome.wav",this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#120521",this.col0="#a07dfa",this.col1="#825fd2",this.col2="#5f3ca0",this.col3="#371464",this.col4="#230a41",this.animearray=[{name:"1_kick",color:"3593BD",uniqsnd:!0},{name:"2_snare",color:"3593BD",uniqsnd:!0},{name:"3_kanye",color:"3593BD",uniqsnd:!0},{name:"4_tuctuc",color:"3593BD",uniqsnd:!0},{name:"5_break",color:"3593BD",uniqsnd:!0},{name:"6_cribasse",color:"FA6345",uniqsnd:!1},{name:"7_distotut",color:"FA6345",uniqsnd:!0},{name:"8_screw",color:"FA6345",uniqsnd:!0},{name:"9_shaolin",color:"FA6345",uniqsnd:!1},{name:"10_shower",color:"FA6345",uniqsnd:!0},{name:"11_basse",color:"296836",uniqsnd:!1},{name:"12_hou",color:"296836",uniqsnd:!1},{name:"13_clav",color:"296836",uniqsnd:!1},{name:"14_synth",color:"296836",uniqsnd:!0},{name:"15_yah",color:"296836",uniqsnd:!1},{name:"16_hurry",color:"7F0BB5",uniqsnd:!0},{name:"17_good",color:"7F0BB5",uniqsnd:!0},{name:"18_mind",color:"7F0BB5",uniqsnd:!0},{name:"19_haha",color:"7F0BB5",uniqsnd:!0},{name:"20_wow",color:"7F0BB5",uniqsnd:!0}],this.bonusarray=[],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var s=this.animearray[n].name;this.animearray[n].soundA=s+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?s+"_a":s+"_b",this.animearray[n].anime=s+"-sprite.png",this.animearray[n].animeData=s+".json"}};