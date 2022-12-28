console.log("this is console");
const myMap = new Map();
// const key1 ="myStr"
const key1 = 'myStr', key2 = {}, key3 = function () { };
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is a empty function');
console.log(myMap);
let value1 = myMap.get(key2);
console.log(value1);
console.log(myMap.size)
for (let [key, value] of myMap) {
    console.log(key);
} 