function askANumber() {
  let givenNumber = parseInt(
    prompt("I'd like a number between 1 & 50 first kid")
  ); // demande un nombre à l'utilisatrice
  while (givenNumber > 50 || givenNumber < 1) {
    givenNumber = parseInt(prompt("Don't you know what is a range ?"));
  }
  return givenNumber;
}

function didIWin() {
  const numberToGuess = askANumber(); // initialisation du nombre à deviner
  let turn = 0; // compteur de tentatives
  let hasWon = false; // variable pour suivre si le joueur a gagné

  while (turn < 3) {
    let number = parseInt(prompt("What's your number, second kid?")); // demande un nombre au joueur

    if (number === numberToGuess) {
      hasWon = true; // le joueur a gagné
      break; // sortir de la boucle si gagné
    } else if (number > numberToGuess) {
      alert("It's too big, second kid. Try Again!");
    } else {
      alert("It's too small, second kid. Try Again!");
    }
    turn++; // incrémentation du nombre de tentatives
  }

  // Vérification après la boucle
  if (hasWon) {
    alert("You win! Good job :)");
  } else {
    alert(`Too bad! You lose! The number was ${numberToGuess}`);
  }
}

didIWin();

didIWin(); // appel de la fonction
