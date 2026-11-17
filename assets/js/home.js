/* Chayamughi home page */
const IMG='https://chayamughi.in/assets1/images/gallery/';

/* ---- Ceremonies (tiles link to each chapter) ---- */
const CER=[
 {id:'wedding',cls:'t-wedding',t:'Wedding',ml:'Joy, documented.',img:'wedding.jpg',fb:'#4A1A1C',form:'Wedding',
  s:'The thali, the kasavu and the glow of the nilavilakku, captured in photographs and cinematic film.',
  d:'Complete wedding documentation covering every important moment of the celebrations, from the bride’s arrival to the last blessing, complemented by a cinematic highlight film with its own theme music.',
  i:['Complete photo and film documentation','Cinematic highlight film','Custom wedding theme music','Traditional and candid coverage','Premium printed photobook']},
 {id:'engagement',cls:'t-engagement',t:'Engagement',ml:'“Yes”ever.',img:'engagement.jpg',fb:'#5B1A1E',form:'Engagement',
  s:'The ring exchange, the families’ blessings and your first portraits together.',
  d:'The day two families formally come together. We cover the ceremony and the gathering, and set aside time for your first portraits as a couple.',
  i:['Ring exchange and ceremony','Family and elders’ blessings','Couple portraits','Highlight film']},
 {id:'pre',cls:'t-pre',t:'Pre / Post wedding',ml:'Our kind of perfect',img:'thara-saranug-2.jpg',fb:'#3A2A22',form:'Pre / Post wedding',
  s:'Stolen moments before and after the big day, just the two of you.',
  d:'Relaxed, unhurried shoots before or after the wedding, when there’s time to simply be together. We suggest locations and attire colours, then capture the stolen moments that feel most like you.',
  i:['Pre-wedding couple shoot','Post-wedding couple shoot','Location and attire guidance','Short couple film']},
 {id:'choroonu',cls:'t-post',t:'Choroonu',ml:'First taste',img:'aadhi-4.jpg',fb:'#2F3E46',form:'Choroonu',
  s:'Your baby’s first taste of rice, with the whole family around.',
  d:'An intimate but significant milestone. We capture the first feeding, the blessings and every little reaction, quietly and without disturbing the ritual.',
  i:['First rice-feeding ritual','Candid baby moments','Family and elders’ blessings','Family portraits']},
 {id:'pirannal',cls:'t-pirannal',t:'Pirannal',ml:'Milestone moments',img:'aadhi-5.jpg',fb:'#8A5A12',form:'Pirannal',
  s:'A birthday by the star, with the sadya and the little one at the centre.',
  d:'Children don’t pose on cue, so we take our time. We stay through the rituals, the sadya and the play, waiting for the candid moments that make the day.',
  i:['Rituals and blessings','Candid children’s photography','Sadya and family gathering','Family portraits']},
 {id:'upanayanam',cls:'t-upanayanam',t:'Upanayanam',ml:'Becoming',img:'chayamughi-blog-9.jpg',fb:'#3A1214',form:'Upanayanam',
  s:'The sacred thread ceremony, documented ritual by ritual.',
  d:'A ceremony rich in meaning and detail. Our team understands the sequence of rituals, so the homam, the priest’s guidance and every blessing are recorded in full.',
  i:['Complete ritual documentation','Homam and sacred thread rites','Elders and family portraits','Ceremony film']}
];
const CER_PAGE={pre:'pre-post-wedding'};
const bento=document.getElementById('bento');
CER.forEach((c,n)=>{
  const a=document.createElement('a');
  a.className='tile '+c.cls;a.style.setProperty('--fallback',c.fb);a.href='ceremonies.html#'+(CER_PAGE[c.id]||c.id);
  a.innerHTML=`<img src="${IMG+c.img}" alt="" loading="lazy" onerror="this.remove()">
  <span class="num">${String(n+1).padStart(2,'0')}</span>
  <span class="body"><span class="ml">${c.ml}</span><h3>${c.t}</h3><p>${c.s}</p><span class="more">Read this chapter</span></span>`;
  bento.appendChild(a);
});

