// html -> js 
console.log("helelellee")

// access html in js 
// class id tagname queyselector 


let elements = document.getElementById("headingone")
console.log(elements);  //whole html same to same

let para=document.getElementsByClassName("paraone")
console.log(para);   // Returns an HTMLCollection of the elements with the class "paraone"

let tagname=document.getElementsByTagName("button")
console.log(tagname) //whole html same to same


let select=document.querySelector(".devone")
console.log(select) //whole html same to same

let selector=document.querySelectorAll(".devone");
console.log(selector); //node list


// update existing eleemnts
elements.innerHTML="Namaste Duniya"
elements.textContent = "Namaste Duniya";



let spantag=document.querySelector('.spanone')

console.log(spantag.textContent);  ///doesn't work with nodelist
console.log(spantag.innerText);    ///doesn't work with nodelist

// add element 
let bodyt=document.querySelector("body");
let newpara=document.createElement("p");
newpara.textContent="hellooo ,,worldd!!!!";
bodyt.append(newpara);
console.log(bodyt);


let spanone=document.querySelector(".spanone")
let newpara=document.createElement("p");
newpara.textContent="hellooo ,,worldd!!!!";
spanone.insertAdjacentElement('beforebegin', newpara);
console.log(spanone);


//remove 
let parent=document.querySelector(".spanone")
let child=document.querySelector("#par")
parent.removeChild(child);

