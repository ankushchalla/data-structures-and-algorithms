
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while(j >=0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = current;
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
insertionSort(randomArray);
console.log("random array, sorted:", randomArray);

console.log("backward array, unsorted:", backwardsArray);
insertionSort(backwardsArray);
console.log("backward array, sorted:", backwardsArray);