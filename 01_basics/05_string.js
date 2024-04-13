const name="vishnukant-shukla"

const repoCount=50;

// console.log(name + repoCount+" Value");  // modern days yeh aab nhi likhte hai


// now modern days we ue stringinterpulation (backtiks use karke (` `));

console.log(`hello my name is ${name}  and my repo count is ${repoCount}`);


// string is a object it store in the form of key and value
const getName=new String('vishnukant-shukla');

console.log(getName[0]);
console.log(getName.__proto__);


console.log(getName.length)

console.log(getName.toUpperCase());

console.log(getName.charAt(2));

console.log(getName.indexOf('t'));


const newString=getName.substring(0,4);

console.log(newString);

const anotherString = getName.substring(-8,4); // yeh negative ko nhi consider karega balki zero se start kar dega
 console.log(anotherString);


 let arr=name.split("-");
console.log(arr[0]);