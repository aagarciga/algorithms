const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) {
        return false;
    }
    const counter1: { [key: string]: number } = {};
    const counter2: { [key: string]: number } = {};

    for (const value of s) {
        counter1[value] = (counter1[value] || 0) + 1;
    }
    for (const value of t) {
        counter2[value] = (counter2[value] || 0) + 1;
    }

    for (const key in counter1) {
        if (!(key in counter2)) {
            return false;
        }
        if (counter2[key] !== counter1[key]) {
            return false;
        }
    }
    return true;
};

export default isAnagram;