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


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primitive)(yeh value ki copy deta hai actual value me change nhi hota hai) , Heap Memory(Non- Primitive)(yeh call by refrence hota hai jo uss location ki value ko modify kar deta hai)

let myYoutubename="vishnukantshukla";


let anothername=myYoutubename;

console.log(anothername);  // yesme copy jati hai

let UserOne={
    email:"vishnu@gmail.com",
    upi:"user@ybl",
}

let UserTwo=UserOne;
UserTwo.email="Vishnukant@gmail.com";

console.log(UserOne.email);