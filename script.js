'use strict';
/*
console.log(document.querySelector('.message.textContent').textContent);
document.querySelector('.message.textContent').textContent = ;
document.querySelector('.number').textContent = 56;
document.querySelector('.score').textContent = 89;
document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = 0;
document.querySelector('.btn.check').addEventListener('click', function () {
  let inputedNumber = Number(document.querySelector('.guess').value);
  if (inputedNumber == false) {
    message.textContent = 'Please enter a number and try again';
  } else {
    if (Number(score.textContent) > 1) {
      if (inputedNumber !== secretNumber) {
        message.textContent = inputedNumber > secretNumber ? 'lower' : 'higher';
        score.textContent = Number(score.textContent) - 1;
      } else {
        message.textContent = 'correct number🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = inputedNumber;
        if (Number(score.textContent) > highScore) {
          highScore = Number(score.textContent);
        }
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      document.querySelector('.message').textContent = '😭 You have lost';
      score.textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = 'start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
