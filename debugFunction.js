function multi(arr) {
  return arr.reduce((a, b)=> a*b, 1)
 }
 function add(arr) {
   return arr.reduce((a, b)=> a + b)
 }
 function reverse(str) {
   return str.split('').reverse().join('');
 }
 
 console.log(multi([4,5,7]))