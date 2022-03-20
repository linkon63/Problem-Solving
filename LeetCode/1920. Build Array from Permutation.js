var buildArray = function (nums) {
    const array = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        array.push(nums[element])

    }
    return array
};

buildArray([0, 2, 1, 3, 5, 4]);