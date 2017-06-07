// function pre(arr){
pre= function(arr){
  if(Array.isArray(arr)){
    for(var i=0;i<arr.length;i++){
      var temp=arr[i].length
      arr[i]=temp
    }
  }
  return arr
}

reverse = function(arr){
  if(Array.isArray(arr)){
    for(var i=0;i<Math.floor(arr.length/2);i++){
      var temp=arr[i]
      arr[i]=arr[arr.length-1-i]
      arr[arr.length-1-i]=temp
    }
  }
  return arr
}
// arr1=["abc","d","efgah"]
// console.log(arr1);
// pre(arr1)
// console.log(arr1);

// arr2=[1,2,3,4,5]
// arr3=[1,2,3,4]
// arr2=reverse(arr2)
// arr3=reverse(arr3)
// console.log(arr2);
// console.log(arr3);

function sumtoonedigit(number){
  if(number<10){
    return number
  }
  while(number>=10){
    temp=number
    temp2=0
    while(temp>0){
      temp2+=temp%10
      temp=Math.floor(temp/10)
    }
    number=temp2
  }
  console.log(number);
}

// sumtoonedigit(928)

function isPrime(value){
  for(var i=2;i<value;i++){
    if(value%i===0){
      return false;
    }
  }
  return value>1
}
// console.log(isPrime(13));
function printprime(value){
  for(var i=2;i<=value;i++){
    var ifprime=false;
    if(isPrime(i)===true){
      console.log(i);
    }
  }
}
// printprime(20)

function extract_o_matic(value,digitnum){
  var divider=1
  if(digitnum>=0){
    for(var i=1;i<=digitnum;i++){
      divider*=10
    }
    return Math.floor(value/divider)%10
  }
  else{
    for(var i=0;i<=digitnum;i--){
      divider*=10
    }
    return Math.floor(value*divider)%10
  }
}
// console.log(extract_o_matic(1824,2));
// console.log(extract_o_matic(1824,6));
// console.log(extract_o_matic(1824.45,-1));


//get random from 1-6
function rollone(){
  return Math.floor(Math.random()*(6-1+1))+1
}
// for(var i=1;i<=100;i++){
//   process.stdout.write(rollone()+"\t")
// }


function arrremovedup(arr){
  var newarr=[arr[0]]
  for(var i=1;i<arr.length;i++){
    if(arr[i]!=newarr[newarr.length-1]){
      newarr[newarr.length]=arr[i]
    }
  }
  return newarr
}
// var arr=[1,2,3,4,4,5,5,5,6,6,6,6,8,8]
// console.log(arrremovedup(arr));

function mintofront(arr){
  var min=arr[0]
  var idx=0
  for(var i=1;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i]
      idx=i
    }
  }
  for(var i=idx-1;i>=0;i--){
    arr[i+1]=arr[i]
  }
  arr[0]=min
  return arr
}
// var arr=[4,2,1,3,5]
// console.log(mintofront(arr));

function arrrotate(arr,shiftby){
  if(shiftby>0){
    while(shiftby>0){
      temp=arr[0]
      for(var i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1]
      }
      arr[arr.length-1]=temp
      shiftby--
    }
  }
  else if(shiftby<0){
    while(shiftby<0){
      temp=arr[arr.length-1]
      for(var i=arr.length-2;i>=0;i--){
        arr[i+1]=arr[i]
      }
      arr[0]=temp
      // console.log(arr);
      shiftby++
    }
  }
  return arr
}

// var arr=[1,2,3,4,5,6,7]
// var arr2=[1,2,3,4,5,6,7]
// console.log(arrrotate(arr,3));
// console.log(arrrotate(arr2,-2));


function arrremovenegative(arr){
  var h=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]>=0){
      arr[h]=arr[i]
      h++
    }
  }
  arr.length=h
}
// var arr=[1,-2,3,-1,-2,-3,5,-6]
// arrremovenegative(arr)
// console.log(arr);


function arrshuffle(arr){
  for(var i=0;i<arr.length;i++){
    swapidx=Math.floor(Math.random()*(arr.length))
    temp=arr[swapidx]
    arr[swapidx]=arr[i]
    arr[i]=temp
  }
}
// var arr=[1,2,3,4,5,6,7]
// arrshuffle(arr)
// console.log(arr);


