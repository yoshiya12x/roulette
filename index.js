'use strict';
$(function() {
  // imagesの要素を集めた画像に差し替えておく
  var images = new Array(
      'images/star.png',
      'images/flower.png',
      'images/coin.png',
      'images/mshroom.png',
      'images/random.png',
      'images/chomp.png'
    ),
  len = images.length,
  speed = 7,    // 7はループの速度　Windowsは1でmacは7が丁度良かった
  roulette;

  function rand() {
    return Math.floor(Math.random() * len);
  }

  function startRoulette() {
    clearInterval(roulette);
    roulette = setInterval(function() {
      $(".roulette img").attr("src", images[rand()]);
    }, speed);
  }

  function removeMember() {
    var imageSrc = $('.roulette img').attr('src')
    // console.log(imageSrc); //デバッグ用
    var idx = images.indexOf(imageSrc);
    if (idx >= 0) {
      images.splice(idx, 1);
    }
    // console.log(images); //デバッグ用
  }

  $(document).keydown(function(e) {
    if (e.keyCode === 32) {
      clearInterval(roulette);
      // ここらへんにモーダルを表示する処理を書く。　もしくは配列から削除する前にモーダルを出したほうが良いのでremoveMember関数の名前を変えたほうがいいかな
      removeMember()
    } else {
      startRoulette();
    }
    e.preventDefault;
  })

  startRoulette()
});
