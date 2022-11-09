const sumAll = function(low, high) {
    if ((typeof low != 'number') || (typeof high != 'number') || low < 0 || high < 0){
        return 'ERROR';
    }

    if (low > high){
        let temp = low;
        low = high;
        high = temp;
    }

    let sum = 0;
    for (let i = low; i <= high; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
