// 27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }

// https://leetcode.com/problems/remove-element/

var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
           i = i - 1;
        }
      }
};

removeElement([3, 2, 2, 3], 3)


    //   console.log(nums)
    // nums.filter(num => num !== val)
    // console.log(nums)
    // const reNum = [...keepToNums]
    // if (keepToNums.length < nums.length) {
    //     for (let i = 0; i < nums.length - keepToNums.length; i++) {
    //         reNum.push("_")
    //     }
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     const element = nums[i];
    //     if (element[i] == val) {
    //         nums[i] = "_";
    //     }
    // }
    // console.log("Nums:",nums);