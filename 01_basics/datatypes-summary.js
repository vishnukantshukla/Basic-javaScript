//  Primitive  datatype (call by value copy bhejte hai)



// 7 tyeps -> String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100;

const scoreVal=100.3;

const IsLoggedIn= false;

const outSideTemp=null;  //(mtlb khali hai koye value nhi hai)
const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id==anotherId);   // yeh donoe alag alag hai even value same hone ke baad bhi

const bigNumber=3435353455656687687n;



// Reference Type (Non Primitive)


// Array,Objects,Functions  --> yenka return type object hota hai and function ka return type object function hota hai

const heros=["shakiman","naagraj","doga"];

let myobj={
    name : "vishnukant shukla",
    age:22,
}


const myFunction=function(){
        console.log("Hello World");
}

console.log(typeof bigNumber)