//11111111111111111111111111

function secondMax(t1){
    let max=0;
    let second=0;
    const walk=(node)=>{
        if(node.value > max)
        {  second=max;
            max=node.value;
        }
        if(node.value > second && node.value<max)
        {
            second=node.value;
        }
        if(node.left)
        {
            walk(node.left);
        }
        if(node.right)
        {
            walk(node.right);
        }
        console.log(second);
        return second;
    }
    walk(t1.root);
}



//2222222222
mergtrees=(tree1,tree2)=>{
   

if(!tree1.root&& !tree2.root){
    return  null }
else if(tree1.root&& !tree2.root){
    return tree1
}
else if(tree2.root&& !tree1.root){
    return tree2
}
else{
return merge(tree1.root,tree2.root)
}
}

merge=(node1,node2)=>{

    node1.value+=node2.value;

    if (node1.left||node2.left){
        merge(node1.left,node2.left)
    }
    
    if (node1.right||node2.right){
        merge(node1.right,node2.right)
    }
 return node1;   
}
 
 
console.log("null+5",null+5)
///33333333333333333333333333333333333

ckeckvalue=(tree,value)=>{
let found= null;

check=(current,value)=>{
if (current.value==value){
found = current;
}
else if(value<current.value){
if (current.left){
    check(current.left,value)}
}

else if(value>current.value){
if (current.right){
    check(current.right,value)
}}

return found;
}





if(tree.root==null){
return null;
}else{
return check(tree.root,value)

}

}








//444444444444444444444444444444

checkcontain=(tree,value)=>{
  let found= null;  
check=(node,value)=>{
    if(node.value==value){
         found= node;
    } 
    else if(node.left){
   check(node.left,value)

    }
    else if(node.right){
        check(node.right,value);
    }

return found;

}
if (!tree.root){
    return false
}else{
 return check(tree.root,value); 
}



}





// checksecond(tree.root);



//555555555555555555555555555

balanced=(tree)=>{
let ahmad=true;

search=(node)=>{

    if(node.left){
if(!node.right){
    ahmad= false;
    return ahmad;
}

    }
 else if(node.right){

        if(!node.left){
            ahmad= false;
            return ahmad;

        }
    }

else{
if(node.left){
    search(node.left)

}
if(node.right){
search(node.right)
}
return ahmad;

}





}
return search(tree.root);
}
//6666666666666666666666666666666
switchfun=(tree)=>{

loops=(node)=>{

temp=node.left;
node.left=node.right;
node.right=temp;


if(node.left){

    loops(node.left)
}

if(node.right){

    loops(node.right)
}

}
if(tree.root==null){
    return false
}
loops(tree.root)
return tree;

}

//7777777777777777777777777
sumnodes=(tree)=>{
let sum= 0;


sumloop=(node)=>{
if(node.left==null && node.right==null){

    sum=sum+1;
}
if (node.left){
sumloop(node.left)

}
if(node.right){

    sumloop(node.right)
}







}
 sumloop(tree.root) 
 return sum;


}

