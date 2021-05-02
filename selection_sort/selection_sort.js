
// swaps elements at index i and index j in array arr. 
function swap(i, j, arr) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function selectionSort(arr) {
    if (arr.length === 0 || arr == null) return;
    let start = 0;
    let end = arr.length;
    let min;
    let minIndex = 0;
    while (start < end) {
        min = Infinity;
        for (let i = start; i < end; i++) {
            if (arr[i] < min) {
                min = arr[i];
                minIndex = i;
            }
        }
        swap(start, minIndex, arr);
        start++;
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
selectionSort(randomArray);
console.log("random array, sorted:", randomArray);

console.log("backward array, unsorted:", backwardsArray);
selectionSort(backwardsArray);
console.log("backward array, sorted:", backwardsArray);