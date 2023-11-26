function calculateTotal(number) {
    let sum = 0;
    let i = 1;

    while (i <= number) {
        sum += i;
        i++;
    }

    return sum;

}

console.log(calculateTotal(24))

