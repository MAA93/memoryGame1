// const card = document.querySelectorAll('.cell')
// const front = document.querySelectorAll('.front')
// const container = document.querySelector('.container')
// const score = document.querySelector('.score span')
// const timer = document.querySelector('.timer span');
// let timeLeft = 25;
// let timerInterval;



// suffleImage()
// clicking()
// startTimer()
// function suffleImage(){


//     card.forEach(c=>{

//         const num = [...Array(card.length).keys()]
//         const random = Math.floor(Math.random()*card.length)

//         c.style.order = num[random]
//     })
// }


// function clicking(){

//     for(let i =0; i<card.length; i++){


//         front[i].classList.add('show')

//         setInterval(() => {
//             front[i].classList.remove('show')
//         }, 2000);

//         card[i].addEventListener('click' ,()=>{

//             front[i].classList.add('flip')
//            const filppedCard = document.querySelectorAll('.flip')

//             if(filppedCard.length == 2){

//                 container.style.pointerEvents ='none'
                
//                 setInterval(() => {
                    
//                     container.style.pointerEvents ='all'
//                 }, 1000);
 
//                 match(filppedCard[0] , filppedCard[1])
//             }
//         })
//     }
// }




// function match(cardOne , cardTwo){

//     if(cardOne.dataset.index == cardTwo.dataset.index){

//         score.innerHTML = parseInt(score.innerHTML) + 1
       
//         cardOne.classList.remove('flip') 
//         cardTwo.classList.remove('flip') 


//         cardOne.classList.add('match')
//         cardTwo.classList.add('match')
//         if (document.querySelectorAll('.match').length == cards.length) {
//             clearInterval(timerInterval);
//             if (parseInt(score.innerHTML) == 6) {
//              window.alert('Congratulations, you win!');
//             }
//             reset();
//           }
//         } else {
//           setTimeout(() => {
//             cardOne.classList.remove('flip');
//             cardTwo.classList.remove('flip');
//           }, 1000);
//         }
//       }

      
//       function startTimer() {
//         timerInterval = setInterval(() => {
//           if (timeLeft > 0) {
//             timeLeft--;
//             timer.innerHTML = timeLeft;
//           } else {
           
//            if (parseInt(score.innerHTML) == 6) {
            
//               window.alert('Congratulations, you win!\uD83D\uDD25');
//             } else {
//               window.alert('Game over! \uD83C\uDF89');
//             }
          
//             reset();
//           }
//         }, 1000);
//       }
      
//       function reset() {
//         timeLeft = 25;
//         timer.innerHTML = timeLeft;
//         score.innerHTML = '0';
//         cards.forEach(card => {
//           card.classList.remove('match', 'flip');
//         });
//         shuffleImages();
//         clicking();
//         startTimer();
//       }

// const cards = document.querySelectorAll('.cell');
// const front = document.querySelectorAll('.front');
// const container = document.querySelector('.container');
// const score = document.querySelector('.score span');
// const timer = document.querySelector('.timer span');
// let timeLeft = 30;
// let timerInterval;



// shuffleImages();
// clicking();
// startTimer();

// function shuffleImages() {
//   cards.forEach(card => {
//     const num = [...Array(cards.length).keys()];
//     const random = Math.floor(Math.random() * cards.length);
//     card.style.order = num[random];
//   });
// }

// function clicking() {
//   for (let i = 0; i < cards.length; i++) {
//     front[i].classList.add('show');
//     setInterval(() => {
//       front[i].classList.remove('show');
//     }, 2000);

//     cards[i].addEventListener('click', () => {
//       front[i].classList.add('flip');
//       const flippedCards = document.querySelectorAll('.flip');

//       if (flippedCards.length == 2) {
//         container.style.pointerEvents = 'none';
//         setInterval(() => {
//           container.style.pointerEvents = 'all';
//         }, 1000);

//         match(flippedCards[0], flippedCards[1]);
//       }
//     });
//   }
// }

// function match(cardOne, cardTwo) {
//   if (cardOne.dataset.index == cardTwo.dataset.index) {
//     score.innerHTML = parseInt(score.innerHTML) + 1;
//     cardOne.classList.remove('flip');
//     cardTwo.classList.remove('flip');
//     cardOne.classList.add('match');
//     cardTwo.classList.add('match');

//     if (document.querySelectorAll('.match').length == cards.length) {
//       clearInterval(timerInterval);
//       if (parseInt(score.innerHTML) == 6) {
//         window.alert('Congratulations, you win! \uD83D\uDD25');
//       }
//       reset();
//     }
//   } else {
//     setTimeout(() => {
//       cardOne.classList.remove('flip');
//       cardTwo.classList.remove('flip');
//     }, 1000);
//   }
// }
// function resetGame() {
//   timeLeft = 25;
//   timer.innerHTML = timeLeft;
//   score.innerHTML = '0';
//   cards.forEach(card => {
//     card.classList.remove('match', 'flip');
//   });
// }

