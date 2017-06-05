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

  // 配列の長さ
  len = images.length,
  condition = true;

  function rand() {
    return Math.floor(Math.random() * len);
  }

  var roulette = setInterval(function() {
    $(".roulette img").attr("src",images[rand()]);
  }, 1);

  function stopRoulette() {
    clearInterval(roulette);
  }

  $('#stop').click(function(e) {
    stopRoulette();
    var imageSrc = $('.roulette img').attr('src')
    console.log(imageSrc);
    var idx = images.indexOf(imageSrc);
    if (idx >= 0) {
      images.splice(idx, 1);
    }
    console.log(images);
    e.preventDefault;
  })

  $(document).keydown(function(e) {
    e.preventDefault;
    if (e.keyCode === 32) {
      stopRoulette();
      var roulette = setInterval(function() {
        $(".roulette img").attr("src",images[rand()]);
      }, 1);
    }
  });
});
