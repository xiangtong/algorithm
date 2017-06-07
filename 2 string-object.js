// console.log(1+2+"3"+"4"+5+6);

function removeblank(string){
  array=string.split(" ")
  return array.join("")
}
// var string1=" I am going to   do some thing  "
// console.log(removeblank(string1))
// console.log(string1);

function getdigit(string){
  array=[]
  for(var i=0;i<string.length;i++){
    if(!isNaN(string[i])){
      array.push(string[i])
    }
  }
  return array.join("")
}
// var str1="02.edg!ad65~ty888))"
// console.log(getdigit(str1));

function Acronym(string){
  array=string.split(" ")
  array2=[]
  for(var i=0;i<array.length;i++){
    array2.push(array[i][0].toUpperCase())
  }
  return array2.join("")
}
// var str1="i am going to do something today"
// console.log(Acronym(str1));

function removeevenlength(array){
  if(!Array.isArray(array)){
    return false
  }
  var h=0
  for(var i=0;i<array.length;i++){
    if(array[i].length%2!=0){
      array[h]=array[i]
      h++
    }
  }
  array.length=h
}
// var arr1=["ab","a","!","!56","abc%","abcd3fg"]
// removeevenlength(arr1)
// console.log(arr1);

function parenvalid(str){
  var num=0
  for(var i=0;i<str.length;i++){
    if(str[i]==="("){
      num++
    }
    else if(str[i]===")"){
      num--
    }
    if(num<0){
      return false
    }
  }
  if(num!=0){
    return false
  }
  return true
}
// var str="(a(bcd))("
// console.log(parenvalid(str));

function brackvalid(str){
  var openbraces=["(","{","["]
  var closebraces=[")","}","]"]
  var bracearray=[]
  for(var i=0;i<str.length;i++){
    if(openbraces.indexOf(str[i])!=-1){
      bracearray.push(str[i])
    }
    else if(closebraces.indexOf(str[i])!=-1){
      closeidx=closebraces.indexOf(str[i])
      openidx=openbraces.indexOf(bracearray.pop())
      if(closeidx!=openidx){
        return false
      }
    }
  }
  if(bracearray.length!=0){
    return false
  }
  return true
}
// var str1="(a{t}s[o(n{ c}a)e]m ) h[e{r}e]"
// var str2="D(i{a}l[ t]o)n{e"
// console.log(brackvalid(str1));
// console.log(brackvalid(str2));

function ispalindrome(str){
  for(var i=0;i<Math.floor(str.length/2);i++){
    if(str[i]!=str[str.length-1-i]){
      return false
    }
  }
  return true
}
function ispalindrome2(str){
  var rev=str.splice("").reverse().join("")
  return str==rev
}
// var str1="ab%!!%ba"
// var str2="ab%!f!%ba"
// console.log(ispalindrome(str1));
// console.log(ispalindrome(str2));

//longest palindrome
function longestpalindrome(str){
  var maxlength=0
  var pointer=0
  for(var i=0;i<str.length;i++){
    extendpalindrome(str,i,i)
    extendpalindrome(str,i,i+1)
  }
  return str.substring(pointer,pointer+maxlength)
  function extendpalindrome(str,start,end){
    while(start>=0 && end<str.length && str[start]==str[end]){
      start--
      end++
    }
    if(maxlength<end-start-1){
      maxlength=end-start-1
      pointer=start+1
    }
  }
}
// var str1="my favorite racecar erupted!"
// var str2="aba"
// console.log(longestpalindrome(str1));


function alphabeticalorder(str){
  var letters="abcdefghijklmnopqrstquvwxyz"
  var idx=-1
  for(var i=0;i<str.length;i++){
    var newidx=letters.indexOf(str[i].toLowerCase())
    if(newidx<idx){
      return false
    }
    else{
      idx=newidx
    }
  }
  return true
}
// var str1="aegtuw"
// var str2="fghijmk"
// console.log(alphabeticalorder(str1))
// console.log(alphabeticalorder(str2))

