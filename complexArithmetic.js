const complexSum = (complexNum1, complexNum2) => {
    return {
        real: complexNum1.real + complexNum2.real,
        imag: complexNum1.imag + complexNum2.imag
    }
}

const complexMult = (complexNum1, complexNum2) => {
    return {
        real: complexNum1.real * complexNum2.real - complexNum1.imag * complexNum2.imag,
        imag: complexNum1.real * complexNum2.imag + complexNum1.imag * complexNum2.real
    }
}

const complexSub = (complexNum1, complexNum2) => {
    return {
        real: complexNum1.real - complexNum2.real,
        imag: complexNum1.imag - complexNum2.imag
    }
}

const complexDiv = (complexNum1, complexNum2) => {
    return {
        real: ((complexNum1.real * complexNum2.real) + (complexNum1.imag * complexNum2.imag)) / ((complexNum2.real ** 2) + (complexNum2.imag ** 2)),
        imag: ((complexNum2.real * complexNum1.imag) - (complexNum1.real * complexNum2.imag)) / ((complexNum2.real ** 2) + (complexNum2.imag ** 2))
    }
}

function main() {
    const complexNum1 = {
        real: 3,
        imag: -1
    }
    const complexNum2 = {
        real: 1,
        imag: 4
    }

    console.log("Complex Sum: ");
    console.log(complexSum(complexNum1, complexNum2));
    console.log("Complex Multiplication: ");
    console.log(complexMult(complexNum1, complexNum2));
}

main();