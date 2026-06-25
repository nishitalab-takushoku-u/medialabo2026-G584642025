let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
let owari = false;

function hantei() {

  let result = document.querySelector('#result');

  if (owari || kaisu >= 4) {
    result.textContent =
      '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    return;
  }

  let yoso = Number(document.querySelector('#yoso').value);

  kaisu++;
  document.querySelector('#kaisu').textContent = kaisu + 1;

  if (yoso === kotae) {
    result.textContent = '正解です．おめでとう!';
    owari = true;
  }
  else if (kaisu === 3) {
    result.textContent =
      'まちがい．残念でした．答えは ' + kotae + ' です．';
    owari = true;
  }
  else if (yoso < kotae) {
    result.textContent =
      'まちがい．答えはもっと大きいですよ';
  }
  else {
    result.textContent =
      'まちがい．答えはもっと小さいですよ';
  }
}

let b = document.querySelector('#btn');
b.addEventListener('click', hantei);
