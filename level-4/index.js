/** Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size){
    let bigArr = [];
    let smallArr = [];
    let subctr = 0;
    for (let i = 0; i < arr.length; i++){
        if(subctr === size){
            subctr = 0;
            bigArr.push(smallArr);
            smallArr = [];
        }
        smallArr.push(arr[i]);
        subctr++;
    }
    bigArr.push(smallArr);
    return bigArr;
}

let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
console.log(result);