/* ---- Why choose us: viewfinder ---- */
(function(){
  const R=[
   {t:'Refined',img:'8.jpg',fb:'#5B1A1E',e:['1/250','f/2.8','ISO 400'],ic:'<path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="4"/>',
    d:'Quiet presence, flawless execution.'},
   {t:'Authentic',img:'swathy-vaishak.jpg',fb:'#4A1A1C',e:['1/125','f/1.8','ISO 800'],ic:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    d:'Capturing the true rhythm of your family.'},
   {t:'Seasoned',img:'varadha-yadu-5.jpg',fb:'#3A2A22',e:['1/500','f/4','ISO 200'],ic:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    d:'Knowing exactly when the magic will happen.'},
   {t:'Meticulous',img:'aadhi-5.jpg',fb:'#2F3E46',e:['1/200','f/2','ISO 640'],ic:'<path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18M9 3l3 18 3-18"/>',
    d:'Catching the poetry in the smallest details.'}
  ];
  const CYCLE=6000,list=document.getElementById('reasons'),screen=document.getElementById('vfScreen'),vf=document.getElementById('vf'),sec=document.getElementById('why');
  sec.style.setProperty('--cycle',CYCLE+'ms');
  R.forEach((r,i)=>{
    const sh=document.createElement('div');sh.className='vf-shot';sh.style.setProperty('--fb',r.fb);
    sh.innerHTML=`<img src="${IMG+r.img}" alt="" loading="lazy" onerror="this.remove()">`;screen.appendChild(sh);
    const li=document.createElement('li');li.className='reason';
    li.innerHTML=`<button aria-expanded="false"><span class="rn">0${i+1}</span><span class="rt">${r.t}</span><span class="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${r.ic}</svg></span></button><div class="rd"><div><p>${r.d}</p></div></div><div class="bar"><i></i></div>`;
    li.querySelector('button').onclick=()=>{show(i);hold();};
    list.appendChild(li);
  });
  let cur=-1,t=null;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(i){
    cur=i;
    [...screen.children].forEach((s,j)=>s.classList.toggle('on',j===i));
    [...list.children].forEach((l,j)=>{l.classList.toggle('active',j===i);l.querySelector('button').setAttribute('aria-expanded',j===i);
      const bar=l.querySelector('.bar i');bar.style.animation='none';bar.offsetWidth;bar.style.animation='';});
    document.getElementById('vfCount').textContent=`0${i+1} / 0${R.length}`;
    document.getElementById('vfExp').innerHTML=R[i].e.map(x=>`<b>${x}</b>`).join('');
    vf.classList.remove('snap');void vf.offsetWidth;vf.classList.add('snap');
  }
  function restart(){clearInterval(t);if(!reduce)t=setInterval(()=>show((cur+1)%R.length),CYCLE);}
  /* Auto-play keeps running on hover; it stops only when a reason is clicked,
     and resumes once the visitor moves away from the section or scrolls past it */
  function hold(){clearInterval(t);sec.classList.add('held');}
  function resume(){if(!sec.classList.contains('held'))return;sec.classList.remove('held');show((cur+1)%R.length);restart();}
  new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)resume();}),{threshold:0}).observe(sec);
  sec.addEventListener('mouseleave',resume);
  show(0);restart();
})();



