/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
        if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let prevOfPrev = nums[0]; // dp[i-2]
    let prev = Math.max(nums[0], nums[1]); // dp[i-1]
    let max = nums[0];
    for(let i=2;i<nums.length;i++){
        max = Math.max(nums[i] + prevOfPrev, prev);
        prevOfPrev = prev;
        prev = max;
    }
    return max;

};