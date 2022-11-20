function isAlpha(letter){
    return 'a' <= letter && letter <= 'z' || 'A' <= letter && letter <= 'Z';
}

const caesar = function(string, shift) {
    const coded = string.split("")
                        .map((char) => {
                            if (!isAlpha(char)) return char;
                            let base = (char.charCodeAt(0) >= 'a'.charCodeAt(0)) ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)
                            let pos = char.charCodeAt(0) - base;
                            let newPos = pos + shift;
                            while (newPos < 0) newPos += 26;
                            newPos = newPos % 26;
                            return String.fromCharCode(base + newPos);
                        })
                        .join("");
    return coded;
};

// Do not edit below this line
module.exports = caesar;
