/* Chayamughi: shared behaviour for every page */
function logoFallback(img){
  var alts=(img.dataset.alt||'').split('|').filter(Boolean);
  if(alts.length){img.dataset.alt=alts.slice(1).join('|');img.src=alts[0];}
  else img.parentNode.classList.add('noimg');
}
document.addEventListener('DOMContentLoaded',function(){
  var hdr=document.getElementById('siteHeader');
  if(hdr)addEventListener('scroll',function(){hdr.classList.toggle('scrolled',scrollY>10);},{passive:true});
  var mb=document.getElementById('menuBtn'),mn=document.getElementById('mobileNav');
  if(mb&&mn){
    mb.onclick=function(){var o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o);};
    mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open');mb.setAttribute('aria-expanded','false');});});
  }
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    els.forEach(function(el){io.observe(el);});
  } else els.forEach(function(el){el.classList.add('in');});
});
