// Create Class Phrase 
class Phrase {
    constructor(phrase) {
          this.phrase = phrase;
    }


     // Adds letter placeholders for the phrase to the gameboard
  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase').firstElementChild;

    // Reset phrase spaces
    ul.innerHTML = "";

    // Create array from each character in the phrase
    const characters = this.phrase.split('');
    
    // Loop through phrase array
    characters.forEach(character => {
        let element = document.createElement('li');
        
        if(character === ' ') {
            element.classList.add('space');
        }
        else {
            element.classList.add('letter', character);
            element.textContent = character;
        }
        ul.appendChild(element);			
    });
}



checkLetter(letter) {
    return this.phrase.includes(letter);
}



showMatchedLetter(letter) {
    // Find all elements with class of letter
    let matchedLetters = document.querySelectorAll('.' + letter);

    // Add class of 'show' to those elements
    matchedLetters.forEach( match => match.classList.add('show') );
}
}