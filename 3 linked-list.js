//how to define a linked likst

function Slist(){
  this.head=null
}

function Node(val){
  this.val=val
  this.next=null
}

Slist.prototype.AddFront=function(val){
  var newnode=new Node(val)
  if(this.head==null){
    this.head=newnode
    return this
  }
  else{
    temp=this.head
    this.head=newnode
    newnode.next=temp
    return this
  }
}

Slist.prototype.AddNode=function(val){
  var newnode=new Node(val)
  if(this.head==null){
    this.head=newnode
    return this
  }
  else{
    pointer=this.head
    while(pointer.next!=null){
      pointer=pointer.next
    }
    pointer.next=newnode
    return this
  }
}

Slist.prototype.ShowAll=function(){
  pointer=this.head
  while(pointer!=null){
    console.log(pointer);
    pointer=pointer.next
  }
}
var list1=new Slist()
list1.AddNode(1).AddNode(2).AddNode(3).AddFront(99).ShowAll()

function LlistLength(list1){
  if(list1 instanceof Slist){
    length=0
    pointer=list1.head
    while(pointer!=null){
      length++
      pointer=pointer.next
    }
    return length
  }
}

console.log(LlistLength(list1));


//detect and remove loop in slist :http://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/
