//Q No1
function myfun(a,b) {
    console.log(a*b);
    return a*b;
}
let ans1 = myfun(3,4);
document.getElementById("ans1").innerHTML = ans1;

//Q No2
function add(a,b) {
    console.log(a+b);
    return a+b;
}
let ans2 =add(3,4)
document.getElementById("ans2").innerHTML = ans2;

//Q No3
let arrowfun=((a, b) => {
    console.log(a+b); 
    return `${a+b}`;
});
let ans3 = arrowfun(240,60);
document.getElementById("ans3").innerHTML = ans3;

//Q No4
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
document.getElementById("ans4").innerHTML = girl();

//Q No5
var y = 21;
girl1();
console.log(y)
function girl1() {
    console.log(y);
    var y = 20;
};
document.getElementById("ans51").innerHTML = girl1();
document.getElementById("ans52").innerHTML = y;

//Q No6
var z = 21;
a();
b();       
function a() {
    z = 20;
    console.log(z);
};
function b() {
    z = 40;
    console.log(z);
};

//Q No7
function fact(n) {

    if (n < 0) {
      return "Error: Factorial of a negative number does not exist.";
    }

    else if (n === 0 || n === 1) {
      return 1;
    }

    else {
      return n * fact(n - 1);
    }
  }
  let ans7 = (fact(5));
  console.log(ans7);
  document.getElementById("ans7").innerHTML = ans7;

//Q No8
function FindSum(a1, b1){
    return a1 + b1;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

//Q No9
// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// };

//Q No10
var r = 10;
(function (){
    console.log(r);
    var r = 20;
})();

//Q No11
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes");  