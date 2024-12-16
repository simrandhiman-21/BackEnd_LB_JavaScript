console.log("javascriptttt!!!!!!!!!!!");

let arr=[100,21,13,49,5];
arr.map((num)=>{
    console.log(num+ " ");
})
let ans=arr.filter((n)=>{
    return n%2==0;
})
console.log(ans);

let res=arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(res);


arr.sort();
console.log(arr); //lexically default 

arr.sort((a,b)=>(a-b));
console.log(arr);

let names=["aulja","karan","balle","balle"];
names.sort();
console.log(names); 


arr.forEach((val)=>{
    console.log(val);
})

