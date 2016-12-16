// USING isNaN() function
--ex:js file
======================================
var num = "NN100";
if (!isNaN(num)){
  console.log("VALID:It is a number");
}
else{
  console.log("It is not number");
}
=======================================
array operations
===== *** In arrays , after applying certain functions original Array is modified
   these are : sort, splice,shift, push, pop, reverse, ****=====
//Array sorting
// Code goes here
// It internally uses the bubble sort to do the sorting
function srt(a,b){
  return a > b;
}
var arr = [10,20,30,150,1];
//console.log(arr.sort()); // [1, 10, 150, 20, 30] does the alphanumeric sorting
/*use sort function mentioned above instead*/
console.log(arr.sort(srt)); //[1, 10, 20, 30, 150]
-------------------------------------
//splice
var arr = [10,20,30,150,1,'aa','zz'];

console.log(arr.splice(2,5)); //[30, 150, 1, "aa", "zz"]
--------------------------------------
//toString()

var arr = [10,20,30,150,1,'aa','zz'];

console.log(arr.toString()); //10,20,30,150,1,aa,zz
-------------------------------------
var arr = [10,20,30,150,1,'aa','zz'];

console.log(arr.reverse()); //["zz", "aa", 1, 150, 30, 20, 10]
--------------------------------------
var arr = [10,20,30,150,1,'aa','zz'];

console.log(arr.shift()); //10
-------------------------------------
var arr = [10,20,30,150,1,'aa','zz'];

console.log(arr.pop()); //zz
console.log(arr);//[10, 20, 30, 150, 1, "aa"]
-------------------------------------
var arr = [10,20,30,150,1,'aa','zz'];

console.log(arr.push()); //7
console.log(arr);//[10, 20, 30, 150, 1, "aa", "zz"]
------------------------------------------
var str = " can you reverse me";
var str1 = str.split('').reverse().join('');

console.log(str1); //em esrever uoy nac
----------------------------------------
var arr = [10,20,30,150,1,'aa','zz'];
 console.log(arr.indexOf(1)); //4
 ----------------------------------------
 var arr = [10,20,30,150,1,'aa','zz'];
  console.log(arr.indexOf('aa')); //5


