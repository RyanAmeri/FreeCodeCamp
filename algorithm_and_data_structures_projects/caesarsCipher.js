function rot13(str) {
    const regExp = /[A-Z]/g;
    return [...str].map((letter) => 
        letter.match(regExp) ?
            letter.charCodeAt() < 78 ? 
                String.fromCharCode(letter.charCodeAt() + 13):
                String.fromCharCode(letter.charCodeAt() - 13):
            letter)
            .join("")

  }


  console.log(rot13("SERR PBQR PNZC"));