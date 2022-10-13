// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// STRINGSFUNDAMENTALS



function solution(str){
  const array = str.split('')
  const newArray  = array.reverse()
  return newArray.join('')

  console.log(newArray)
}

