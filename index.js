'use strict';
$(function() {
  var shinsotsu = new Array(
      { image: 'images/1.jpg', question: 'ほげほげほげほげ' },
      { iamge: 'images/2.jpg', question: 'aaaaa' },
      { image: 'images/3.jpg', question: 'vvvvv' },
      { image: 'images/4.jpg', question: '好きなゲームはなんでしょう？' },
      { image: 'images/5.jpg', question: 'asdadasadada' },
      { image: 'images/7.jpg', question: '推してるゆるキャラの名前は？' },
      { image: 'images/6.jpg', question: 'asdadasdaadaad' },
      { image: 'images/8.jpg', question: 'わたしの趣味は何でしょう？' },
      { image: 'images/9.jpg', question: '私、北原將平の愛読書は「○○が最強のソリューションである」。○○に当てはまる文字は何か？' },
      { image: 'images/10.jpg', question: 'asdadasdaadaad' },
      { image: 'images/11.jpg', question: 'asdadasdaadaad' },
      { image: 'images/12.jpg', question: '飼っている猫の匹数は？' },
      { image: 'images/13.jpg', question: '私武田が好きな日本酒はなんでしょう？' },
      { image: 'images/14.jpg', question: "私はどっちでしょう！？ <img src='images/izumin.jpg' style='display: block;'>" },
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
    var idx = shinsotsu.indexOf(imageSrc);
    if (idx >= 0) {
      shinsotsu.splice(idx, 1);
    }
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
    if (e.keyCode === spaceKey) {
      clearInterval(roulette);
      var imageSrc = $('.roulette img').attr('src')
      showModal(imageSrc);
    } else {
      removeMember(imageSrc);
      closeModal();
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
