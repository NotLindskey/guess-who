console.log('Here are all the available people:', people);


$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  populatePicture();
  randomNumber();
};

function populatePicture (){
    console.log('Working!');

   for (let person of people) {
    $('.pictures').append(`<div><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}"></div>`);
}
}

function randomNumber(){
    //let min =0;
    //let max = -1;

    //let selectedRandom = prompt(randomPerson);
    //let randomName = 55;
    for (let randomName of people){

      randomName = $('.selectedName').append(`<p>${randomName.name}</p>`);
      return Math.floor(Math.random() * people.length);      

    }
}
console.log(randomNumber());

//let randomName = alert('Guess the person:');



// function runGame() {
//     let guess = '';
//     let correct = false;
//     let numTries = 0;
//     const targetIndex = Math.floor(Math.random()*COLORS_ARRAY.length);
//     const target =COLORS_ARRAY[targetIndex];
//     console.log(target);

//     do {
//     guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(', ') +
// '\n\nWhat color am I thinking of?\n')
//     numTries += 1;
//     if (guess === null) {
//     alert('This game has been aborted');
//     return
//     correct = checkGuess(guess, target);

//     }

    
//     correct = checkGuess (guess, target, numTries)
// } while (!correct)
//     alert('Congratulations! '+ target + '\n\n It took you ' + numTries + ' tries to guess correctly.');
//     document.body.style.background = guess;
// }