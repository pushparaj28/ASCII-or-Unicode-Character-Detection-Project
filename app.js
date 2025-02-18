function detectCharacter() {
    const characterInput = document.getElementById("characterInput");
    const result = document.getElementById("result");
    const character = characterInput.value; // Fixed `.Value` to `.value`

    if (character.length === 0) {
        result.innerText = 'Please enter a character!';
        return;
    }

    if (isASCII(character)) {
        result.innerText = 'The entered character is an ASCII character.';
        
    } else {
        result.innerText = 'The entered character is a UNICODE character.';
    }
}

function isASCII(character) {
    return character.charCodeAt(0) <= 127;
}
