//how to define a queue with linked list1
function queue(){
  this.head=null
  this.tail=null
}
function qnode(val){
  this.val=val
  this.next=null
}

//how to defin stack with array
function stack(){
  this.arr=[]
}
stack.prototype.push=function(val){
  this.arr.push(val)
  return this
}
stack.prototype.pop=function(){
  return this.arr.pop()
}
stack.prototype.top=function(){
  return this.arr[this.arr.length-1]
}
stack.prototype.contain=function(val){
  var arr=this.arr
  for(var i=0;i<arr.length;i++){
    if(arr[i]==val){
      return true
    }
  }
  return false
}
stack.prototype.isempty=function(){
  if(this.arr.length==0){
    return true
  }
  return false
}
// var stack1=new stack()
// console.log(stack1.isempty())
// stack1.push(1).push(2).push(3)
// console.log(stack1.top());
// console.log(stack1.pop());
// console.log(stack1.isempty())
