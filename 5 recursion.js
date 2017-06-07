function floodfill(canvas2d,startxy,newcolor) {    //p103
  var arr=canvas2d
  var startx=startxy[0]
  var starty=startxy[1]
  var curcolor=arr[startx][starty]
  arr[startx][starty]=newcolor
  fillaround(arr,[startx-1,starty],curcolor,newcolor)
  fillaround(arr,[startx+1,starty],curcolor,newcolor)
  fillaround(arr,[startx,starty-1],curcolor,newcolor)
  fillaround(arr,[startx,starty+1],curcolor,newcolor)
}
function fillaround(arr,startxy,curcolor,newcolor){
  var startx=startxy[0]
  var starty=startxy[1]
  if(startx>=0&&startx<arr.length&&starty>=0&&starty<arr[0].length){
    if(arr[startx][starty]==curcolor){
      arr[startx][starty]=newcolor
      if((startx-1)>=0){
        var above=[startx-1,starty]
        fillaround(arr,above,curcolor,newcolor)
      }
      if(startx+1<arr.length){
        var below=[startx+1,starty]
        fillaround(arr,below,curcolor,newcolor)
      }
      if(starty-1>=0){
        var left=[startx,starty-1]
        fillaround(arr,left,curcolor,newcolor)
      }
      if(starty+1<arr[0].length){
        var right=[startx,starty+1]
        fillaround(arr,right,curcolor,newcolor)
      }
    }
  }
}
// var canvas=[[3,2,3,4,3],[2,3,3,4,0],[7,3,3,5,3],[7,3,3,5,3],[6,5,3,4,1],[1,2,3,3,3,]]
// console.log(canvas);
// floodfill(canvas,[2,2],1)
// console.log("********************");
// console.log(canvas);


function zibonacci(n){   //pcl105
  if(n<0){
    return false
  }
  else if(n==0||n==1){
    return 1
  }
  else if(n==2){
    return 2
  }
  else{
  var m=Math.floor(n/2)
    if(n%2!=0){
      return zibonacci(m)+zibonacci(m-1)+1
    }
    else{
      return zibonacci(m)+zibonacci(m+1)+1
    }
  }
}
// console.log(zibonacci(8));
// for(var i=0;i<30;i++){
//   // console.log(zibonacci(i));
//   process.stdout.write(zibonacci(i)+"\t")
// }

function bestzibnum(val){
  var idx=0
  num=zibonacci(0)
  while(num<val){
    idx++
    num=zibonacci(idx)
  }
  if(num==val){
    if(zibonacci(idx+3)==val){
      idx+=3
    }
    return [true,idx]
  }
  else{
    return false
  }
}
// console.log(bestzibnum(3186));
// console.log(bestzibnum(3183));


function hanoi(n, initA,tempB,targetC){
  if(n==1){
    console.log("Move disk No. "+ n +" from "+initA+" to "+targetC);
  }
  else{
    hanoi(n-1,initA,targetC,tempB)
    console.log("Move disk No. "+ n +" from "+initA+" to "+targetC);
    hanoi(n-1,tempB,initA,targetC)
  }
}
hanoi(3,"A","B","C")
