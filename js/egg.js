function lele () {
  "use strict";

  // type 'lele' on your keyboard
  var key = [76,69,76,69];
  var ck = 0;
  var max = key.length;

  var lele = function() {

    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.pointerEvents = "none";
    img.style.width = '240px';
    img.style.height = '200px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 125px)';
    img.style.bottom = '-250px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.bottom = '-10px';
    },50);

    window.setTimeout(function(){
      img.style.bottom = '-250px';
    }, 3300);

    window.setTimeout(function(){
      img.parentNode.removeChild(img);
      shock.parentNode.removeChild(shock);
    }, 5400);

  };

  var record = function(e) {

    if ( e.which === key[ck] ) {
      ck++;
    } else {
      ck = 0;
    }

    if ( ck >= max ) {
      lele();
      ck = 0;
    }

  };

  var init = function(data) {

    document.addEventListener('keyup', record);

  };

  var data = 'images/sh.png'

  init(data);
}