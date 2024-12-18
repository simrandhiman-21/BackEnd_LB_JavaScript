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

// //diff ways func
// 4types

let getsum=function(arr){
    console.log("jsvsvsavavvavscccccccipptttt");
};


// function hoisting

// console.log(a); //error
let a=10;
console.log(a);

console.log(b); //undefined 
var b=9;

// console.log(g); //error 
// const g=1;
 
sayname();  //works fine 
function sayname(){
    console.log("javavavscripttpttpt");
}

// console.log(sayn);  //error 
// let sayn=function sayname(){
//     console.log("javavavscripttpttpt");
// }
// sayname();


console.log(s);  //undefined
var s=function sayname(){
    console.log("javavavscripttpttpt");
}
sayname();

// const obj=new Human("simran",21); //error 
// class Human{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// console.log(obj.age);


// Variable scoping

// let var arr obj func 
//private mark


class Human{
    #rollno=1;   //private field 
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getRollno(){    
        return this.#rollno;
    }
}
const obj=new Human("simran",21); //error 
console.log(obj.age);
console.log(obj.getRollno());
 

//obj cloning 
//1 spread operator 
let src={age:12};
let dest=src; //now both varibale ponits to same obj 
// let dest={...src}; //shallow copy 
// let dest=Object.assign({},src);
//iteration loop 

console.log(src);
console.log(dest);

src.age=90;

console.log(src);
console.log(dest);

