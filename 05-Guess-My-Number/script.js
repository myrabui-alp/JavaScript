`use strict`;
/*
console.log(document.querySelector('.message').textContent); //.message get from index.html
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').textContent = 23;
*/
let secrectNumber = Math.trunc(Math.random()*20)+1; // generate a random number, between 0 and 20.

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = 'No number!'
        displayMessage('No number!');
    }
    else if (guess === secrectNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');

        document.querySelector('.number').textContent = secrectNumber;
        // CSS
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if (score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
        
    else if (guess != secrectNumber) {
        if (score > 1)
        {
            // document.querySelector('.message').textContent = guess > secrectNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secrectNumber ? 'Too high!' : 'Too low!');
        score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            // document.querySelector('.message').textContent = 'You lost the game';
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess > secrectNumber) {
    //     if (score > 1)
    //     {
    //         document.querySelector('.message').textContent = 'Too high!';
    //     score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else
    //     {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }
    // else if (guess < secrectNumber) {
    //     if (score > 1)
    //     {
    //         document.querySelector('.message').textContent = 'Too low!';
    //     score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else
    //     {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }    
});
// Play again without reload the page
document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    secrectNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing..!';
    displayMessage('Start guessing..!');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '30rem';
})