/* ---- About: a life in frames, from first birthday to wedding ---- */
(function(){
  const L=[
   {k:'Choroonu',t:'First taste',img:'aadhi-4.jpg',fb:'#2F3E46',r:-4,x:'-6px'},
   {k:'Pirannal',t:'Milestone moments',img:'aadhi-5.jpg',fb:'#8A5A12',r:3,x:'8px'},
   {k:'Upanayanam',t:'Becoming',img:'chayamughi-blog-9.jpg',fb:'#5A2A10',r:-2,x:'-10px'},
   {k:'Engagement',t:'“Yes”ever.',img:'engagement.jpg',fb:'#5B1A1E',r:5,x:'6px'},
   {k:'Pre / Post wedding',t:'Stolen moments',img:'thara-saranug-2.jpg',fb:'#3A2A22',r:-3,x:'-4px'},
   {k:'Wedding',t:'Joy, documented.',img:'wedding.jpg',fb:'#4A1A1C',r:2,x:'10px'}
  ];
  const life=document.getElementById('life');if(!life)return;
  const stage=document.getElementById('lifeStage'),sway=document.getElementById('lifeSway'),line=document.getElementById('lifeLine');
  const prints=L.map((c,i)=>{const p=document.createElement('figure');p.className='print';p.style.cssText=`--r:${c.r}deg;--x:${c.x};--i:${i};--fb:${c.fb};z-index:${i+1}`;
    p.innerHTML=`<div class="ph"><img src="${IMG+c.img}" alt="${c.k} photographed by Chayamughi" loading="lazy" onerror="this.remove()"></div><figcaption class="cap"><b>${c.t}</b><small>${c.k}</small></figcaption>`;
    sway.appendChild(p);
    const li=document.createElement('li');li.innerHTML=`<button aria-label="Chapter ${i+1}: ${c.k}"><span class="nd"></span><span class="lb">${c.k}</span></button>`;
    li.querySelector('button').onclick=()=>{go(i);schedule();};line.appendChild(li);return p;});
  const nodes=[...line.querySelectorAll('li')];
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cur=-1,timer=null,visible=false;
  function go(i){
    stage.classList.remove('fan');cur=i;
    prints.forEach((p,j)=>{p.classList.remove('now','past','far');
      if(j<i){p.classList.add('past');if(i-j>3)p.classList.add('far');}
      else if(j===i){void p.offsetWidth;p.classList.add('now');}});
    nodes.forEach((n,j)=>{n.classList.toggle('done',j<i);n.classList.toggle('cur',j===i);});
    document.getElementById('lifeFill').style.width=`calc(${i/(L.length-1)} * (100% - 100%/6))`;
    document.getElementById('lifeNum').textContent='0'+(i+1);
    life.classList.remove('snap');void life.offsetWidth;life.classList.add('snap');
  }
  function fan(){stage.classList.add('fan');nodes.forEach(n=>{n.classList.add('done');n.classList.remove('cur');});}
  function step(){
    if(!visible)return;
    if(stage.classList.contains('fan')){go(0);}
    else if(cur<L.length-1){go(cur+1);}
    else{fan();clearTimeout(timer);timer=setTimeout(step,5200);return;}
    schedule();
  }
  function schedule(){clearTimeout(timer);if(!reduce)timer=setTimeout(step,cur===L.length-1?4200:3600);}
  new IntersectionObserver(es=>es.forEach(e=>{visible=e.isIntersecting;
    if(visible){if(cur<0)go(0);schedule();}else clearTimeout(timer);}),{threshold:.3}).observe(life);
  if(reduce)go(0);
})();


/* ---- Hero slideshow ---- */
const dots=document.getElementById('dots');let si=0,timer;
document.querySelectorAll('.slide').forEach((s,i)=>{
  const d=document.createElement('button');d.setAttribute('aria-label','Slide '+(i+1));d.onclick=()=>go(i,true);dots.appendChild(d);
  s.querySelector('img').addEventListener('error',()=>{s.remove();d.remove();});
});
function go(i,user){const live=[...document.querySelectorAll('.slide')];if(!live.length)return;
  si=(i+live.length)%live.length;live.forEach((s,j)=>s.classList.toggle('active',j===si));
  [...dots.children].forEach((d,j)=>d.setAttribute('aria-current',j===si));
  if(user){clearInterval(timer);start();}}
function start(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;timer=setInterval(()=>go(si+1),6000);}
go(0);start();

