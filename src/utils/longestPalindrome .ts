
/**
 * 回文数列
 * @param {string} str
 * @return {number} 
 */

var longestPalindrome = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        getPalindrome(i, i);
        getPalindrome(i, i + 1)
    }
    function getPalindrome(current, next) {
        while(current >= 0 && next < str.length && str[current] === str[next]) {
            current--;
            next++;
        }
        if (next - current - 1 >= res.length) {
            // maxLen = next - current - 1;
            res = str.slice(current + 1, next)
        }
    }
    return res;
}

console.log(longestPalindrome('babad'))