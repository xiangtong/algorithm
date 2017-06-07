//********************** for circular queue*************
// good ref: http://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/
function cirqueue(cap){
  this.head=-1                // with -1, mean the circular begin with the first item of array. you could use 0 two, that means you will begin with the seconde item of arryay. if you use 0, you should change related number in below code.
  this.end=-1
  this.capacity=cap
  this.arr=[]
}
cirqueue.prototype.isfull=function(){
  if((this.head==0&&this.end==this.capacity-1)||(this.end==this.head-1)){
    return true
  }
  return false
}
cirqueue.prototype.isempty=function(){
  if(this.head==-1){
    return true
  }
  return false
}
cirqueue.prototype.enqueue=function(val){
  if(this.isempty()){
    this.arr[0]=val
    this.head=0
    this.end=0
    return this
  }
  else if(this.isfull()){
    return false
  }
  else{
    if(this.end+1>this.capacity-1){
      this.end=0
      this.arr[this.end]=val
    }
    else{
      this.end+=1
      this.arr[this.end]=val
    }
    return this
  }
}
cirqueue.prototype.dequeue=function(){
  if(this.isempty()){
    return false
  }
  else if(this.head==this.end){   //only one item in queue
    curidx=this.head
    this.head=-1
    this.end=-1
    return this.arr[curidx]
  }
  else{
    result=this.arr[this.head]
    if(this.head+1<this.capacity){
      this.head+=1
    }
    else{
      this.head=0
    }
    return result
  }
}
cirqueue.prototype.size=function(){
  if(this.head==-1){
    return 0
  }
  else if(this.head==this.end) {
    return 1
  }
  else if(this.head<this.end){
    return this.end-this.head+1
  }
  else {
    return this.capacity-(this.head-this.end-1)
  }
}
var cirq1 = new cirqueue(10)
console.log(cirq1.isfull()+" "+cirq1.size());
var i=1
while(!cirq1.isfull()){
  cirq1.enqueue(i)
  cirq1.size()
  i++
}
//below is testing code
console.log(cirq1.size());
console.log(cirq1.arr);
console.log(cirq1.dequeue())
console.log(cirq1.dequeue());
cirq1.enqueue(11).enqueue(12)
console.log(cirq1.arr);
console.log(cirq1.enqueue(13));
for(var j=0;j<5;j++){
  cirq1.dequeue()
}
console.log(cirq1.head+"---"+cirq1.end);
console.log(cirq1.size());
for(var j=0;j<4;j++){
  cirq1.dequeue()
}
console.log(cirq1.size());
console.log(cirq1.isempty());
console.log(cirq1.dequeue())
console.log(cirq1);
