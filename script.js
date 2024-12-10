document.addEventListener('DOMContentLoaded', () => {
    let change = document.getElementsByClassName("dash")[0]; 
    let nav = document.getElementsByClassName("navlink")[0]; 
    change.addEventListener('click', () => {
        nav.classList.toggle("active"); // Toggle the "active" class on the nav element
    });
});

let nav=document.getElementsByClassName("one")[0];
nav.addEventListener('click',()=>{
    document.body.style.backgroundColor="#003049";
})

let nav2=document.getElementsByClassName("two")[0];
nav2.addEventListener('click',()=>{
    document.body.style.backgroundColor="#bde0fe";
})

let nav3=document.getElementsByClassName("three")[0];
nav3.addEventListener('click',()=>{
    document.body.style.backgroundColor="#0077b6";
})

let nav4=document.getElementsByClassName("four")[0];
nav4.addEventListener('click',()=>{
    document.body.style.backgroundColor="#ffc8dd";
})