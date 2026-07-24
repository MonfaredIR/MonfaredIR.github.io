/* ==========================================
   MonfaredIR
   script.js
   Version 5.0
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

},{threshold:.15});

document.querySelectorAll(

".card,.poem-card,.collection-card,.note,.dobeyti-item,.latest,.hero,.page-header,.poem"

).forEach(el=>observer.observe(el));

/* ==========================================
        Active Page
========================================== */

const currentPage=location.pathname.split("/").pop();

document.querySelectorAll("a").forEach(link=>{

if(link.getAttribute("href")===currentPage){

link.classList.add("active");

}

});

/* ==========================================
        Ripple Effect
========================================== */

document.querySelectorAll(

".card,.poem-card,.collection-card"

).forEach(card=>{

card.addEventListener("click",e=>{

const ripple=document.createElement("span");

const rect=card.getBoundingClientRect();

ripple.className="ripple";

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

card.appendChild(ripple);

setTimeout(()=>ripple.remove(),600);

});

});

/* ==========================================
        Search
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

topButton.classList.toggle(

"show",

window.scrollY>500

);

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
/* ==========================================
        Remember Last Poem
========================================== */

document.querySelectorAll(".poem-card").forEach(card=>{

card.addEventListener("click",()=>{

const title=card.querySelector("h2");

if(title){

localStorage.setItem("lastPoem",title.textContent.trim());

}

});

});

const lastPoem=localStorage.getItem("lastPoem");

if(lastPoem){

console.log("آخرین شعر مطالعه شده:",lastPoem);

}

/* ==========================================
        Keyboard Shortcuts
========================================== */

document.addEventListener("keydown",e=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/* ==========================================
        Lazy Loading Images
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
        Publish Dates
========================================== */

const poemDates={

"man.html":"۳ اسفند ۱۳۹۷",

"rah-man.html":"۱۶ شهریور ۱۳۹۹",

"maghaze-khodkoshi.html":"۲۱ شهریور ۱۳۹۹",

"sandali-choobi.html":"۱۳ آبان ۱۳۹۹",

"ghahghara.html":"۱۴ آبان ۱۳۹۹",

"miresad-roozi.html":"۱۶ آبان ۱۳۹۹",

"johar-ehsas.html":"۲۳ مرداد ۱۴۰۰",

"sarbaz.html":" ۱۴۰۲ مهر",

"cheshm-entezar.html":"۳۱ مرداد ۱۴۰۱",

"sahne-akhar.html":"۲۰ مرداد ۱۴۰۱",

"atashfeshan-eshgh.html":"۱۵ مرداد ۱۴۰۱",

"dorough.html":"۱۵ مرداد ۱۴۰۱",

"khaneh-bedoosh.html":"۱۶ مرداد ۱۴۰۱",

"naji.html":"۷ شهریور ۱۴۰۲",

"atash-eshgh.html":"۱۲ مهر ۱۴۰۲",

"monfared.html":"۳ مرداد ۱۴۰۵"

};
/* ==========================================
        Auto Publish Date
        (HTML Independent)
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

const file=location.pathname.split("/").pop();

if(!poemDates[file]) return;

/* پیدا کردن بهترین محل برای قرار دادن تاریخ */

const targets=[
document.querySelector("article"),
document.querySelector("main"),
document.querySelector(".container"),
document.body
];

const target=targets.find(Boolean);

if(!target) return;

/* اگر قبلاً اضافه شده باشد دوباره نسازد */

if(document.getElementById("publish-date")) return;

/* ساخت باکس */

const box=document.createElement("section");

box.id="publish-date";

box.innerHTML=`
<div style="
margin:45px auto;
padding:18px 20px;
max-width:700px;
border:1px solid #2d2d2d;
border-radius:18px;
background:rgba(255,255,255,.03);
text-align:center;
font-family:'Vazirmatn',sans-serif;
line-height:2;
box-shadow:0 10px 25px rgba(0,0,0,.25);
">

<div style="
color:#d4b06d;
font-size:1.02rem;
font-weight:700;
margin-bottom:8px;
">
📅 تاریخ انتشار
</div>

<div style="
color:#e8e8e8;
font-size:1rem;
">
${poemDates[file]}
</div>

<div style="
margin-top:8px;
color:#9d9d9d;
font-size:.9rem;
">
محمدجواد خواجه (منفرد)
</div>

</div>
`;

/* درج قبل از فوتر در صورت وجود */

const footer=document.querySelector("footer");

if(footer){

footer.parentNode.insertBefore(box,footer);

}else{

target.appendChild(box);

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