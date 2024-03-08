function sortedFrequency(arr, val) {
  let firstIdx = findFirst(arr, val);
  let lastIdx = findLast(arr, val);
  if (firstIdx == -1) {
    return firstIdx;
  };
  return lastIdx - firstIdx + 1;
};

function findFirst(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);
  if (left <= right) {
    if (arr[mid] === val && (mid === 0 || val > arr[mid - 1])) {
      return mid;
    };
    if (arr[mid] < val) {
      return findFirst(arr, val, mid + 1, right);
    };
    return findFirst(arr, val, left, mid - 1);
  };
  return -1;
};

function findLast(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);
  if (left <= right) {
    if (arr[mid] === val && (mid === arr.length - 1 || val < arr[mid + 1])) {
      return mid;
    };
    if (arr[mid] > val) {
      return findLast(arr, val, left, mid - 1);
    };
    return findLast(arr, val, mid + 1, right);
  };
  return -1;
};

module.exports = sortedFrequency