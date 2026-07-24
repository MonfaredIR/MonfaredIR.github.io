/* ==========================================
   MonfaredIR
   script.js
   Version 3.0
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
        Poem Publish Date
========================================== */

const poemDates={

"man.html":"۳ اسفند ۱۳۹۷",

"rah-man.html":"۱۶ شهریور ۱۳۹۹",

"maghaze-khodkoshi.html":"۲۱ شهریور ۱۳۹۹",

"sandali-choobi.html":"۱۳ آبان ۱۳۹۹",

"ghahghara.html":"۱۴ آبان ۱۳۹۹",

"miresad-roozi.html":"۱۶ آبان ۱۳۹۹",

"johar-ehsas.html":"۲۳ مرداد ۱۴۰۰",

"sarbaz.html":"۳۰ تیر ۱۴۰۰",

"cheshm-entezar.html":"۳۱ مرداد ۱۴۰۱",

"sahne-akhar.html":"۲۰ مرداد ۱۴۰۱",

"atashfeshan-eshgh.html":"۱۵ مرداد ۱۴۰۱",

"dorough.html":"۱۵ مرداد ۱۴۰۱",

"khaneh-bedoosh.html":"۱۶ مرداد ۱۴۰۱",

"naji.html":"۷ شهریور ۱۴۰۲",

"atash-eshgh.html":"۱۲ مهر ۱۴۰۲",

"monfared.html":"۳ مرداد ۱۴۰۵"

};

document.addEventListener("DOMContentLoaded",()=>{

const currentPage=location.pathname.split("/").pop();

const morePoems=document.querySelector(".more-poems");

if(!poemDates[currentPage]||!morePoems){

return;

}

const info=document.createElement("div");

info.className="poem-date";

info.innerHTML=`

<div class="poem-date-box">

<div>📅 انتشار: ${poemDates[currentPage]}</div>

<div>✍️ محمدجواد خواجه (منفرد)</div>

</div>

`;

morePoems.parentNode.insertBefore(info,morePoems);

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