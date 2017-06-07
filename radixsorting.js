function radixsorting(){
  var arr=[1,302,621,5,0,8,12,34,0,9,60,77];
  var max=0
  for(var i=0;i<arr.length;i++){
    if(arr[i].toString().length>max){
      max=arr[i].toString().length
    }
  }
  var newarr=radix(arr,0,max)
  for(var i=0;i<newarr.length;i++){
    console.log(newarr[i]);
  }
}


function radix(arr,dig,round){
  if(round==0){
    return arr;
  }
  var subarrs={};
  for(var i=0;i<arr.length;i++){
    var str=arr[i].toString();
    var digit=str[str.length-1-dig];
    if(!digit){
      digit=0
    }
    if(!subarrs[digit]){
      subarrs[digit]=[]
    }
    subarrs[digit].push(arr[i])
  }
  var combinarr=[]
  for(var i=0;i<10;i++){
    if(subarrs[i]){
      combinarr=combinarr.concat(subarrs[i]);
    }
  }
  var newdig=dig+1;
  var newround=round-1;
  return radix(combinarr,newdig,newround)
}
radixsorting()
