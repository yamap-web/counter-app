'use strict';
// カウントアップ機能の実装

let counter = document.querySelector('#counter');
let up = document.querySelector('#up');
let down = document.querySelector('#down')
let count = 0

up.addEventListener('click', function(){
  count += 1;
  if (count > 100) {
      count = 0;
    }
  counter.innerHTML = count;
})
down.addEventListener('click', function(){
  count -= 1;
  if (count < 0) {
      count = 0;
    }
  counter.innerHTML = count;
})