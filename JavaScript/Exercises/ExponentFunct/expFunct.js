// toThePowerOf(2, 3) => 8
//Use reduce

function toThePowerOf(num, exp) {
    const arr = new Array(exp).fill(num);
    const reducer = (total, num) => total * num;
    
    return arr.reduce(reducer);
}

console.log(toThePowerOf(2, 3));