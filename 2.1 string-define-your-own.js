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

QString.prototype.trim=function(){
  console.log(this.str);
  console.log(this.str.length);
  var str1=this.str
  var trimchars=[" ","\n","\t"]
  var length=0
  var strarr=str1.split("")
  // trim the end part
  for(var j=strarr.length-1;j>=0;j--){
    if(trimchars.indexOf(strarr[j])!=-1){
      length++
    }
    else{
      break
    }
  }
  strarr.length-=length
  //trim the begin part
  length=0
  for(var i=0;i<strarr.length;i++){
    if(trimchars.indexOf(strarr[i])!=-1){
      length++
    }
    else{
      break
    }
  }
  if(length>0){
    for(var i=length;i<strarr.length;i++){
      strarr[i-length]=strarr[i]
    }
    strarr.length-=length
  }
  this.str=strarr.join("")
  console.log(this.str.length)
  console.log(this.str);
  return this
}
// var str1= new QString("This is Jason!")
// str1.concat(" I like soccer ","I like swimming ", "I am studing coding now ").concat("I love rui")
// console.log(str1.str);
// var str2=new QString("  \n  hello goodbye  \t   ")
// str2.trim()


QString.prototype.splittoword=function(){     //p113
  var limitchars=[" ","\n","\t"]
  var arr=[]
  var word=""
  var str=this.str
  for(idx in str){
    if(limitchars.indexOf(str[idx])==-1){
      word+=str[idx]
    }
    else {
      if(word){
        arr.push(word)
        word=""
      }
    }
  }
  if(word){
    arr.push(word)
  }
  return arr
}
var str1=new QString("I am \t not \n a time")
console.log(str1.splittoword());
