function isAlpha(letter){
    return 'a' <= letter && letter <= 'z';
}

const palindromes = function (string) {
    string = string.toLowerCase();
    let left = 0;
    let right = string.length - 1;
    while (left <= right){
        while (!isAlpha(string[left])){
            left++;
        }        
        while (!isAlpha(string[right])){
            right--;
        }

        if (string[left] != string[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
