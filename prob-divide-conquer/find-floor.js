function findFloor(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor ((left + right) / 2)
  if (left > right) {
    return -1;
  };
  if (val >= arr[right]) {
    return arr[right];
  };
  if (arr[mid] === val) {
    return arr[mid];
  };
  if (mid > 0 && arr[mid - 1] <= val && val < arr[mid]) {
    return arr[mid - 1];
  };
  if (val < arr[mid]) {
    return findFloor(arr, val, left, mid - 1);
  };
  return  findFloor(arr, val, mid + 1, right);
}

module.exports = findFloor