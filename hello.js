let a=6;
const b=1;
console.log("Hello :)\n"+a+b);
// a=23;
if(a>5){
    console.log(a+" is greater than 5 ");
}
else if(b>5){
    console.log(b+" is greater than 5");
}
else{
    console.log(a+" and "+b+" are smaller than 5");
}
// for(let i=0;i<a;i++){
//     if(i<5){
//         console.log(i+" is smaller than 5");
//     }
//     else if(i==5){
//         console.log(i+" is equal to 5");
//     }
//     else{
//         console.log(i+" is greater than 5");
//     }
// }

//array
const c=[a,b,"idiot","smart",123];
// json format
// key value pairs
const data={
    a:"one",
    b:"two",
    c:"three",
    d:"four"
};
function fib(x){
    if(x==1 || x==2){
        return 1;
    }
    else{
        return fib(x-1)+fib(x-2);
    }
}
function fact(x){
    // let temp=0;
    let a=1;
    // let b=1;
    for(let i=1;i<=x;i++){
        a=a*i;
    }
    return a;
}

console.log(fib(7));
console.log(fact(5));
var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke);
var cowsay = require("cowsay");
var joke=getRandomJoke;
console.log(cowsay.think({
    text : getRandomJoke.body,
    e : "oo",
    T : "V"
}));
