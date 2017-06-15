'use strict';
$(function() {
  var shinsotsu = new Array(
      { image: 'images/1.jpg', question: '私のボーリングのベストスコアは270ですが、何回連続ストライクだったでしょう？' },
      { image: 'images/2.jpg', question: '私のあだ名は何でしょう？' },
      { image: 'images/3.jpg', question: '東京新橋でインタビューを受けましたが、何時頃に受けたでしょうか？' },
      { image: 'images/4.jpg', question: '好きなゲームはなんでしょう？' },
      { image: 'images/5.jpg', question: '私、長岡大樹は完全◯◯動物でしょうか？' },
      { image: 'images/6.jpg', question: '私の出身はどこでしょう？' },
      { image: 'images/7.jpg', question: '推してるゆるキャラの名前は？' },
      { image: 'images/8.jpg', question: 'わたしの趣味は何でしょう？' },
      { image: 'images/9.jpg', question: '私、北原將平の愛読書は「○○が最強のソリューションである」。○○に当てはまる文字は何か？' },
      { image: 'images/10.jpg', question: '似ている将棋の棋士のフルネームと年齢は？' },
      { image: 'images/11.jpg', question: '僕のニックネームはなんでしょう？' },
      { image: 'images/12.jpg', question: '飼っている猫の匹数は？' },
      { image: 'images/13.jpg', question: '私武田が好きな日本酒はなんでしょう？' },
      { image: 'images/14.jpg', question: "私はどっちでしょう！？" },
      { image: 'images/15.jpg', question: '私の出身地はどこでしょう？' },
      { image: 'images/16.jpg', question: '私の好きな動物は？' },
      { image: 'images/17.jpg', question: '私に似ている芸能人は？' }
    ),
  len = shinsotsu.length,
  speed = 50,    // 7はループの速度 Windowsは1でmacは7が丁度良かった
  spaceKey = 32,
  roulette;

  function rand() {
    return Math.floor(Math.random() * len);
  }

  function startRoulette() {
    clearInterval(roulette);
    roulette = setInterval(function() {
      $(".roulette img").attr("src", shinsotsu[rand()].image);
    }, speed);
  }

  function removeMember(imageSrc) {
    shinsotsu.some(function(v, i) {
      if (v.image == imageSrc) {shinsotsu.splice(i,1)} else {console.log("aa");};
    });
    // console.log(shinsotsu);
  }

  function showModal(imageSrc) {
    var filtered = $.grep(shinsotsu, function(e){
       return e.image == imageSrc;
    }),
    question = filtered[0].question;

    if($("#modal-overlay")[0]) return false ;   //新しくモーダルウィンドウを起動しない
    $("body").append('<div id="modal-overlay"></div>');
    $("#modal-overlay").fadeIn("slow");
    centeringModal()
    $('#modal-text').text(question);
    $( "#modal-content" ).fadeIn("slow") ;
    $( "#modal-overlay,#modal-close" ).unbind().click( function(){
      closeModal();
    });
  }

  function closeModal() {
    $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){
      $('#modal-overlay').remove();
    });
  }

  $(document).keydown(function(e) {
    e.preventDefault;
    var imageSrc = $('.roulette img').attr('src')
    if (e.keyCode === spaceKey) {
      clearInterval(roulette);
      showModal(imageSrc);
    } else {
      closeModal();
      removeMember(imageSrc);
      startRoulette();
    }
  })

  function centeringModal() {
    var w = $(window).width();
    var h = $(window).height();
    var cw = $("#modal-content").outerWidth({ margin:true });
    var ch = $("#modal-content").outerHeight({ margin:true });
    var pxleft = ((w - cw) / 2);
    var pxtop = ((h - ch) / 2);
    $("#modal-content").css({ "left": pxleft + "px" });
    $("#modal-content").css({ "top": pxtop + "px" });
  }
  startRoulette()
});