/* ---- Films ---- */
const FILMS=[
 {n:'Vishak & Hridya',img:'vishak-hridya.jpg',yt:'nuaX3M_09gc'},
 {n:'Swathy & Vaishak',img:'swathy-vaishak.jpg',yt:'O55t7G2hN78'},
 {n:'Arunika & Ganesh',img:'arunika-ganesh.jpg',yt:'UGqI545hFjM'},
 {n:'Anjali & Manoj',img:'anjali-manoj.jpg',yt:'oLMEvQujnI4'},
 {n:'Sukanya & Sayanan',img:'sukanya-sayanan.jpg',yt:'g53ngRZ1o4E'},
 {n:'Vishnu & Namitha',img:'vishnu-namitha.png',yt:'2dCRWMYGT7Y'},
 {n:'Anjana & Sanal',img:'anjana-sanal.png',yt:'lYuvUbkXq3c'}
];
let fi=0;const player=document.getElementById('player'),reel=document.getElementById('reel');
const pad=n=>String(n).padStart(2,'0');
document.getElementById('fTotal').textContent=pad(FILMS.length);
[0,1].forEach(copy=>FILMS.forEach((f,i)=>{const b=document.createElement('button');b.className='reel-item';b.dataset.i=i;
  if(copy){b.setAttribute('aria-hidden','true');b.tabIndex=-1;}
  b.innerHTML=`<span class="th"><img src="${IMG+f.img}" alt="" loading="lazy"></span><b>${f.n}</b>`;
  b.onclick=()=>{selectFilm(i);holdReel(6000);};reel.appendChild(b);}));
function selectFilm(i){fi=(i+FILMS.length)%FILMS.length;const f=FILMS[fi];
  const fr=player.querySelector('iframe');if(fr)fr.remove();
  document.getElementById('playerImg').src=IMG+f.img;
  document.getElementById('playerTitle').textContent=f.n;
  document.getElementById('fNow').textContent=pad(fi+1);
  document.getElementById('playBtn').style.display='';player.querySelector('.cap').style.display='';
  [...reel.children].forEach(b=>b.setAttribute('aria-current',+b.dataset.i===fi));}
/* Auto-scrolling filmstrip: glides continuously, pauses on hover, touch or keyboard focus */
let reelHold=0,reelHover=false;
function holdReel(ms){reelHold=performance.now()+ms;}
reel.addEventListener('mouseenter',()=>reelHover=true);
reel.addEventListener('mouseleave',()=>reelHover=false);
reel.addEventListener('focusin',()=>reelHover=true);
reel.addEventListener('focusout',()=>reelHover=false);
reel.addEventListener('touchstart',()=>holdReel(4000),{passive:true});
reel.addEventListener('wheel',()=>holdReel(3000),{passive:true});
let pos=0;
function glide(){
  const half=reel.scrollWidth/2;
  if(!reelHover&&performance.now()>reelHold&&!document.hidden){
    pos=reel.scrollLeft+0.6; if(pos>=half)pos-=half; reel.scrollLeft=pos;
  }
  requestAnimationFrame(glide);
}
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)requestAnimationFrame(glide);
function showInReel(){const it=[...reel.children].find(b=>+b.dataset.i===fi);holdReel(5000);
  reel.scrollTo({left:it.offsetLeft-reel.clientWidth/2+it.clientWidth/2,behavior:'smooth'});}
document.getElementById('fPrev').onclick=()=>{selectFilm(fi-1);showInReel();};
document.getElementById('fNext').onclick=()=>{selectFilm(fi+1);showInReel();};
document.getElementById('playBtn').onclick=()=>{
  const f=FILMS[fi],fr=document.createElement('iframe');
  fr.src=`https://www.youtube-nocookie.com/embed/${f.yt}?autoplay=1&rel=0`;
  fr.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';fr.allowFullscreen=true;fr.title=f.n+' wedding film';
  player.appendChild(fr);document.getElementById('playBtn').style.display='none';player.querySelector('.cap').style.display='none';};
selectFilm(0);

