/* ==========================================
   MonfaredIR
   script.js
   Version 2.0
========================================== */

"use strict";

console.log("✓ Monfared Poetry Loaded");

/* ==========================================
        Fade Animation
========================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".card,.poem-card,.collection-card,.note,.dobeyti-item,.latest,.hero,.page-header,.poem"

).forEach(item=>{

observer.observe(item);

});

/* ==========================================
        Active Page
========================================== */

document.querySelectorAll("a").forEach(link=>{

const href=link.getAttribute("href");

if(href===location.pathname.split("/").pop()){

link.classList.add("active");

}

});

/* ==========================================
        Ripple Effect
========================================== */

document.querySelectorAll(

".card,.poem-card,.collection-card"

).forEach(card=>{

card.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================================
        Search (Future)
========================================== */

function searchPoems(query){

console.log("Searching:",query);

}

window.searchPoems=searchPoems;
/* ==========================================
        Scroll To Top
========================================== */

const topButton=document.getElementById("scrollTop");

if(topButton){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ==========================================
        Remember Last Poem
========================================== */

document.querySelectorAll(".poem-card").forEach(card=>{

card.addEventListener("click",()=>{

localStorage.setItem(

"lastPoem",

card.querySelector("h2").innerText

);

});

});

const latestRead=localStorage.getItem("lastPoem");

if(latestRead){

console.log("آخرین شعر مطالعه شده:",latestRead);

}

/* ==========================================
        Keyboard Shortcuts
========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/* ==========================================
        Image Lazy Loading
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

/* ==========================================
        Footer Year
========================================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/* ==========================================
        Page Loaded
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* ==========================================
        Developer Info
========================================== */

console.log(

"%cMonfared Poetry",

"color:#d4b06d;font-size:16px;font-weight:bold;"

);

console.log(

"محمدجواد خواجه (منفرد)"

);

/* ==========================================
        End
========================================== */