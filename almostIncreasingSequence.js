//Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(arr){
  var indicator=0
  // traverse array from the second first item to the  last item
  for(var i=1;i<arr.length;i++){
    if(arr[i]<=arr[i-1]){
      if(arr[i-2]&&arr[i]<=arr[i-2]&&arr[i+1]&&arr[i+1]<=arr[i-1]){
        return false
      } else {
        indicator++
        if(indicator>1){
          return false
        }
      }
    }
  }
  return true
}

console.log('\nThese should be True.')
console.log(almostIncreasingSequence([]))
console.log(almostIncreasingSequence([1]))
console.log(almostIncreasingSequence([1, 2]))
console.log(almostIncreasingSequence([1, 2, 3]))
console.log(almostIncreasingSequence([1, 3, 2]))
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]))
console.log(almostIncreasingSequence([0, -2, 5, 6]))
console.log(almostIncreasingSequence([1, 1]))
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]))
console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]))
console.log(almostIncreasingSequence([1, 2, 2, 3]))

console.log('\nThese should be False.')
console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([3, 2, 1]))
console.log(almostIncreasingSequence([1, 1, 1]))
