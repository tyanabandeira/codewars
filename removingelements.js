// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/javascript

function removeEveryOther(arr){
  //your code here
  //write a for loop
  for (let i = 1; i < arr.length; i++){
  arr.splice(i,1)
  }  
  return arr
}