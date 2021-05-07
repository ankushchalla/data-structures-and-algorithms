
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// [4,8,2,1,5,7,6,3] swapIndex = 0 i = 1
// [4,2,8,1,5,7,6,3] swapIndex = 1 i = 2
// [4,2,1,8,5,7,6,3] swapIndex = 2 i = 3
// [4,2,1,8,5,7,6,3] swapIndex = 2 i = 4
// [4,2,1,8,5,7,6,3] swapIndex = 2 i = 5
// [4,2,1,8,5,7,6,3] swapIndex = 2 i = 6
// [4,2,1,3,5,7,6,8] swapIndex = 3 i = 7
// [3,2,1,4,5,7,6,8] 
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, 0, swapIndex);
    return swapIndex;
}

// Everything happens in place. 
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    // Each quickSort call depends on the returns of the recursive quickSort calls. 
    return arr;
}

let arr = [4, 8, 2, 1, 5, 7, 6, 3]
console.log(pivot(arr));
console.log(arr);
