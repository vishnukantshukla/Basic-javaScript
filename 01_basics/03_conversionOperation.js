// let score ="33";

let score="333abc"

console.log(typeof score);

console.log(typeof(score));


let valueInNumber= Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber); // yeh Nan Dega yesliya ham value print karake check karna hoga


// in case of boolean

// 1=> true , 0 => false
// "" => false;
// "vishnukant" => true;

let someNumber=33;
let stringNumber = String(someNumber);

console.log(stringNumber);

console.log(typeof stringNumber); 


// ****************************Operations ********************

let value=3;
let negVa= -value;

console.log(value);
 
console.log(negVa)

console.log(2+2);

// console.log(2-2);

// console.log(2*2);

// console.log(2**3);

// console.log(2%3);

// console.log(2/3);


let str="vishnukant"

let str1=" Shukla"

let str2=str+str1

console.log(str2);


console.log("1"+2);
console.log(1 + "2");

console.log(+true);  // interger value yeh dega -> 1

console.log(+""); // yeh 0 dega (because empty string false hota hai)


// link to study 
//http://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion