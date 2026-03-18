// let count;
// document .write"starting loop"+"</br>");
// for (count = 0; count <10; count++){
//     document.write("current count : "+count +"</br">

// }
// document.write("loop stopped")
// for (key in object) {
    // code block to be exuted
// }
// const person={
//     fname:"shivam",
//     iname "yadav",
//     age:19
// };
// for (let x in person){
//     console.log("person details:"+ x + ":" + person[x])
// } 
var person2 = new Object();
person2.name = "Shivam";
person2.age = 19;
person2.isMarried = false;
person2.address = {};
person2.address.street = "jeevan vihar";
person2['address']['city'] = "ghaziabad";
console.log(person2);