/* ---- Testimonials (shortened from the current site; paste originals if preferred) ---- */
const V=[
 {n:'Sajeev',bg:'wedding.jpg',img:'test-1.jpg',q:'A wonderful team to work with. Friendly, always bringing something new, and full of suggestions that put us at ease.'},
 {n:'Pathmanabhan',bg:'thara-saranug-2.jpg',img:'testimonial.jpg',q:'They caught every candid moment, welcomed our ideas and even helped us choose outdoor locations and the colours we wore.'},
 {n:'Arya',bg:'aadhi-4.jpg',img:'test-3.jpg',q:'They spent almost a whole day with our four-year-old until she was comfortable, and captured the sweetest candid moments.'},
 {n:'Saheer',bg:'binu-manaswini-2.jpg',img:'test4.png',q:'Beautiful pictures of our new home. I’d recommend them for any auspicious function, from a wedding to a housewarming.'},
 {n:'Nikhil Krishna C',bg:'varadha-yadu-5.jpg',img:'aadhi-5.jpg',q:'They exceeded our expectations: creative, professional, and flexible enough to adapt to exactly what we wanted.'}
];
let vi=0;const vq=document.getElementById('vQuote'),vimg=document.getElementById('vImg');
const vprint=document.querySelector('.v-print');
function showV(i){vi=(i+V.length)%V.length;vq.classList.add('fade');vprint.classList.add('fade');
  setTimeout(()=>{vq.textContent=V[vi].q;document.getElementById('vName').textContent=V[vi].n;vimg.src=IMG+V[vi].img;vimg.alt=V[vi].n;document.getElementById('vCap').textContent=V[vi].n;document.getElementById('vBg').style.backgroundImage=`url('${IMG+V[vi].img}')`;
  document.getElementById('vCount').textContent=(vi+1)+' of '+V.length;vq.classList.remove('fade');vprint.classList.remove('fade');},250);}
const voicesSec=document.getElementById('testimonials'),vBar=document.getElementById('vBar');let vTimer=null,vPaused=false;
const V_CYCLE=6000,vReduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function vRestart(){clearInterval(vTimer);vBar.style.animation='none';vBar.offsetWidth;vBar.style.animation='';
  if(!vReduce)vTimer=setInterval(()=>{if(!vPaused){showV(vi+1);vBar.style.animation='none';vBar.offsetWidth;vBar.style.animation='';}},V_CYCLE);}
voicesSec.style.setProperty('--vcycle',V_CYCLE+'ms');
voicesSec.addEventListener('mouseenter',()=>{vPaused=true;voicesSec.classList.add('paused');});
voicesSec.addEventListener('mouseleave',()=>{vPaused=false;voicesSec.classList.remove('paused');vRestart();});
voicesSec.addEventListener('focusin',()=>{vPaused=true;voicesSec.classList.add('paused');});
voicesSec.addEventListener('focusout',()=>{vPaused=false;voicesSec.classList.remove('paused');vRestart();});
document.getElementById('vPrev').onclick=()=>{showV(vi-1);vRestart();};
document.getElementById('vNext').onclick=()=>{showV(vi+1);vRestart();};
showV(0);vRestart();

/* ---- FAQ ---- */
const FAQ=[
 ['How do we contact Team Chayamughi?','Reach out by phone on +91 97466 61515 or by email at chayamughi.in@gmail.com.'],
 ['Where are you based? Are there any location restrictions?','We’re based in Malappuram district, Kerala. There are no location restrictions: our team travels to cover events anywhere in South India, and our clients are in Chennai, Coimbatore, Bengaluru, Mysuru, Mangaluru, Kochi, Thiruvananthapuram and beyond.'],
 ['Will you share RAW files of the photographs and videos?','No, we share only the processed files: photographs in JPEG format and videos in full-HD MP4.'],
 ['Do you publish all your work online?','We publish selected work on our site for promotion, and only with the client’s consent.'],
 ['What packages are available?','We offer various packages, based on how many days of coverage you need, whether you need still photography, videography or both, additional documentary photography, how many photobooks you’d like, and more. Contact us for rates.'],
 ['How many photographs will we get?','For a day’s event, we provide about 500–1,000 print-quality photographs once the selection is made.'],
 ['How do we reserve an event date?','Reach out to Team Chayamughi with your event date. We’ll confirm availability and share the booking details for your chosen package. Call +91 97466 61515 or email chayamughi.in@gmail.com.'],
 ['How long will it take to receive our processed photographs?','You can expect digital copies of the photographs within a week or two. Once you choose the photographs for your album, you’ll receive the premium photobook and the videos within one and a half to two months.'],
 ['How early do clients need to book?','The earlier the better. We limit how many projects we take on for the same date, so we encourage you to reach out as early as possible. We often get bookings six to eight months before the event.'],
 ['What is the length of the final video?','For two days of coverage, the final video runs between one and one and a half hours.'],
 ['What is your team size?','The Chayamughi team is about ten people, across photography and videography. A typical event has 3–4 of us, depending on the scale of the wedding.']
];
const fl=document.getElementById('faqList');
fl.innerHTML=FAQ.map((f,i)=>`<div class="faq-item${i===0?' open':''}"><button class="faq-q" aria-expanded="${i===0}" aria-controls="fa${i}"><span class="n">${pad(i+1)}</span><span class="q">${f[0]}</span><span class="ic" aria-hidden="true"></span></button><div class="faq-a" id="fa${i}"><div><p>${f[1]}</p></div></div></div>`).join('');
fl.querySelectorAll('.faq-q').forEach(b=>b.onclick=()=>{
  const item=b.parentNode,open=!item.classList.contains('open');
  fl.querySelectorAll('.faq-item').forEach(x=>{x.classList.remove('open');x.firstChild.setAttribute('aria-expanded','false');});
  if(open){item.classList.add('open');b.setAttribute('aria-expanded','true');}
});