// function startTimer() {
//   timerInterval = setInterval(() => {
//     if (timeLeft > 0) {
//       timeLeft--;
//       timer.innerHTML = timeLeft;
//     } else {
//       clearInterval(timerInterval);
//       if (parseInt(score.innerHTML) == 6) {
//         window.alert('Congratulations, you win!');
//       } else {
//         window.alert('Game over!');
//       }
//       reset();
//     }
//   }, 1000);
// }

// function reset() {
//   timeLeft = 30;
//   timer.innerHTML = timeLeft;
//   score.innerHTML = '0';
//   cards.forEach(card => {
//     card.classList.remove('match', 'flip');
//   });
//   shuffleImages();
//   clicking();
//   startTimer();
// }

const cards = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');
const container = document.querySelector('.container');
const score = document.querySelector('.score span');
const timer = document.querySelector('.timer span');
let timeLeft = 35;
let timerInterval;
let isPaused = false;

shuffleImages();
clicking();
startTimer();

function shuffleImages() {
  cards.forEach(card => {
    const num = [...Array(cards.length).keys()];
    const random = Math.floor(Math.random() * cards.length);
    card.style.order = num[random];
  });
}

function clicking() {
  for (let i = 0; i < cards.length; i++) {
    front[i].classList.add('show');
    setInterval(() => {
      front[i].classList.remove('show');
    }, 2000);

    cards[i].addEventListener('click', () => {
      front[i].classList.add('flip');
      const flippedCards = document.querySelectorAll('.flip');

      if (flippedCards.length == 2) {
        container.style.pointerEvents = 'none';
        setInterval(() => {
          container.style.pointerEvents = 'all';
        }, 1000);

        match(flippedCards[0], flippedCards[1]);
      }
    });
  }
}

function match(cardOne, cardTwo) {
  if (cardOne.dataset.index == cardTwo.dataset.index) {
    score.innerHTML = parseInt(score.innerHTML) + 1;
    cardOne.classList.remove('flip');
    cardTwo.classList.remove('flip');
    cardOne.classList.add('match');
    cardTwo.classList.add('match');

    if (document.querySelectorAll('.match').length == cards.length) {
      clearInterval(timerInterval);
      if (parseInt(score.innerHTML) == 6) {
        window.alert('Congratulations, you win! \uD83D\uDD25');
      }
      reset();
    }
  } else {
    setTimeout(() => {
      cardOne.classList.remove('flip');
      cardTwo.classList.remove('flip');
    }, 1000);
  }
}

function resetGame() {
  timeLeft = 25;
  timer.innerHTML = timeLeft;
  score.innerHTML = '0';
  cards.forEach(card => {
    card.classList.remove('match', 'flip');
  });
}

// function startTimer() {
//   timerInterval = setInterval(() => {
//     if (timeLeft > 0 && !isPaused) {
//       timeLeft--;
//       timer.innerHTML = timeLeft;
//     } else {
//       clearInterval(timerInterval);
//       if (parseInt(score.innerHTML) == 6) {
//         window.alert('Congratulations, you win!');
//       } else {
//         window.alert('Game over!');
//       }
//       reset();
//     }
//   }, 1000);
// }
function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0 && !isPaused) {
      timeLeft--;
      timer.innerHTML = timeLeft;
    } else {
      clearInterval(timerInterval);
      if (parseInt(score.innerHTML) == 6) {
        window.alert('Congratulations, you win!');
      } else {
        window.alert('Game over!');
      }
      reset();
    }

    // Stop the timer when the score reaches 6
    if (parseInt(score.innerHTML) == 6) {
      clearInterval(timerInterval);
      console.log('Score reached 6, timer stopped.');
    }
  }, 1000);
}

function pauseGame() {
  isPaused = true;
  clearInterval(timerInterval);
}

function resumeGame() {
  isPaused = false;
  startTimer();
}

document.querySelector('#pause-btn').addEventListener('click', function() {
  if (isPaused) {
    resumeGame();
  } else {
    pauseGame();
  }
});

document.querySelector('#reset-btn').addEventListener('click', reset);

function reset() {
  timeLeft = 30;
  timer.innerHTML = timeLeft;
  score.innerHTML = '0';
  cards.forEach(card => {
    card.classList.remove('match', 'flip');
  });

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  shuffleImages();
  clicking();
  startTimer();
}
document.querySelector('#play-again-btn').addEventListener('click', function() {
  location.reload();
});