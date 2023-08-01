function power(base: number, exp: number): number {
    if(exp <= 0) {
        return 1;
    }

    return base * power(base, exp - 1);
}

function factorial(n: number): number {
    if(n <= 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

function itPower(base: number, exp: number): number {
    let acc = 1;
    for (let i = 0; i < exp; i++) {
        acc = acc * base;
    }
    return acc;
}

function itFactorial(n: number): number {
    let acc = 1;
    for (let i = n; i > 0; i--) {
        acc = acc * i;
    }
    return acc;
}