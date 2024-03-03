// HTML buttonをbtnへ代入する
const btn = document.getElementById('btn');

// HTML h2をtextへ代入する
const text = document.getElementById('text');

// ボタンをクリックした際
btn.addEventListener('click',() => {

  // ２秒後に「ボタンをクリックしましたへ変更する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});