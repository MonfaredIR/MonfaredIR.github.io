/* ==========================================
   MonfaredIR
   script.js
   Version 4.0
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

).forEach(item=>observer.observe(item));

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

ripple.className="ripple";

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

this.appendChild(ripple);

setTimeout(()=>ripple.remove(),600);

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

topButton.classList.toggle("show",window.scrollY>500);

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

const title=card.querySelector("h2");

if(title){

localStorage.setItem("lastPoem",title.innerText);

}

});

});

const latestRead=localStorage.getItem("lastPoem");

if(latestRead){

console.log("آخرین شعر مطالعه شده:",latestRead);

}

/* ==========================================
        Keyboard Shortcut
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
        Lazy Images
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
        Publish Date System
        (No HTML Changes Required)
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

const file=location.pathname.split("/").pop();

if(!poemDates[file]) return;

/* پیدا کردن متن شعر بدون وابستگی به کلاس خاص */

let poemContainer=

document.querySelector(".poem-text") ||

document.querySelector(".poem") ||

document.querySelector("article") ||

document.querySelector("main") ||

document.querySelector(".container");

if(!poemContainer) return;

const dateBox=document.createElement("div");

dateBox.style.margin="40px auto";
dateBox.style.maxWidth="650px";
dateBox.style.padding="18px";
dateBox.style.border="1px solid #2d2d2d";
dateBox.style.borderRadius="18px";
dateBox.style.background="rgba(255,255,255,.03)";
dateBox.style.textAlign="center";
dateBox.style.lineHeight="2";
dateBox.style.color="#d8d8d8";
dateBox.style.fontFamily="'Vazirmatn',sans-serif";
dateBox.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

dateBox.innerHTML=`

<div style="font-size:1rem;color:#d4b06d;font-weight:700;">
📅 تاریخ انتشار
</div>

<div style="margin-top:10px;">
${poemDates[file]}
</div>

<div style="margin-top:8px;font-size:.92rem;color:#999;">
محمدجواد خواجه (منفرد)
</div>

`;

/* اگر متن شعر وجود داشت بعد از آن قرار بده */

if(document.querySelector(".poem-text")){

document.querySelector(".poem-text").after(dateBox);

}else{

poemContainer.appendChild(dateBox);

}

});

/* ==========================================
        Developer Info
========================================== */

console.log(

"%cMonfared Poetry",

"color:#d4b06d;font-size:16px;font-weight:bold;"

);

console.log("محمدجواد خواجه (منفرد)");

/* ==========================================
        End
========================================== */