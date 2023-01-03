// function sum(a,b,c){
//     console.log(a+b+c);
// }
// sum(1,2,3);
// var arrVal=[1,2,3];
// sum.apply(null,arrVal);

function sum(a,b,c){
    console.log(a+b+c);
}

var arrVal=[5,6,7];
sum(...arrVal);
