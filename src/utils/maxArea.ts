var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        let count = (right - left) * Math.min(height[left], height[right]);
        if (count > max) {
            max = count
        }
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }

    }
    return max;
};