//******************************************** object***************************

function coinchange(centnumber){
  var result={quanter:0,dime:0,nickel:0,penny:0}
  while(centnumber>=25){
    centnumber-=25
    result.quanter++
  }
  while(centnumber>=10){
    centnumber-=10
    result.dime++
  }
  while(centnumber>=5){
    centnumber-=5
    result.nickel++
  }
  result.penny=centnumber
  return result
}
// console.log(coinchange(43));

function ziparrayintoobj(arr1,arr2){
  if(arr1.length!=arr2.length){
    return false
  }
  var obj={}
  for(var i=0;i<arr1.length;i++){
    obj[arr1[i]]=arr2[i]
  }
  return obj
}

function inverthash(obj){
  var newobj={}
  for(key in obj){
    newobj[obj[key]]=key
  }
  return newobj
}
// arr1=["a",'b','c',null,'d']
// arr2=[1,2,3,4]
// console.log(ziparrayintoobj(arr1,arr2))
// console.log(inverthash(ziparrayintoobj(arr1,arr2)))
function numofvaluewithlength(arr){
  var number=0
  for(item in arr){
    if(arr[item]){
      number++
    }
  }
  return number
}
// arr1=["a",'b','c',null,'d']
// obj1={a:1,b:2,c:null,d:undefined,f:9}
// console.log(numofvaluewithlength(arr1));
// console.log(numofvaluewithlength(obj1));


function QString(str){
  this.str=str
  this.concat=function(){
    var arr=this.str.split("")
    for (i = 0; i < arguments.length; i++) {
      var newarr=arguments[i].split("")
      for(var j=0;j<newarr.length;j++){
        arr.push(newarr[j])
      }
    }
    this.str=arr.join("")
    return this
  }
}
// var str1= new QString("This is Jason!")
// str1.concat(" I like soccer ","I like swimming ", "I am studing coding now ").concat("I love rui")
// console.log(str1.str);

function numtostring(num){    //p115
  console.log(typeof(num));
  if(typeof(num)=="number"){
    result=""+num
    console.log(typeof(result));
    return result
  }
}
// var num1=11.2051
// console.log(numtostring(num1));

function strencode(str){    //p118
  var newstr=""
  var char=""
  var number=0
  for(idx in str){
    if(!char){
      char=str[idx]
      number=1
    }
    else{
      if(char==str[idx]){
        number++
      }
      else{
        newstr=newstr+char+number
        char=str[idx]
        number=1
      }
    }
  }
  newstr=newstr+char+number
  if(newstr.length<str.length){
    return newstr
  }
  else{
    return str
  }
}
// var str1="aaaabbcddd"
// console.log(strencode(str1));

function stringcensor(string, keyworkarray){
  var strarr=[]
  for(var a=0;a<string.length;a++){
    strarr.push(string[a])
  }
  // console.log(strarr);
  for(var i=0;i<keyworkarray.length;i++){
    // console.log(keyworkarray[i]);
    var index=-1
    var m=0
    for(var j=0;j<strarr.length;j++){
      if(strarr[j]==keyworkarray[i][m]){
        if(index==-1){
          index=j
          // console.log("index:"+index);
        }
        m++
      } else  if(strarr[j]!=keyworkarray[i][m]&&m<keyworkarray[i].length){
        m=0
        index=-1
      }
      // console.log("m:"+m);
      if(m>keyworkarray[i].length-1){
        for(var k=index;k<(index+keyworkarray[i].length);k++){
          strarr[k]="x"
        }
        m=0
        index=-1
      }
    }
  }
  var newstr=""
  for(var n=0;n<strarr.length;n++){
    newstr+=strarr[n]
  }
  return newstr
}
var result=stringcensor("Snap crackle pop nincompoop!",["crack","poop"])
console.log(result);
