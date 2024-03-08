function findRotationCount(arr, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right)/2);
  if (right < left) {
    return 0;
  };
  if (left === right) {
    return left;
  };

  if (arr[mid + 1] < arr[mid] && mid < right) {
    return mid + 1;
  };
  if (arr[mid] < arr[mid - 1] && left < mid) {
    return mid;
  };

  if (arr[mid] < arr[right]) {
    return findRotationCount(arr, left, mid - 1);
  };

  return findRotationCount(arr, mid + 1, right);
}

module.exports = findRotationCount