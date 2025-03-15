function partOneA () {
    let answer, guess, guessNumber;
    answer = 7;
    guess = prompt("Guess a number between 1 and 10.");
    guessNumber = Number(guess);
  
    // 1. check if the number is equal to the answer
    if (guessNumber === answer) {
      // 2. if it is, set the message for correct.
      messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
    } else {
      // 3. if not, set the message for wrong guess.
      messageParagraph.innerHTML = `You did not guess the number. Try again.`;
    }
  }