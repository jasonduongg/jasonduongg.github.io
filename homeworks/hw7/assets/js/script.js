function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    console.log(avg)
    return avg
}

function createSentence(num, noun) {
    let sentence = `On average, a Berkeley student has ${num} ${noun}s.`;
    console.log(sentence)
    return sentence;
}

function getRandomNum(max) {
    let randomfrac = Math.random()
    let frac = randomfrac * max
    console.log(Math.floor(frac))
    return Math.floor(frac)
}