
// swaps elements at index i and index j in array arr. 
function swap(i, j, arr) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}


function bubbles(arr) {
    if (arr.length === 0) return;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) swap(i, i + 1, arr);
        }
        end--;
    }
}

let randomArray = [];
for (let i = 0; i < 50; i++) {
    let randNum = Math.floor(Math.random() * 30);
    let randSign = Math.random() < .5 ? -1 : 1
    randomArray.push(randNum * randSign);
}

console.log("random array, unsorted:", randomArray);
bubbles(randomArray);
console.log("random array, sorted:", randomArray);