'use strict';
const $ = id => document.getElementById(id);
const QUESTIONS = [
  [
    ["Ә дыбысы бар адам атауын тап!", ["Алма", "Әже", "Отан", "Бала"], 1],
    ["Ә дыбысы бар тағам атауын тап!", ["Нан", "Май", "Кәмпит", "Құрт"], 2],
    ["Ә дыбысы бар құс атауын тап!", ["Қарға", "Торғай", "Тауық", "Әтеш"], 3]
  ],
  [
    ["Ә дыбысы сөздің басында тұрған сөзді тап!", ["Дәрі", "Сәби", "Әтеш", "Кәрі"], 2],
    ["Қай есім Ә әрпінен басталады?", ["Сәуле", "Әлия", "Айша", "Дана"], 1],
    ["Қай отбасы мүшесінің атауы Ә-ден басталады?", ["Ата", "Ана", "Аға", "Әке"], 3]
  ],
  [
    ["Ә дыбысы сөздің ортасында тұрған сөзді тап!", ["Әке", "Дән", "Ән", "Әже"], 1],
    ["«Сән» сөзінде Ә қай орында тұр?", ["Басында", "Ортасында", "Соңында", "Кездеспейді"], 1],
    ["«Сәби» сөзіндегі екінші әріпті тап!", ["И", "Б", "Ә", "С"], 2]
  ],
  [
    ["«Әже» сөзі неше буыннан тұрады?", ["1", "2", "3", "4"], 1],
    ["«Ән» сөзінде неше буын бар?", ["2", "3", "4", "1"], 3],
    ["«Әліппе» сөзін буындап оқ. Неше буын бар?", ["3", "1", "2", "4"], 0]
  ],
  [
    ["Ә қандай дыбыс?", ["Жуан дауысты", "Жіңішке дауысты", "Қатаң дауыссыз", "Ұяң дауыссыз"], 1],
    ["«Сәл» сөзіндегі дауысты дыбысты тап!", ["С", "Л", "Ә", "А"], 2],
    ["Ә сияқты жіңішке дауысты дыбысты тап!", ["А", "О", "Ұ", "Ө"], 3]
  ],
  [
    ["Ә дыбысы бар ай атауын тап!", ["Ақпан", "Мамыр", "Сәуір", "Қазан"], 2],
    ["Ә дыбысы бар көгөністі тап!", ["Қияр", "Сәбіз", "Пияз", "Шалқан"], 1],
    ["Ә дыбысы бар оқу құралын тап!", ["Қалам", "Сызғыш", "Кітап", "Дәптер"], 3]
  ],
  [
    ["«Дәрі» сөзі неше буыннан тұрады?", ["1", "2", "3", "4"], 1],
    ["«Әтеш» сөзінің екінші буынын тап!", ["Ә", "Теш", "Те", "Еш"], 1],
    ["«Сәлем» сөзінің бірінші буынын тап!", ["Лем", "Ә", "Сә", "Сәл"], 2]
  ],
  [
    ["«Әнұран» сөзінің бірінші дыбысын тап!", ["А", "Ә", "Е", "І"], 1],
    ["«Сәбіз» сөзі қай дыбыстан басталады?", ["Ә", "З", "С", "Б"], 2],
    ["«Дәрі» сөзінің алғашқы дыбысы қайсы?", ["Д", "І", "Ә", "Р"], 0]
  ],
  [
    ["Әнұран – бұл не?", ["Ойыншық", "Мемлекеттік рәміз", "Жеміс", "Жануар"], 1],
    ["Әнші не істейді?", ["Ән айтады", "Нан пісіреді", "Егін егеді", "Хат тасиды"], 0],
    ["Дәрігер не істейді?", ["Сурет салады", "Үй салады", "Адамды емдейді", "Киім тігеді"], 2]
  ],
  [
    ["Ә дыбысы кездесетін сөзді тап!", ["Дос", "Дәптер", "Ағаш", "Құс"], 1],
    ["Қай сөзде кіші ә әрпі жазылған?", ["Бота", "Күшік", "Бәтеңке", "Қасық"], 2],
    ["Қай сөзден ә әрпін көріп тұрсың?", ["Орамал", "Тарақ", "Кесе", "Мәшине"], 3]
  ]
];
const EXTRA = [
  [
    ["«Әке» сөзінің бірінші буынын тап!", ["Ә", "Ке", "А", "Е"], 0],
    ["«Тәтті» сөзінің соңғы буынын тап!", ["Тәт", "Ті", "Тәтті", "І"], 1],
    ["«Бәліш» сөзінің бірінші буынын тап!", ["Ліш", "Ә", "Бә", "Бәл"], 2]
  ],
  [
    ["«Бәс» сөзінде ә нешінші орында?", ["Бірінші", "Екінші", "Үшінші", "Төртінші"], 1],
    ["«Әнші» сөзінде ә қай жерде тұр?", ["Басында", "Ортасында", "Соңында", "Кездеспейді"], 0],
    ["«Кәрі» сөзіндегі ә-нің алдында қай әріп тұр?", ["І", "Р", "Ә", "К"], 3]
  ],
  [
    ["«Әдемі» сөзінде неше буын бар?", ["1", "2", "3", "4"], 2],
    ["«Дәм» сөзі неше буыннан тұрады?", ["1", "2", "3", "4"], 0],
    ["«Дәрмен» сөзін буындап айт. Неше буын бар?", ["1", "2", "3", "4"], 1]
  ]
];
const defaults = ['Алғырлар','Тапқырлар','Мергендер'];
const colors = ['red','blue','green','yellow'];
const W=1200,H=550, origin={x:600,y:395}, maxPull=115, dragFriction=750;
const ctx=$('board').getContext('2d');
const art={};
const preload = Promise.all(['saka',...colors,'ready','hello','clap','winner','field','prairie','button'].map(name=>new Promise((resolve,reject)=>{
  const img=new Image();
  img.onload=()=>{art[name]=img;resolve();};
  img.onerror=()=>reject(new Error(name));
  img.src='assets/'+name+(['field','prairie'].includes(name)?'.webp':'.png');
})));
preload.catch(()=>{$('start').textContent='Ресурстарды тексеріңіз';$('start').disabled=true;});
let teamCount=2, teams=[], order=[], turn=0, round=0, duelNumber=0, leaders=[];
let phase='lobby', attempt=0, shot=null, targets=[], permutations=[], pointer=null, grab=null;
let particles=[], trail=[], outcome=null, elapsed=0, lastTime=0, raf=0;