/* ---- Enquiry form (invitation card) ---- */
function getCer(){const r=document.querySelector('input[name="cer"]:checked');return r?r.value:'';}
function setCer(v){const r=document.querySelector(`input[name="cer"][value="${v}"]`);if(r){r.checked=true;updateStd();}}
function updateStd(){
  const c=getCer();document.getElementById('stdCer').textContent=c;
  const d=document.getElementById('fDate').value;
  if(d){const dt=new Date(d+'T00:00');
    document.getElementById('stdDay').textContent=dt.getDate();
    document.getElementById('stdMon').textContent=dt.toLocaleDateString('en-IN',{month:'short',year:'numeric'});
    document.getElementById('stdFull').textContent=dt.toLocaleDateString('en-IN',{weekday:'long'});}
  else{document.getElementById('stdDay').textContent='—';document.getElementById('stdMon').textContent='Your date';document.getElementById('stdFull').textContent='Pick a date to save it';}
}
document.querySelectorAll('input[name="cer"]').forEach(r=>r.addEventListener('change',updateStd));
document.getElementById('fDate').addEventListener('change',updateStd);updateStd();
try{const q=new URLSearchParams(location.search).get('cer');if(q)setCer(q);}catch(e){}
let via='wa';document.querySelectorAll('[data-via]').forEach(b=>b.addEventListener('click',()=>via=b.dataset.via));
document.getElementById('enquiry').addEventListener('submit',e=>{e.preventDefault();
  const v=id=>document.getElementById(id).value.trim();
  if(!v('fName')||!v('fPhone')){document.getElementById('formError').style.display='block';return;}
  document.getElementById('formError').style.display='none';
  const msg=`Hello Chayamughi,\n\nName: ${v('fName')}\nPhone: ${v('fPhone')}\nCeremony: ${getCer()}\nDate: ${v('fDate')||'Not fixed yet'}\nVenue: ${v('fVenue')||'-'}\nDetails: ${v('fMsg')||'-'}`;
  if(via==='wa')window.open('https://wa.me/919746661515?text='+encodeURIComponent(msg),'_blank');
  else location.href='mailto:chayamughi.in@gmail.com?subject='+encodeURIComponent('Enquiry: '+getCer())+'&body='+encodeURIComponent(msg);
});


/* ---- Arriving with a link like index.html#enquiry: the FAQ and tiles above are built by script,
   so jump again once they exist, landing on the right section ---- */
(function(){
  if(!location.hash||location.hash.length<2)return;
  let t;try{t=document.querySelector(location.hash);}catch(e){return;}
  if(!t)return;
  requestAnimationFrame(()=>requestAnimationFrame(()=>t.scrollIntoView({behavior:'instant',block:'start'})));
})();
