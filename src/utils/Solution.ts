function Solution(str) {
    let maxMap = new Map();
    let max = 0;
    let i = 0;
    for (let k = 0; k < str.length; k++) {
        let index = maxMap.get(str[k]);
        if (!index) {
            maxMap.set(str[k], k)
        } else {
            maxMap.set(str[k], k);
            // index = index > i ? index : i;
            if (k - index - 1 > max) {
                max = k - index - 1 ;
                // max = index;
                
            }
        }
    }
    return max;
}

console.log(Solution("abcdabcedbb"))