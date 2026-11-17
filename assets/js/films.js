/* Chayamughi films page: film player */

const FILMS=[["Vishak & Hridya", "vishak-hridya.jpg", "nuaX3M_09gc"], ["Swathy & Vaishak", "swathy-vaishak.jpg", "O55t7G2hN78"], ["Arunika & Ganesh", "arunika-ganesh.jpg", "UGqI545hFjM"], ["Anjali & Manoj", "anjali-manoj.jpg", "oLMEvQujnI4"], ["Sukanya & Sayanan", "sukanya-sayanan.jpg", "g53ngRZ1o4E"], ["Vishnu & Namitha", "vishnu-namitha.png", "2dCRWMYGT7Y"], ["Anjana & Sanal", "anjana-sanal.png", "lYuvUbkXq3c"]];
(function(){
  const pm=document.getElementById('pm'),scr=document.getElementById('pmScreen');let i=0,last=null;
  function load(n){i=(n+FILMS.length)%FILMS.length;const f=FILMS[i];
    scr.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${f[2]}?autoplay=1&rel=0" title="${f[0]} wedding film" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    document.getElementById('pmTitle').textContent=f[0];document.getElementById('pmSub').textContent='Wedding film · '+(i+1)+' of '+FILMS.length;}
  function open(n){last=document.activeElement;load(n);pm.classList.add('open');pm.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.getElementById('pmX').focus();}
  function close(){pm.classList.remove('open');pm.setAttribute('aria-hidden','true');scr.innerHTML='';document.body.style.overflow='';if(last)last.focus();}
  document.querySelectorAll('[data-f]').forEach(b=>b.addEventListener('click',()=>open(+b.dataset.f)));
  document.getElementById('pmX').onclick=close;
  document.getElementById('pmPrev').onclick=()=>load(i-1);
  document.getElementById('pmNext').onclick=()=>load(i+1);
  pm.addEventListener('click',e=>{if(e.target===pm)close();});
  document.addEventListener('keydown',e=>{if(!pm.classList.contains('open'))return;if(e.key==='Escape')close();});
})();
