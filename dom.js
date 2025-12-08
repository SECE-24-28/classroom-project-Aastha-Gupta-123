// 1. Tag Selector
let heading1 = document.getElementsByTagName("h1");
// returns HTMLCollection (array-like)
console.log(heading1[0]);

// 2. Class Selector
let cl = document.getElementsByClassName("a");
// returns HTMLCollection
console.log(cl[0]);

// 3. ID Selector
let idd = document.getElementById("b");
// returns a single element (first element with that ID)
console.log(idd);

// 4. Query Selector
// Works for tag, class, id — returns FIRST matching element
let sel = document.querySelector("#b");
console.log(sel);

// 5. Query Selector All
// Returns NodeList (similar to array) of ALL matching elements
let selAll = document.querySelectorAll(".a");
console.log(selAll);
console.log(selAll[0]); // accessing first element

// Read and Write Operation
let head = document.querySelector("p");
// Read Operation
console.log(head.textContent);

//Write operation
head.textContent = "This is the new paragraph content.";

let div = document.querySelector("div");
div.innerHTML = "<p>Hello From Para</p>";
//div.textContent = "<p>Hello From Para</p>";
console.log(div.textContent);


console.log(div.innerHTML);

// add/remove/toggle class
let head=document.querySelector("h1");
console.log(head);

head.classList.add("color");
head.classList.remove("border");
head.classList.toggle("background");

//Styling
let p = document.querySelector("p");
p.style.color="red";
p.style.backgroundColor = "green";

//Creating Element
let ul = document.createElement("ul");
let lii = document.createElement("li");
lii.textContent = "Item 1";
let  li1 = document.createElement("li");
li1.textContent = "Item 2";
ul.appendChild(lii);
ul.appendChild(li1);

document.body.appendChild(ul);
let arr = ["Apple", "Banana", "Mango"];
arr.forEach((element) => {
    let lo = document.createElement("li");
    lo.textContent = element;
    ul.appendChild(lo);
});


let form=document.querySelector("form");
form.addEventListener("submit", () => {
    let name = document.querySelectorAll("input")[0];
    let feedback = document.querySelectorAll("input")[1];
    if (name.value === ""){
        alert("Name filed is required");
        return;
    }
    if(feedback.value.length < 5){
        alert("feedback must be at least 5 characters long");
        return ;
    }
    let result=document.querySelectorAll("")
})