class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestNum 
  for(let i=0; i < args.length; i++){
    if(smallestNum === undefined || smallestNum > args[i]){
      smallestNum = args[i]
    }
  } 
    return smallestNum
  }
}