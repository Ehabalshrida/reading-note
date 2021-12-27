
larger=(tree)=>{
    let largest=tree.root.value;
    let second=tree.root.left.value;
checksecond=(node)=>{
if(node.value>largest){
    temp=largest;
    largest=node.value;
    second=temp;
}



}
checksecond(tree.root);

}



balanced=(tree)=>{
let ahmad=true;

search=(node)=>{

    if(node.left){
if(!node.right){
    ahmad= false;
}

    }
 else if(node.right){

        if(!node.left){
            ahmad= false;
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

