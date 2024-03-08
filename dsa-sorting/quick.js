/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr){
    let pivot = arr[0];
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[0], arr[i]] = [arr[i], arr[0]]
    return i;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    if(arr.length <= 1) return arr;
    let pivotIndex = pivot(arr);
    let left = quickSort(arr.slice(0, pivotIndex));
    let right = quickSort(arr.slice(pivotIndex + 1));
    return [...left, arr[pivotIndex], ...right];
}

module.exports = { quickSort , pivot };