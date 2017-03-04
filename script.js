function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('click', () => {
  key.classList.add('playing');
}), false);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener('keydown', playSound);


const string6 = document.getElementById('a6');
document.getElementById('6').addEventListener('click', () => { string6.currentTime = 0; string6.play() }, false);

const string5 = document.getElementById('a5');
document.getElementById('5').addEventListener('click', () => { string5.currentTime = 0; string5.play() }, false);

const string4 = document.getElementById('a4');
document.getElementById('4').addEventListener('click', () => { string4.currentTime = 0; string4.play() }, false);

const string3 = document.getElementById('a3');
document.getElementById('3').addEventListener('click', () => { string3.currentTime = 0; string3.play() }, false);

const string2 = document.getElementById('a2');
document.getElementById('2').addEventListener('click', () => { string2.currentTime = 0; string2.play() }, false);

const string1 = document.getElementById('a1');
document.getElementById('1').addEventListener('click', () => { string1.currentTime = 0; string1.play() }, false);
