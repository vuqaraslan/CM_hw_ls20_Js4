/*
Array methodlarini custom functionla yazin.

Filter
every
some
reduce
find
includes
sorting
*/


/*
//Custom filter method
function Filter(arr,checkFunc){
    let arr2=[];
    for (let i=0;i<arr.length;i++){
        if(checkFunc(arr[i])){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
let arr=[11,23,4,13,54,2,-12,13,0,-21,-53,6];
function checkFunc(number){
    return number>0;
}
console.log(Filter(arr,checkFunc));
 */


/*
//Custom every method
// function Every(arr,checkFunc){
//     let isTrue=true;
//     for(let i=0;i<arr.length;i++){
//         if(!checkFunc(arr[i])){
//             isTrue=false;
//             break;
//         }
//     }
//     return isTrue;
// }
// let arr=[11,23,4,13,54,2,-12,13,0,-21,-53,6];
// function checkFunc(number){
//     return number>0;
// }
// console.log(Every(arr,checkFunc));
 */


/*
//Custom some method
function Some(arr,checkFunc){
    let isTrue=false;
    for (let i=0;i<arr.length;i++){
        if(checkFunc(arr[i])){
            isTrue=true;
            break;
        }
    }
    return isTrue;
}
let arr=[-11,-23,-4,-13,-54,6];
function checkFunc(number){
    return number>0;
}
console.log(Some(arr,checkFunc));
 */


/*
//Custom reduce method
function Reduce(arr, checkFunc) {
  let totalNum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalNum = checkFunc(totalNum, arr[i]);
  }
  return totalNum;
}
let arr = [10, 20, 30];
function checkFunc(total, number) {
  return total + number;
}
console.log(Reduce(arr, checkFunc));
 */


/*
//Custom find method
function Find(arr,checkFunc){
    let findedNum=undefined;
    for(let i=0;i<arr.length;i++){
        if(checkFunc(arr[i])){
            findedNum=arr[i];
            break;
        }
    }
    return findedNum;
}
let arr=[-12,-26,11,-43,-53,-5,-62,];
function checkFunc(number){
    return number>0;
}
console.log(Find(arr,checkFunc));
 */


/*
//Custom includes method
function Includes(fruitsArr,checkFunc,element){
    let hasIn=false;
    for(let i=0;i<fruitsArr.length;i++){
        if(checkFunc(fruitsArr[i],element)){
            hasIn=true;
        }
    }
    return hasIn;
}
const fruits = ["Banana", "Orange", "Apple", "Mango"]
function checkFunc(fruit,element){
    return fruit===element;
}
console.log(Includes(fruits,checkFunc,"Apple"));
 */


/*
//Custom sorting method
function Sorting(arr,checkFunc){
    return checkFunc(arr);
}
function checkFunc(arrNumbers){
    for(let i=0;i<arrNumbers.length;i++){
        for(let k=0;k<arrNumbers.length-1;k++){
            if(arr[k]>arrNumbers[k+1]){
                let temp=arrNumbers[k];
                arrNumbers[k]=arrNumbers[k+1];
                arrNumbers[k+1]=temp;
            }
        }
    }
    return arrNumbers;
}
let arr=[99,1,66,4,2,3,5,7,6];
console.log(Sorting(arr,checkFunc));
 */



