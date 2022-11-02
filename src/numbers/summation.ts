/**
 * @order O(1)
 * @param n number
 * @returns the summation from 1 to n
 */
const summation = (n: number): number => {
    if (n === -Infinity)
        return -Infinity;
    if (n <= 0)
        return 0;
    if (n === 1)
        return 1;
    if (Number.isInteger(n))
        return n * (n + 1) / 2;
    return n;
};
export default summation;