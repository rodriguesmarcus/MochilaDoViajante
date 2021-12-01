let fizzBuzz = (a, b) => {
    for (i = 0; i < 101; i++) {
        if (i % a === 0 && i % b === 0) {
            console.log(i, ' fizzbuzz');
        } else if (i % a === 0) {
            console.log(i, 'fizz');
        } else if (i % b === 0) {
            console.log(i, 'buzz')
        }
    }
}

fizzBuzz(2, 13);