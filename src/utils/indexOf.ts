
function indexOf(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    // for(let i = 0; i < )
    while(left <= right) {
        const middle = Math.floor((left + right)/2);
        if (arr[middle] === target) {
            return middle + 1;
        }
        if (arr[middle] > target) {
            right--;
        } else {
            left++;
        }
    }
    return -1;
}


console.log(indexOf([1,3,5,6,7,8], 7))