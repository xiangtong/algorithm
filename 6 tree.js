function BST(){
  this.root=null
}
function BTNode(value){
  this.val=value
  this.left=null
  this.right=null
}

BST.prototype.Add=function(val){ // p 120 recusive version add
  var newnode=new BTNode(val)
  function AddNode(parent,newnode){    //p120  // for recusive version add
    if(newnode.val<parent.val){
      if(!parent.left){
        parent.left=newnode
      }
      else{
        AddNode(node.left,newnode)
      }
    }
    else{
      if(!parent.right){
        parent.right=newnode
      }
      else{
        AddNode(parent.right,newnode)
      }
    }
  }
  if(!this.root){
    this.root=newnode
  }
  else{
    parent=this.root
    AddNode(parent,newnode)
  }
  return this
}

BST.prototype.Add2=function(val){  //non recusive version add
  var newnode=new BTNode(val)
  if(!this.root){
    this.root=newnode
    return this
  }
  current=this.root
  while(true){
    if(val<current.val){
      if(current.left===null){
        current.left=newnode
        break
      }
      else {
        current=current.left
      }
    }
    else{
      if(current.right===null){
        current.right=newnode
        break
      }
      else{
        current=current.right
      }
    }
  }
  return this
}

BST.prototype.Contain=function(val){
  var curnode=this.root
  while(true){
    if(!curnode){
      return false
    }
    else if(curnode.val==val){
      return true
    }
    else if(val<curnode.val){
      curnode=curnode.left
    }
    else{
      curnode=curnode.right
    }
  }
}
BST.prototype.Min=function(){
  var curnode=this.root
  while(true){
    if(!curnode){
      return null
    }
    else if(curnode.left===null){
      return curnode.val
    }
    else{
      curnode=curnode.left
    }
  }
  return curnode.val
}
BST.prototype.Size=function(){   //p 120
  var size=0
  function travers(node){
    if(node){
      if(node.left){
        travers(node.left)
      }
      size++
      if(node.right){
        travers(node.right)
      }
    }
  }
  travers(this.root)
  return size
}
BST.prototype.Height=function(){    //p121
  var height=0
  function travers(node){
    if(node){
      return Math.max(travers(node.left),travers(node.right))+1
    }
    else{
      return 0
    }
  }
  height=travers(this.root)
  return height
}
BST.prototype.Max=function(){
  if(!this.root){
    return false
  }
  var node=this.root
  while(true){
    if(node.right){
      node=node.right
    }
    else{
      break
    }
  }
  return node
}
function Max(node){    //find the parent node of max node. if the input is the max, return input.
  if(!node){
    return false
  }
  if(!node.right){
    return node
  }
  while(true){
    if(node.right.right){
      node=node.right
    }
    else{
      break
    }
  }
  return node
}
// var tree1 =new BST()
// // tree1.Add(10).Add(5).Add(80).Add(15)
// tree1.Add2(10).Add2(5).Add2(80).Add2(15).Add2(3).Add2(21).Add2(14).Add2(22)
// console.log(tree1.Max().val)
// console.log(Max(tree1.root.right.left).val);
// console.log(tree1);
// console.log(tree1.Contain(15))
// console.log(tree1.Contain(16));
// console.log(tree1.Min());
// console.log(tree1.Size());
// console.log(tree1.Height());
var node1=new BTNode(1)
var node2=new BTNode(2)
var node3=new BTNode(3)
var node4=new BTNode(4)
node1.right=node2
node2.right=node3
node2=node3
node1.right=node2
console.log(node1);
console.log(node2);

function arraytobst(arr1){     //p121
  if(arr1.length<1){
    return false
  }
  function build(arr,begin,end,node){   //  参数必须用node，用 node.left, node,right 或者 root 都不行
    var val=Math.floor((begin+end)/2)
    if(val>=begin && val <=end){
      if(!node){
        var node=new BTNode()
      }
      node.val=arr[val]
      if(!newbst){
        var newbst =new BST()
        newbst.root=node
      }
      var newend=val-1
      var newbegin=val+1
      if(newend>=begin){
        var left=new BTNode()
        node.left=left
        build(arr,begin,newend,left)
      }
      if(newbegin<=end){
        var right=new BTNode()
        node.right=right
        build(arr,newbegin,end,right)
      }
    }
    return newbst
  }
  return build(arr1,0,arr1.length-1,null)
}
// var arr1=[1,2,3,4,5,6,7,8,9]
// var bst1=arraytobst(arr1)
// console.log(bst1);

function BSTpreordertravers(bst){    //recursive version  p122
  function printnode(node){
    if(node){
      // console.log(node.val);
      process.stdout.write(node.val+"\t")
      printnode(node.left)
      printnode(node.right)
    }
  }
  printnode(bst.root)
}
function BSTpreordertravers2(bst){      //non recursive version
  var arr=[]
  function printnode(node){
    while(true){
      if(node){
        // console.log(node.val);
        process.stdout.write(node.val+"\t")
        if(node.right){
          arr.push(node.right)
        }
        if(node.left){
          node=node.left
        }
        else{
          if(arr.length==0){
            break
          }
          else(
            node=arr.pop()
          )
        }
      }
    }
  }
  printnode(bst.root)
}

// BSTpreordertravers(bst1)
// console.log(" ");
// BSTpreordertravers2(bst1)

BST.prototype.findMinValue(node){     //find the min value in the tree. useful for remove. assume the right sub stree => node, while left sub stree less than node
  if(!node){
    return null
  }
  else{
    while(node.right){
      node=node.right
    }
    return node.val
  }
}

BST.prototype.Remove=function(val){     //p123  https://stackoverflow.com/questions/27812367/binary-search-tree-javascript-implementation-remove-function
  if(!this.root){
    return false
  }
  this.root=removeInner(value,this.root)

  function removeInner(value,node){
    if(node){
      if(value<node.val){
        node.left=removeInner(value,node.left)
      }
      else if(value>node.val){
        node.right=removeInner(value,node.right)
      }
      else if(node.left && node.right){
        node.val=findMinValue(node.right)
        node.right=removeInner(node.val,node.right)
      }
      else{
        node=node.left || node.right
      }
    }
  }
}



//**********test code
// var bst1=new BST()
// var node=new BTNode(1)
// var root=bst1.root
// function a(node,root){
//   root=node
// }
// a(node,bst1.root)
// console.log(bst1);
