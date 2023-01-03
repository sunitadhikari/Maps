// function sum(a,b,c){
//     console.log(a+b+c);
// }
// sum(1,2,3);
// var arrVal=[1,2,3];
// sum.apply(null,arrVal);

// function sum(a,b,c){
//     console.log(a+b+c);
// }
// var arrVal=[5,6,7];
// sum(...arrVal);
let arr1=[1,2,3];
let arr2=[5,6,3];
let arr3=[8,4,5]
// arr1=arr1.concat(arr2);
arr1=[...arr1,...arr2,...arr3];
console.log(arr1);