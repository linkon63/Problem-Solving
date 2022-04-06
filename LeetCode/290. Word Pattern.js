// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// https://leetcode.com/problems/word-pattern/


var wordPattern = function (pattern, s) {
    let obj = {};
    let obj2 = {};
    let sArr = s.split(' ');
    if (sArr.length !== pattern.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (obj[pattern[i]]) {
            if (obj[pattern[i]] !== sArr[i]) return false;
        } else {
            obj[pattern[i]] = sArr[i];
        }
        if (obj2[sArr[i]]) {
            if (obj2[sArr[i]] !== pattern[i]) return false;
        } else {
            obj2[sArr[i]] = pattern[i];
        }
    }
    return true;
};

let pattern = "aaaa", s = "dog cat dog cat "
console.log(wordPattern(pattern, s))