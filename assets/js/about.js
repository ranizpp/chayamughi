/* Chayamughi about page */
/* ---- Count-up numbers ---- */
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,fmt=n=>n.toLocaleString('en-IN');
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
    const el=e.target,end=+el.dataset.count,suffix=end===20?'<sup>+</sup>':'';
    if(reduce){el.innerHTML=fmt(end)+suffix;return;}
    const t0=performance.now(),d=1600;
    (function tick(t){const p=Math.min(1,(t-t0)/d),v=Math.round(end*(1-Math.pow(1-p,3)));el.innerHTML=fmt(v)+(p===1?suffix:'');if(p<1)requestAnimationFrame(tick);})(t0);
  }),{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(n=>io.observe(n));
})();

/* ---- Vanitha feature: stacked pages + lightbox ---- */
(function(){
  const press=document.getElementById('press');if(!press)return;
  const thumbs=[...press.querySelectorAll('.pages img')];
  const mag=press.querySelector('.mag');
  mag.querySelector('.m0').src=thumbs[0].src;mag.querySelector('.m2').src=thumbs[1].src;mag.querySelector('.m1').src=thumbs[3].src;
  const lb=document.getElementById('lb'),img=document.getElementById('lbImg'),cap=document.getElementById('lbCap');
  let i=0,last=null;
  function show(n){i=(n+thumbs.length)%thumbs.length;img.src=thumbs[i].src;img.alt=thumbs[i].alt;
    cap.textContent='Vanitha · '+thumbs[i].nextElementSibling.textContent+' · '+(i+1)+' of '+thumbs.length;}
  function open(n){last=document.activeElement;show(n);lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.getElementById('lbX').focus();}
  function close(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow='';if(last)last.focus();}
  press.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>open(+b.dataset.page)));
  document.getElementById('lbX').onclick=close;
  document.getElementById('lbPrev').onclick=()=>show(i-1);
  document.getElementById('lbNext').onclick=()=>show(i+1);
  lb.addEventListener('click',e=>{if(e.target===lb)close();});
  document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1);});
  let sx=null;lb.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
  lb.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)show(i+(dx<0?1:-1));sx=null;});
})();

