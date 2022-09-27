
let myName = "Fer";
  const nameSpan = document.getElementById('name');
    nameSpan.textContent = myName;

let myAge = 16;
  const ageSpan = document.getElementById('age');
  ageSpan.textContent = myAge;

let likesMusic = true;
let likesMusicText;

if(likesMusic === true) {
  likesMusicText = 'toda la música es buena';
} else {
    likesMusicText = 'No soy fan';
}

const likesMusicSpan = document.querySelector('#likesMusic');
likesMusicSpan.textContent = likesMusicText;

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
    //alert('Key pressed');
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]);
    }

    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex]);
    }

});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
}
