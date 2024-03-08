function countZeroes(arr) {
  if (findFirst(arr) === -1) {
    return 0;
  };
  return arr.length - findFirst(arr);
};

function findFirst(arr, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);
  if (left <= right) {
    if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] ===1)) {
      return mid;
    };
    if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, right);
    };
    return findFirst(arr, left, mid - 1);
  };
  return -1;
};

module.exports = countZeroes