function shuffle(source) {
  const list=source.slice();
  for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[list[i],list[j]]=[list[j],list[i]];}
  return list;
}
function showScreen(name){for(const id of ['lobby','play','result']) $(id).hidden=id!==name;}
function chooseCount(count){
  teamCount=count;
  $('third').hidden=count!==3;
  for(const button of document.querySelectorAll('[data-count]')) button.setAttribute('aria-pressed',String(Number(button.dataset.count)===count));
}
for(const button of document.querySelectorAll('[data-count]')) button.onclick=()=>chooseCount(Number(button.dataset.count));

// A short plucked-string accompaniment and feedback tones are synthesized offline.
const audio = (() => {
  let ac=null,master=null,enabled=true,timer=null,beat=0;
  const melody=[62,0,69,0,67,69,74,0,69,67,0,64,62,0,57,0];
  const hz=n=>440*2**((n-69)/12);
  function unlock(){
    try {
      if(!ac){ac=new AudioContext();master=ac.createGain();master.gain.value=enabled?.52:0;master.connect(ac.destination);}
      if(ac.state==='suspended')ac.resume().catch(()=>{});
    }catch{}
  }
  function tone(f,duration,volume=.2,delay=0,type='triangle',end=0){
    if(!ac||!enabled||document.hidden)return;
    const t=ac.currentTime+delay,osc=ac.createOscillator(),g=ac.createGain();
    osc.type=type;osc.frequency.setValueAtTime(f,t);
    if(end)osc.frequency.exponentialRampToValueAtTime(end,t+duration);
    g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(volume,t+.009);g.gain.exponentialRampToValueAtTime(.0001,t+duration);
    osc.connect(g);g.connect(master);osc.start(t);osc.stop(t+duration+.03);
    osc.onended=()=>{osc.disconnect();g.disconnect();};
  }
  function pluck(n,vol=.10,delay=0){tone(hz(n),.55,vol,delay);tone(hz(n)*2,.14,vol*.35,delay);}
  function music(){
    if(timer)clearInterval(timer);
    beat=0;
    timer=setInterval(()=>{const n=melody[beat%melody.length];if(n)pluck(n,.064);if(beat%4===0)pluck(beat%8===0?50:45,.046);beat++;},480);
  }
  function fx(type){
    if(type==='grab')tone(195,.12,.12,0,'triangle',275);
    if(type==='pull')tone(230,.09,.07,0,'sine',325);
    if(type==='fly')tone(430,.24,.12,0,'sine',90);
    if(type==='hit'){tone(260,.075,.42,0,'triangle',65);tone(740,.048,.2);}
    if(type==='good')[69,73,76].forEach((n,i)=>pluck(n,.2,.08+i*.1));
    if(type==='bad'){pluck(64,.15,.09);pluck(59,.13,.24);}
    if(type==='win')[62,66,69,74,71,74,78,81].forEach((n,i)=>pluck(n,.19,i*.13));
  }
  function toggle(){
    enabled=!enabled;unlock();
    if(master)master.gain.setTargetAtTime(enabled?.52:0,ac.currentTime,.018);
    $('audioButton').querySelector('use').setAttribute('href',enabled?'#sound':'#mute');
    $('audioButton').setAttribute('aria-label',enabled?'Дыбысты өшіру':'Дыбысты қосу');
    $('audioButton').setAttribute('aria-pressed',String(enabled));
    if(enabled)pluck(69);
  }
  return {unlock,music,fx,toggle,stop(){clearInterval(timer);timer=null;}};
})();
$('audioButton').onclick=audio.toggle;
$('fullButton').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{}};
document.addEventListener('fullscreenchange',()=>$('fullButton').setAttribute('aria-label',document.fullscreenElement?'Толық экраннан шығу':'Толық экран'));
let turnQuestions = [];
const questionData = () => turnQuestions[turn];
function setRound(){
  const variants = duelNumber ? EXTRA[(duelNumber-1) % EXTRA.length] : QUESTIONS[round];
  turnQuestions = shuffle(variants).slice(0, order.length);
  const base=shuffle([0,1,2,3]), shifts=shuffle([0,1,2,3]);
  permutations=order.map((_,i)=>base.map((__,j)=>base[(j+shifts[i])%4]));
  turn=0; beginTurn();
}
function updateScores(){
  $('scores').replaceChildren(...teams.map((team,i)=>{
    const node=document.createElement('div');node.className='score'+(order[turn]===i?' active':'');
    const dot=document.createElement('b');dot.className='dot t'+i;
    const name=document.createElement('strong');name.textContent=team.name;
    const pts=document.createElement('span');pts.className='points';pts.textContent=team.score+' ұпай'+(team.bonus?' +'+team.bonus:'');
    node.append(dot,name,pts);return node;
  }));
}
function buildTargetLabels(){
  const labels=targets.map(t=>{
    const label=document.createElement('div');label.className='answer';label.textContent=questionData()[1][t.option];t.label=label;return label;
  });
  $('captions').replaceChildren(...labels);targets.forEach(positionLabel);
}
function positionLabel(t){
  t.label.style.left=(t.x/W*100)+'%';t.label.style.top=((t.y-53)/H*100)+'%';
}
function beginTurn(){
  attempt=0;outcome=null;particles=[];targets=permutations[turn].map((option,i)=>({
    option,key:colors[i],x:174+284*i,y:149,angle:0,w:89,h:78,vx:0,vy:0,spin:0
  }));
  buildTargetLabels();updateScores();
  $('roundNumber').textContent=duelNumber?'Шешуші айналым · '+duelNumber:'Тапсырма '+(round+1)+' / 10';
  $('progress').style.width=(duelNumber?100:(round+1)*10)+'%';
  $('question').textContent=questionData()[0];$('turnName').textContent=teams[order[turn]].name+' тобының кезегі';
  resetShot();
}
function resetShot(){
  phase='ready';pointer=null;grab=null;trail=[];outcome=null;elapsed=0;
  shot={...origin,key:'saka',w:85,h:75,angle:0,vx:0,vy:0,spin:0};
  $('advance').hidden=true;$('board').classList.remove('drag');$('coach').src='assets/ready.png';
  $('notice').textContent=attempt?'Екінші мүмкіндік. Сақаны тартып, қайта ат!':'Сақаны ұстап, артқа тарт та, көздеп босат!';
}
$('setup').addEventListener('submit',async e=>{
  e.preventDefault();if(phase!=='lobby')return;phase='loading';audio.unlock();
  try{await preload;}catch{phase='lobby';return;}
  teams=Array.from({length:teamCount},(_,i)=>({name:$('team'+i).value.trim()||defaults[i],score:0,bonus:0}));
  round=0;duelNumber=0;order=teams.map((_,i)=>i);
  showScreen('play');resizeWorld();setRound();audio.music();
  lastTime=0;cancelAnimationFrame(raf);raf=requestAnimationFrame(frame);
});
function resizeWorld(){
  if($('play').hidden)return;
  if(phase==='dragging')cancelGrab();
  const court=$('court').getBoundingClientRect(),scale=Math.min(court.width/W,court.height/H);
  const el=$('world');el.style.width=(W*scale)+'px';el.style.height=(H*scale)+'px';
  const dpr=Math.min(2.5,window.devicePixelRatio||1);
  const canvas=$('board');canvas.width=Math.max(1,Math.round(W*scale*dpr));canvas.height=Math.max(1,Math.round(H*scale*dpr));
  ctx.setTransform(canvas.width/W,0,0,canvas.height/H,0,0);
}
new ResizeObserver(resizeWorld).observe($('court'));
const point=e=>{const r=$('board').getBoundingClientRect();return {x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height};};
function cancelGrab(){if(phase==='dragging')resetShot();}
$('board').addEventListener('pointerdown',e=>{
  if(phase!=='ready'||e.button!==0)return;
  const p=point(e);if(Math.hypot(p.x-shot.x,p.y-shot.y)>50)return;
  e.preventDefault();pointer=e.pointerId;grab=p;phase='dragging';$('board').setPointerCapture(pointer);$('board').classList.add('drag');audio.unlock();audio.fx('grab');
});
function pull(e){
  const p=point(e),dx=p.x-grab.x,dy=p.y-grab.y, len=Math.hypot(dx,dy),k=Math.min(1,maxPull/(len||1));
  const prev=Math.hypot(shot.x-origin.x,shot.y-origin.y);
  shot.x=origin.x+dx*k;shot.y=origin.y+dy*k;shot.angle=dx*k*.002;
  if(prev<50&&len>=50)audio.fx('pull');
  $('notice').textContent='Ату күші · '+Math.round(Math.min(1,len/maxPull)*100)+'%';
}
$('board').addEventListener('pointermove',e=>{if(phase==='dragging'&&e.pointerId===pointer){e.preventDefault();pull(e);}});
$('board').addEventListener('pointerup',e=>{
  if(phase!=='dragging'||e.pointerId!==pointer)return;
  e.preventDefault();pull(e);
  const dx=origin.x-shot.x,dy=origin.y-shot.y;
  if(Math.hypot(dx,dy)<7){cancelGrab();return;}
  phase='flying';pointer=null;grab=null;$('board').classList.remove('drag');
  shot.vx=dx*11;shot.vy=dy*11;shot.spin=(dx>=0?1:-1)*3.5;
  $('notice').textContent='Сақа ұшып барады…';audio.fx('fly');
});
$('board').addEventListener('pointercancel',e=>{if(e.pointerId===pointer)cancelGrab();});
$('board').addEventListener('lostpointercapture',e=>{if(e.pointerId===pointer)cancelGrab();});
window.addEventListener('blur',cancelGrab);
document.addEventListener('visibilitychange',()=>{lastTime=0;if(document.hidden)cancelGrab();});

