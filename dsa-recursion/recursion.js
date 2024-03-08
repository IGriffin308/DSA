/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, currentLongest = 0) {
  if (idx === words.length) return currentLongest;
  currentLongest = Math.max(words[idx].length, currentLongest);
  return longest(words, idx + 1, currentLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, outStr = "") {
  if (idx >= str.length) return outStr;
  outStr += str[idx];
  return everyOther(str, idx + 2, outStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx
  let rightIdx = str.length - 1 - idx
  if (str[leftIdx] !== str[rightIdx]) {
    return false;
  }
  if (leftIdx >= rightIdx) {
    return true;
  }
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, outStr = "") {
  if (outStr.length === str.length) return outStr;
  outStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, outStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let outArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") outArr.push(obj[key])
    if (typeof obj[key] === "object") outArr.push(...gatherStrings(obj[key]))
  }
  return outArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);
  if (left > right) return -1;
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
