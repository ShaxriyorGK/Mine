//Factorial of a number

var a = prompt();
var b = a;
var c = 1;
while(a > 1){
  c *= (a-1);
  a--;
}
var x = c*b;
console.log(x);
