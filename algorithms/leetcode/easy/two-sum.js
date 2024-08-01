function twoSum(nums, target) {
    var results = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums.length === 2 && ((nums[0] + nums[1]) === target)) {
            results.push(0, 1);
            return results;
        }
        else {
            for (var j = 0; j < nums.length; j++) {
                if ((nums[i] !== nums[j]) && nums[i] + nums[j] === target) {
                    results.push(i, j);
                    return results;
                }
            }
        }
    }
    return [0, 1];
}
// console.log(twoSum([3, 2, 4], 5));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([1, 2, 3], 5));
console.log(twoSum([3, 2, 3], 5));