function arrsplice(arr,start, end){
  var removelenght=end-start+1
  console.log(removelenght);
  if(arr.length<removelenght && start==0){
    arr.length=0
  }
  else{
    if(end<arr.length-1){
      for(var i=end+1;i<arr.length-1;i++){
        var idx=i-removelenght
        arr[idx]=arr[i]
      }
    }
    arr.length=arr.length-removelenght
  }
}
// var arr=[1,2,3,4,5,6,7,8,9,10]
// var arr2=[1,2,3,4,5,6,7,8,9,10]
// var arr3=[1,2,3,4,5,6,7,8,9,10]
// arrsplice(arr,3,6)
// arrsplice(arr2,6,10)
// arrsplice(arr3,0,12)
// console.log(arr);
// console.log(arr2);
// console.log(arr3);

function ziparr(arr1,arr2){
  for(i=0;i<arr2.length;i++){
    idx=(i+1)*2-1
    if(idx>arr1.length-1){
      arr1[arr1.length]=arr2[i]
    }
    else {
      for(var j=arr1.length-1;j>=idx;j--){
        arr1[j+1]=arr1[j]
      }
      arr1[idx]=arr2[i]
    }
  }
}
// arr1=[1,2,3]
// arr2=[10,20,30,40,50]
// ziparr(arr1,arr2)
// console.log(arr1);


function tacotrunck(arr){             //p 86
  if(!Array.isArray(arr)){
    return false
  }
  else if(!Array.isArray(arr[0])){
    var arrx=[]
    var length=arr.length
    for(var i=0;i<length;i++){
      arrx.push(arr[i])
    }
    arrx.sort(function(a,b){return a-b})
    console.log(arrx);
    return arrx[Math.floor(length/2)]
  }
  else{
    var arrx=[]
    var arry=[]
    var length=arr.length
    for(var i=0;i<length;i++){
      arrx.push(arr[i][0])
      arry.push(arr[i][1])
    }
    arrx.sort(function(a,b){return a-b})
    arry.sort(function(a,b){return a-b})
    console.log(arrx);
    console.log(arry);
    return [arrx[Math.floor(length/2)],arry[Math.floor(length/2)]]
  }
}
// arr1=[10,-1,2]
// arr2=[[10,0],[-1,-10],[2,4]]
// console.log(tacotrunck(arr1));
// console.log(tacotrunck(arr2));

function removedup(arr){     //p88 without another new arr
  for(var i=0;i<arr.length;i++){
    var j=i+1
    while(j<arr.length){
      if(arr[j]==arr[i]){
        arr[j]=arr[arr.length-1]
        arr.pop()
      }
      else{
        j++
      }
    }
  }
  return arr
}
// var arr1=[1,2,1,1,3,4,9,6,9,4,5,1]
// console.log(removedup(arr1));


function medianofsortedarray(arr1,arr2){ //p90
  // first merge two sorted arrays into a new arrays
  var newarr=[]
  var p1=p2=0
  while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]<arr2[p2]){
      newarr.push(arr1[p1])
      p1++
    }
    else if(arr1[p1]==arr2[p2]){
      newarr.push(arr1[p1])
      p1++
      p2++
    }
    else{
      newarr.push(arr2[p2])
      p2++
    }
  }
  while(p1<arr1.length){
    newarr.push(arr1[p1])
    p1++
  }
  while(p2<arr2.length){
    newarr.push(arr2[p2])
    p2++
  }
  if(newarr.length%2!=0){
    return newarr[Math.floor(newarr.length/2)]
  }
  else{
    result=(newarr[Math.floor(newarr.length/2)]+newarr[Math.floor(newarr.length/2)-1])/2
    return result
  }
}
var arr1=[1,5,9]
var arr2=[1,2,3,4,5,6]
var arr3=[1,5,9]
var arr4=[1,2,3,4,5]
console.log(medianofsortedarray(arr1,arr2));
console.log(medianofsortedarray(arr3,arr4));
