for (let i = nums.length; i >= 0; i--) {
    nums.sort(function (a, b) {
        return a - b;
    });
    if (nums.length !== nums[nums.length - 1]) return nums.length
    if (nums[i] && nums[i] - 1 !== nums[i - 1]) return nums[i] - 1
}

// var missingNumber = function (nums) {


//     let nArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let array = nums.sort(function (a, b) {
//         return a - b;
//     });

//     const len = array.length
//     const lastValue = array[array.length - 1]
//     const indexOfLastValue = nArr.indexOf(lastValue)
//     // console.log("Len", len);
//     // console.log("lastValue", lastValue);
//     // console.log("Index of nArr", indexOfLastValue);

//     for (let i = 0; i < indexOfLastValue; i++) {
//         const element = nArr[i];
//         const element2 = array[i];
//         // console.log(element);
//         // console.log(element2);
//         if (element !== element2) {
//             return element
//         }

//     }

//     // for (let i = nArr.length - 1; i > 0; i--) {
//     //     const element1 = array[i];
//     //     const element2 = nArr[i];
//     //     if (element1 !== element2) {
//     //         // return element1
//     //         console.log("Index:", i, " => value:", element1);
//     //         console.log("Index:--", i, " => value:--", element2);
//     //     }
//     // }

//     // for (let i = nArr.length; i > 0; i--) {
//     //     const element1 = nArr[i]
//     //     const element2 = array[i];

//     //     if (element1 !== element2) {
//     //         return element1
//     //     }

//     // }

//     // if ((unSortedArray[0] == 0 && unSortedArray[1] == 1) || (unSortedArray[0] == 1 && unSortedArray[1] == 0)) {
//     //     return 2
//     // }
//     // else if (unSortedArray[0] == 0) {
//     //     return 1
//     // }


// };

// // missingNumber([0, 1, 6, 3, 5])
// console.log(missingNumber([0,1]));