//copying primitive datat types

let x = "hello";
let y = x;
y = "bye";
// here y is a different copy of x, so on changing y, x remains unchanged

//copying composite data types - objects & arrays
// These values are actually stored just once when instantiated, and assigning a variable just creates a pointer (reference) to that value.
let a = { en: "bye", hbr: "lehitraot" };
let b = a;
b.en = "goodbye";
//here changing attribute of object b, results in changing original value of object a
//using spread operator instead
let c = { en: "bye", hbr: "lehitraot" };
let d = { ...c };
d.en = "goodbye";
// console.log(c, d);
// now the original values dont get changed as it is a deep copy

// using Object.assign(targetObj, ...sourceObjs)
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let targetObj = Object.assign({}, obj1, obj2); //returns a shallow copy
// console.log(targetObj);
targetObj.a = 100;
// console.log(targetObj); changes both the values on manipulation

// stringify and parse object for deep copying nested objects

let object1 = { a: "dinner", b: { c: "rajma chawal" } };
let object2 = JSON.parse(JSON.stringify(object1));
object2.b.c = "pizza";
console.log(object1, object2);
