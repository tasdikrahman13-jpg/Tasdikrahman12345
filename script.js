let coins=850;
const $=id=>document.getElementById(id);
function addCoins(){coins+=100;updateCoins();toast("+100 virtual coins");}
function updateCoins(){ $("balance").textContent=coins; $("profileBalance").textContent=coins; }
function openModal(id){$(id).classList.add("show")}
function closeModal(id){$(id).classList.remove("show")}
function demoMessage(t){toast(t)}
function toast(t){let x=$("toast");x.textContent=t;x.classList.add("toast");setTimeout(()=>x.classList.remove("toast"),2200)}
function playChicken(){toast("Chicken Road demo started — virtual coins only");}
let seconds=23*3600+54*60+11;
setInterval(()=>{seconds--;if(seconds<0)seconds=86400-1;let h=Math.floor(seconds/3600),m=Math.floor(seconds%3600/60),s=seconds%60;$("timer").textContent=[h,m,s].map(x=>String(x).padStart(2,"0")).join(":")},1000);

let p=5;
const interval=setInterval(()=>{
 p+=5;
 $("loadbar").style.width=p+"%";
 $("loadtext").textContent=p+"%";
 if(p>=100){
   clearInterval(interval);
   setTimeout(()=>{$("splash").style.display="none";$("app").classList.remove("hidden")},350);
 }
},90);
