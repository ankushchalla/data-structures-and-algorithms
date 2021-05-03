
// helper function that merges ALREADY SORTED arrays. 
function merge(arr1, arr2) {
    let finalArray = [];
    let arr1Pointer = 0;
    let arr2Pointer = 0;
    while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
        if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
            finalArray.push(arr1[arr1Pointer]);
            arr1Pointer++;
        }
        else {
            finalArray.push(arr2[arr2Pointer]);
            arr2Pointer++;
        }
    }

    while (arr1Pointer < arr1.length) {
        finalArray.push(arr1[arr1Pointer])
        arr1Pointer++;
    }
    
    while (arr2Pointer < arr2.length) {
        finalArray.push(arr2[arr2Pointer])
        arr2Pointer++;
    }

    return finalArray;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    else {
        let midPoint = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, midPoint));
        let right = mergeSort(arr.slice(midPoint));
        return merge(left, right);
    }
}

let randomArray = [];
for (let i = 0; i < 50; i++) {
    let randNum = Math.floor(Math.random() * 30);
    let randSign = Math.random() < .5 ? -1 : 1
    randomArray.push(randNum * randSign);
}

let backwardsArray = [4,3,2,1];

console.log("random array, unsorted:", randomArray);
console.log("random array, sorted:", mergeSort(randomArray));

console.log("backward array, unsorted:", backwardsArray);
console.log("backward array, sorted:", mergeSort(backwardsArray));