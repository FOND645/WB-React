type num = {
    val: string,
    radix: number,
};

class Calculator {
    static add(A: num, B: num, resultRadix = 10) {
        const convertedA: number = A.radix === 10 ? +A.val : parseInt(A.val as string, A.radix);
        const convertedB: number = B.radix === 10 ? +B.val : parseInt(B.val as string, B.radix);
        return (convertedA + convertedB).toString(resultRadix);
    }

    static subtract(A: num, B: num, resultRadix = 10) {
        const convertedA: number = A.radix === 10 ? +A.val : parseInt(A.val as string, A.radix);
        const convertedB: number = B.radix === 10 ? +B.val : parseInt(B.val as string, B.radix);
        return (convertedA - convertedB).toString(resultRadix);
    }

    static multiply(A: num, B: num, resultRadix = 10) {
        const convertedA: number = A.radix === 10 ? +A.val : parseInt(A.val as string, A.radix);
        const convertedB: number = B.radix === 10 ? +B.val : parseInt(B.val as string, B.radix);
        return (convertedA * convertedB).toString(resultRadix);
    }

    static divide(A: num, B: num, resultRadix = 10) {
        const convertedA: number = A.radix === 10 ? +A.val : parseInt(A.val as string, A.radix);
        const convertedB: number = B.radix === 10 ? +B.val : parseInt(B.val as string, B.radix);
        return (convertedA / convertedB).toString(resultRadix);
    }
}

Object.freeze(Calculator);

console.log(Calculator.add({ val: '2A', radix: 16 }, { val: '1101000', radix: 2 })); // 146
console.log(Calculator.add({ val: '2A', radix: 16 }, { val: '1101000', radix: 2 }, 2)); // 10010010
console.log(Calculator.add({ val: '2A', radix: 16 }, { val: '1101000', radix: 2 }, 8)); // 222
console.log(Calculator.add({ val: '2A', radix: 16 }, { val: '1101000', radix: 2 }, 16)); // 92

console.log(Calculator.subtract({ val: '146', radix: 8 }, { val: '62', radix: 16 })); // 4
console.log(Calculator.subtract({ val: '146', radix: 8 }, { val: '62', radix: 16 }, 2)); // 100
console.log(Calculator.subtract({ val: '146', radix: 8 }, { val: '62', radix: 16 }, 8)); // 4
console.log(Calculator.subtract({ val: '146', radix: 8 }, { val: '62', radix: 16 }, 16)); // 4

console.log(Calculator.multiply({ val: '146', radix: 10 }, { val: '62', radix: 8 })); // 7300
console.log(Calculator.multiply({ val: '146', radix: 10 }, { val: '62', radix: 8 }, 2)); // 1110010000100
console.log(Calculator.multiply({ val: '146', radix: 10 }, { val: '62', radix: 8 }, 8)); // 16204
console.log(Calculator.multiply({ val: '146', radix: 10 }, { val: '62', radix: 8 }, 16)); // 1с84

console.log(Calculator.divide({ val: '10000000000', radix: 2 }, { val: '10', radix: 2 })); // 512
console.log(Calculator.divide({ val: '10000000000', radix: 2 }, { val: '10', radix: 2 }, 2)); // 1000000000
console.log(Calculator.divide({ val: '10000000000', radix: 2 }, { val: '10', radix: 2 }, 8)); // 1000
console.log(Calculator.divide({ val: '10000000000', radix: 2 }, { val: '10', radix: 2 }, 16)); // 200