// Use the opaque silhouettes of the actual PNGs, including the saka's rotation.
// Small integration steps prevent the projectile from passing through a target.
function containsPixel(body,x,y,c,s){
  const dx=x-body.x,dy=y-body.y;
  const u=Math.floor(((dx*c+dy*s)/body.w+.5)*64),v=Math.floor(((-dx*s+dy*c)/body.h+.5)*56);
  return u>=0&&v>=0&&u<64&&v<56&&BONE_MASKS[body.key][v][u]==='1';
}
function overlaps(a,b){
  if(Math.hypot(a.x-b.x,a.y-b.y)>(Math.hypot(a.w,a.h)+Math.hypot(b.w,b.h))/2)return false;
  const c=Math.cos(a.angle),s=Math.sin(a.angle);
  for(let y=b.y-b.h/2+1;y<b.y+b.h/2;y+=2){
    for(let x=b.x-b.w/2+1;x<b.x+b.w/2;x+=2){
      if(containsPixel(b,x,y,1,0)&&containsPixel(a,x,y,c,s))return true;
    }
  }
  return false;
}
function burst(x,y,good){
  for(let i=0;i<(good?32:12);i++){const a=Math.random()*Math.PI*2,v=35+Math.random()*160;
    particles.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-65,t:0,life:.5+Math.random()*.6,r:3+Math.random()*5,color:good?['#fff8cd','#ffdd50','#ffe28b'][i%3]:'#d97e59',star:good});
  }
}
function nextLabel(){return turn<order.length-1?'Келесі топ':duelNumber||round===9?'Нәтиже':'Келесі айналым';}
function impact(target){
  const correct=target.option===questionData()[2];outcome={target,correct};phase='feedback';elapsed=0;
  target.vx=shot.vx*.24;target.vy=shot.vy*.24;target.spin=shot.spin*1.4;
  shot.vx*=.12;shot.vy*=.12;audio.fx('hit');audio.fx(correct?'good':'bad');
  if(correct){teams[order[turn]][duelNumber?'bonus':'score']++;updateScores();}
  target.label.classList.add(correct?'good':'bad');
  $('notice').textContent=correct?'Жарайсың! Дұрыс жауап!':'Келесі жолы дәл тигізесің!';
  $('coach').src='assets/'+(correct?'clap':'hello')+'.png';burst(target.x,target.y,correct);
  $('advance').textContent=nextLabel();$('advance').hidden=false;
}
function miss(){
  phase='miss';elapsed=0;
  $('notice').textContent=attempt?'Мүлт кетті! Екі мүмкіндік те аяқталды.':'Мүлт кетті! Қайта байқап көр!';
  $('advance').textContent=attempt?nextLabel():'Қайта ату';$('advance').hidden=false;audio.fx('bad');
}
function advance(){
  if(phase==='miss'&&attempt===0){attempt=1;resetShot();return;}
  if(phase!=='miss'&&phase!=='feedback')return;
  if(turn+1<order.length){turn++;beginTurn();return;}
  if(duelNumber||round===9){finish();return;}
  round++;setRound();
}
$('advance').onclick=advance;
function stepFlight(dt){
  const speed=Math.hypot(shot.vx,shot.vy),n=Math.max(1,Math.ceil(speed*dt/3));
  for(let i=0;i<n&&phase==='flying';i++){
    const h=dt/n,old=Math.hypot(shot.vx,shot.vy),next=Math.max(0,old-dragFriction*h);
    if(old<.01){miss();return;}
    const fraction=(old+next)/(2*old);
    shot.x+=shot.vx*h*fraction;shot.y+=shot.vy*h*fraction;shot.angle+=shot.spin*h;
    shot.vx*=next/old;shot.vy*=next/old;
    const hit=targets.find(t=>overlaps(shot,t));
    if(hit){impact(hit);return;}
    if(!next||shot.x< -60||shot.x>W+60||shot.y< -60||shot.y>H+60){miss();return;}
  }
  trail.push({x:shot.x,y:shot.y});if(trail.length>7)trail.shift();
}
function step(dt){
  if(phase==='flying')stepFlight(dt);
  if(phase==='feedback'){
    elapsed+=dt;const decay=Math.exp(-6*dt),t=outcome.target;
    for(const body of [shot,t]){body.x+=body.vx*dt;body.y+=body.vy*dt;body.angle+=body.spin*dt;body.vx*=decay;body.vy*=decay;body.spin*=decay;}
    positionLabel(t);
  }
  for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=140*dt;p.t+=dt;}
  particles=particles.filter(p=>p.t<p.life);
}
function ellipse(x,y,rx,ry,color,width=0){
  ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);
  if(width){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();}else{ctx.fillStyle=color;ctx.fill();}
}
function bone(body,glow){
  ellipse(body.x+3,body.y+body.h*.37,body.w*.49,body.h*.15,'#77512e42');
  ctx.save();ctx.translate(body.x,body.y);ctx.rotate(body.angle);
  if(glow){ctx.shadowColor=glow;ctx.shadowBlur=16;}
  ctx.drawImage(art[body.key],-body.w/2,-body.h/2,body.w,body.h);ctx.restore();
}
function guide(){
  const dx=origin.x-shot.x,dy=origin.y-shot.y,len=Math.hypot(dx,dy);if(len<4)return;
  const d=(len*11)**2/(2*dragFriction),qx=dx/len,qy=dy/len;
  ctx.save();ctx.beginPath();ctx.moveTo(shot.x,shot.y);ctx.lineTo(shot.x+qx*d,shot.y+qy*d);
  ctx.lineCap='round';ctx.strokeStyle='#3c514166';ctx.lineWidth=7;ctx.setLineDash([1,13]);ctx.stroke();ctx.strokeStyle='#fff7d0';ctx.lineWidth=4;ctx.stroke();ctx.restore();
  const x=shot.x+qx*d,y=shot.y+qy*d;ellipse(x,y,8,8,'#fff5cf',2);
}
function draw(){
  ctx.clearRect(0,0,W,H);
  // Ground rings indicate the shooting position and do not register hits.
  ctx.save();ctx.setLineDash([10,8]);ellipse(origin.x,origin.y+5,66,52,'#fff2b5c9',2);ctx.restore();
  ellipse(origin.x,origin.y+8,56,41,'#1766612d');
  if(phase==='dragging')guide();
  for(const t of targets){
    const glow=outcome?.target===t?(outcome.correct?'#ffeb48':'#ff594b'):null;
    bone(t,glow);
  }
  if(phase==='flying')trail.forEach((p,i)=>ellipse(p.x,p.y,4+i,3+i,'#fff2b360'));
  if(phase!=='miss')bone(shot,phase==='ready'?'#fff0a2':null);
  for(const p of particles){
    ctx.save();ctx.globalAlpha=1-p.t/p.life;ctx.fillStyle=p.color;
    if(p.star){ctx.font=(p.r*2.5)+'px sans-serif';ctx.fillText('✦',p.x,p.y);}else ellipse(p.x,p.y,p.r,p.r,p.color);
    ctx.restore();
  }
  if(phase==='ready'){
    ctx.save();ctx.font='bold 18px sans-serif';ctx.textAlign='center';ctx.fillStyle='#48391f';ctx.fillText('Ұстап, артқа тарт',origin.x,origin.y+77);ctx.restore();
  }
}
function frame(now){
  if($('play').hidden)return;
  const dt=lastTime?Math.min((now-lastTime)/1000,.045):0;lastTime=now;
  step(dt);draw();raf=requestAnimationFrame(frame);
}
function finish(){
  phase='result';cancelAnimationFrame(raf);audio.stop();audio.fx('win');showScreen('result');
  const best=Math.max(...order.map(i=>duelNumber?teams[i].bonus:teams[i].score));
  leaders=order.filter(i=>(duelNumber?teams[i].bonus:teams[i].score)===best);
  $('resultType').textContent=leaders.length>1?'Тең нәтиже':'Жеңімпаз топ';
  $('victor').textContent=leaders.map(i=>teams[i].name).join(' · ');
  $('resultScores').replaceChildren(...teams.map(t=>{
    const row=document.createElement('div');row.className='resultRow';const name=document.createElement('span'),score=document.createElement('strong');
    name.textContent=t.name;score.textContent=t.score+' / 10'+(t.bonus?'  + '+t.bonus+' қосымша':'');row.append(name,score);return row;
  }));
  $('duel').hidden=leaders.length<2;
  const palette=['#ffd364','#fff0a8','#2b9d90','#ed855e'];
  $('confetti').replaceChildren(...Array.from({length:46},(_,i)=>{
    const el=document.createElement('i');el.textContent=i%3?'◆':'✦';el.style.left=Math.random()*100+'%';
    el.style.setProperty('--c',palette[i%4]);el.style.setProperty('--s',3+Math.random()*4+'s');el.style.setProperty('--d',-Math.random()*7+'s');return el;
  }));
}
$('duel').onclick=()=>{
  if(phase!=='result'||leaders.length<2)return;
  duelNumber++;order=leaders.slice();showScreen('play');resizeWorld();setRound();audio.unlock();audio.music();lastTime=0;raf=requestAnimationFrame(frame);
};
$('restart').onclick=()=>{phase='lobby';audio.stop();$('confetti').replaceChildren();showScreen('lobby');};
