//object.keys
//bitwise operators

// & - | - ^ - << - >> - >>>

const weightedLottery = weights => {
    // keep track of your  weights
    // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
    let containerArray = [];

    Object.keys(weights).forEach(key =>(
        for (let i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    ))

    return containerArray[Math.random() * containerArray.length];
}

const weights = {
    green: 1,
    yellow: 2,
    red: 3
}

weightedLottery(weights);