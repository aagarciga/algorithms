/**
 * O(n^2)
 * @param array1 
 * @param array2 
 * @returns 
 */
const sameQuadratic = (array1: number[], array2: number[]) => {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0, length = array1.length; i < length; i++) {
        const value: number = array1[i] ** 2;
        let index = array2.indexOf(value);
        if (index === -1) {
            return false;
        }
        array2.splice(index, 1);
    }


    return true;
}

/**
 * O(n)
 * 0=x^2-y corelation of collections
 * @param array1 
 * @param array2 
 * @returns 
 */
const same = (array1: number[], array2: number[]) => {
    if (array1.length !== array2.length) {
        return false;
    }
    let counter1: { [key: number]: number } = {};
    let counter2: { [key: number]: number } = {};
    for (let value of array1) {
        counter1[value] = (counter1[value] || 0) + 1;
    }
    for (let value of array2) {
        counter2[value] = (counter2[value] || 0) + 1;
    }

    for (let key in counter1) {
        const keyValue = parseInt(key, 10);
        const squareKeyValue = keyValue ** 2;
        if (!(squareKeyValue in counter2)) {
            return false;
        }
        if (counter2[squareKeyValue] !== counter1[keyValue]) {
            return false;
        }
    }
    return true;
}