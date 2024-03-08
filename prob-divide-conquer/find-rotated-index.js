function findRotatedIndex(arr, val) {
  let pivot = findPivot(arr)
	if (pivot > 0 && val >= arr[0] && val <= arr[pivot - 1]) {
		return binarySearch(arr, val, 0, pivot - 1);
	} else {
		return binarySearch(arr, val, pivot, arr.length - 1);
	};
};

function binarySearch(arr, val, left, right) {
	if (val < arr[left] || val > arr[right] || arr.length === 0) {
		return -1;
	};
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === val) {
			return mid;
		};
		if (arr[mid] > val) {
			right = mid - 1;
		};
		if (arr[mid] < val) {
			left = mid + 1;
		};
	};
	return -1;
};

function findPivot(arr, left = 0, right = arr.length - 1) {
	if (right === 0 || arr[right] > arr[0]) {
		return 0;
	};
	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		if (arr[mid] > arr[mid + 1]) {
			return mid + 1;
		} else if (arr[mid] >= arr[left]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		};
	};
};

module.exports = findRotatedIndex