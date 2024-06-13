
const emojiDetails = [
  { description: 'Smiling face with sunglasses', emoji: '😎' },
  { description: 'Thumbs up', emoji: '👍' },
  { description: 'Heart eyes', emoji: '😍' },
  { description: 'Crying face', emoji: '😭' },
  { description: 'Om', emoji: '🕉️' },
  { description: 'Grinning face', emoji: '😀' },
  { description: 'Face with tears of joy', emoji: '😂' },
  { description: 'Smiling face with halo', emoji: '😇' },
  { description: 'Winking face', emoji: '😉' },
  { description: 'Thinking face', emoji: '🤔' },
  { description: 'Face with raised eyebrow', emoji: '🤨' },
  { description: 'Zipper-mouth face', emoji: '🤐' },
  { description: 'Face with medical mask', emoji: '😷' },
  { description: 'Face with thermometer', emoji: '🤒' },
  { description: 'Face with head-bandage', emoji: '🤕' },
  { description: 'Sleeping face', emoji: '😴' },
  { description: 'Drooling face', emoji: '🤤' },
  { description: 'Sleeping symbol', emoji: '💤' },
  { description: 'Pensive face', emoji: '😔' },
  { description: 'Confused face', emoji: '😕' },
  { description: 'Money-mouth face', emoji: '🤑' },
  { description: 'Hugging face', emoji: '🤗' },
  { description: 'Nerd face', emoji: '🤓' },
  { description: 'Smiling face with hearts', emoji: '🥰' },
  { description: 'Partying face', emoji: '🥳' },
  { description: 'Face with monocle', emoji: '🧐' },
  { description: 'Angry face', emoji: '😠' },
  { description: 'Face with steam from nose', emoji: '😤' },
  { description: 'Exploding head', emoji: '🤯' },
  { description: 'Cowboy hat face', emoji: '🤠' },
  { description: 'Clown face', emoji: '🤡' },
  { description: 'Robot face', emoji: '🤖' },
  { description: 'Pile of poo', emoji: '💩' },
  { description: 'Ghost', emoji: '👻' },
  { description: 'Skull', emoji: '💀' },
  { description: 'Alien', emoji: '👽' },
  { description: 'Pumpkin', emoji: '🎃' },
  { description: 'Christmas tree', emoji: '🎄' },
  { description: 'Sparkles', emoji: '✨' },
  { description: 'Fire', emoji: '🔥' },
  { description: 'Hundred points', emoji: '💯' },
  { description: 'Party popper', emoji: '🎉' },
  { description: 'Balloon', emoji: '🎈' },
  { description: 'Wrapped gift', emoji: '🎁' },
  { description: 'Ribbon', emoji: '🎀' },
  { description: 'Ticket', emoji: '🎫' },
  { description: 'Trophy', emoji: '🏆' },
  { description: 'Medal', emoji: '🏅' },
  { description: 'First place medal', emoji: '🥇' },
  { description: 'Soccer ball', emoji: '⚽' },
  { description: 'Basketball', emoji: '🏀' },
  { description: 'Baseball', emoji: '⚾' },
  { description: 'Football', emoji: '🏈' },
  { description: 'Tennis ball', emoji: '🎾' },
  { description: 'Bowling', emoji: '🎳' },
  { description: 'Red circle', emoji: '🔴' },
  { description: 'Blue circle', emoji: '🔵' },
  { description: 'Green circle', emoji: '🟢' },
  { description: 'Yellow circle', emoji: '🟡' },
  { description: 'Orange circle', emoji: '🟠' },
  { description: 'Purple circle', emoji: '🟣' },
  { description: 'Brown circle', emoji: '🟤' },
  { description: 'Black circle', emoji: '⚫' },
  { description: 'White circle', emoji: '⚪' },
  { description: 'Red heart', emoji: '❤️' },
  { description: 'Orange heart', emoji: '🧡' },
  { description: 'Yellow heart', emoji: '💛' },
  { description: 'Green heart', emoji: '💚' },
  { description: 'Blue heart', emoji: '💙' },
  { description: 'Purple heart', emoji: '💜' },
  { description: 'Brown heart', emoji: '🤎' },
  { description: 'Black heart', emoji: '🖤' },
  { description: 'White heart', emoji: '🤍' },
  { description: 'Broken heart', emoji: '💔' },
];


//fetching all the divs 

const emojiContainer = document.querySelector(".emoji-container"); 

const inputEl = document.querySelector("#input"); 


const resultEl = document.querySelector("#result");

const resultText = document.createElement("h3"); 
resultText.className = 'result-text'; 
resultEl.append(resultText); 

const scoreEl = document.querySelector("#score");
const scoreText = document.createElement("h3");
scoreText.className = 'score-text'; 
scoreEl.append(scoreText); 


var currentEmojiIndex = 0; 
var score = 0; 



function displayEmoji() {
  emojiContainer.textContent = emojiDetails[currentEmojiIndex].emoji; 
}


// displayEmoji();

function checkGuess() {
  const guess = inputEl.value.trim().toLowerCase(); 

  const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

  // console.log(guess);

  if (guess === correctEmoji) {
    resultText.textContent = "Correct"; 
    resultText.style.color = 'green'; 
    score++; 
  } else {
    resultText.textContent = "InCorrect";
    resultText.style.color = 'red'; 
    score--; 


  }
  scoreText.textContent = `Score : ${score}`; 

  inputEl.value = ''; 
  inputEl.focus(); 
  nextEmoji(); 
}

// checkGuess();


function nextEmoji() {
  currentEmojiIndex++; 

  if (currentEmojiIndex === emojiDetails.length) {
    currentEmojiIndex = 0; 
  }

  displayEmoji(); 
}



document.addEventListener('DOMContentLoaded', () => {
  displayEmoji(); 
})

inputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkGuess();
  }
}); 
