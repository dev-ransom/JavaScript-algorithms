/* three ways of solving sum of all numbers between two elements of arrays"*/
/*function sumAll(arr){
    let first = arr[0];
    let last = arr[1];
    let sum = 0;
    if(first > last){
        first = arr[1];
        last = arr[0];
    }
    // loop running through
    for (let i = first; i <= last; i++){
        sum += i;
    }
    return sum;
}
let result = sumAll([1,4]); */

// function sumAll(arr){
//     let max = Math.max(arr[0], arr[1]);
//     let min = Math.min(arr[0], arr[1]);
//     let sumBetween = 0;
//     for (let i = min; i <= max; i++){
//         sumBetween += i;
//     }
//     return sumBetween;
// }

// let result = sumAll([1,4]);
// console.log(result);
function sumAll(arr){
    let sum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
    return sum;
}

let result = sumAll([1,4]);
console.log(result);