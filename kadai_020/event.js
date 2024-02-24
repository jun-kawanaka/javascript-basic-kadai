// HTMLのbuttonをbtnに代入する
const btn = document.getElementById('btn');

// HTMLのh2をtextに代入する
const text = document.getElementById('text');

// ボタンをクリックしたときに
btn.addEventListener('click', () => {
  
  // h2の「ボタンをクリックしました」と変更
  text.textContent = 'ボタンをクリックしました';
});
