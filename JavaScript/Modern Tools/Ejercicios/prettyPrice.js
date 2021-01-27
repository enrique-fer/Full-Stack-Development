function prettyPrice(price, decimal) {
    if (Number.isInteger(decimal)) {
        decimal *= 0.01;
    }

    return Math.floor(price) + decimal;
}

console.log(prettyPrice(5.2, 87));
console.log(prettyPrice(5.2, 0.87));