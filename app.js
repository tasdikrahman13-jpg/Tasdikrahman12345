let coins=+localStorage.tasdikCoins||1000;const $=id=>document.getElementById(id);
function sync(){ $('coins').textContent=coins;$('pc').textContent=coins;localStorage.tasdikCoins=coins}
function show(id){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));$(id).classList.add('active');scrollTo(0,0)}
function addCoins(){coins+=100;sync();info('Demo coins','100 virtual coins added.')}
function bonus(n){coins+=n;sync();info('Bonus claimed',n+' virtual coins added.')}
function info(t){$('mt').textContent='Information';$('game').innerHTML='<p>'+t+'</p><button onclick="closeModal()">OK</button>';$('modal').classList.add('show')}
function closeModal(){$('modal').classList.remove('show')}
function copyRef(){navigator.clipboard?.writeText($('ref').value);info('Referral demo link copied.')}
function game(type){$('modal').classList.add('show');let title={dragon:'Dragon VS Tiger',slots:'777 Slots',wheel:'Lucky Wheel',ludo:'Ludo'}[type];$('mt').textContent=title;
if(type==='dragon'){$('game').innerHTML=`<div class="gameboard"><div class="cards"><div><div class="card" id="d">?</div><b>DRAGON</b></div><div><div class="card" id="t">?</div><b>TIGER</b></div></div><div class="bet"><button onclick="round('dragon')">Dragon</button><button onclick="round('tiger')">Tiger</button><button onclick="round('tie')">Tie</button></div><div class="result" id="r">Virtual coins only.</div></div>`}
else if(type==='wheel'){$('game').innerHTML='<div class="gameboard"><div style="font-size:110px;margin:50px">🎡</div><button onclick="spin()">SPIN 20 COINS</button><div class="result" id="r"></div></div>'}
else if(type==='slots'){$('game').innerHTML='<div class="gameboard"><div style="font-size:70px;margin:60px">🍒 777 🍋</div><button onclick="slots()">SPIN 20 COINS</button><div class="result" id="r"></div></div>'}
else{$('game').innerHTML='<div class="gameboard"><div style="font-size:100px;margin:50px">🎲</div><button onclick="dice()">ROLL 10 COINS</button><div class="result" id="r"></div></div>'}}
function spend(n){if(coins<n){info('Not enough virtual coins');return false}coins-=n;sync();return true}
function round(c){if(!spend(10))return;let d=1+Math.floor(Math.random()*13),t=1+Math.floor(Math.random()*13);$('d').textContent=d;$('t').textContent=t;let w=d>t?'dragon':t>d?'tiger':'tie';if(w===c){coins+=c==='tie'?80:20;sync();$('r').textContent='You won virtual coins!'}else $('r').textContent='Round finished: '+d+' vs '+t}
function spin(){if(!spend(20))return;let n=[0,10,20,40,80][Math.floor(Math.random()*5)];coins+=n;sync();$('r').textContent='Wheel: +'+n+' virtual coins'}
function slots(){if(!spend(20))return;let a=['🍒','🍋','7️⃣','🔔','⭐'],x=a[Math.floor(Math.random()*5)],y=a[Math.floor(Math.random()*5)],z=a[Math.floor(Math.random()*5)],w=x===y&&y===z?100:x===y?30:0;coins+=w;sync();$('r').textContent=x+' '+y+' '+z+'  +'+w}
function dice(){if(!spend(10))return;$('r').textContent='You rolled '+(1+Math.floor(Math.random()*6))}
sync();
