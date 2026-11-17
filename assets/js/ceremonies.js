/* Chayamughi ceremonies page: sticky chapter bar */
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const links=[...document.querySelectorAll('#cbar a')],secs=links.map(a=>document.querySelector(a.getAttribute('href')));
  const prog=document.getElementById('cprog');
  function spy(){
    const y=innerHeight*.35;let cur=-1;
    secs.forEach((s,i)=>{if(s.getBoundingClientRect().top<y)cur=i;});
    links.forEach((a,i)=>a.classList.toggle('on',i===cur));
    if(cur>=0){const a=links[cur],ul=a.parentNode.parentNode;
      if(ul.scrollWidth>ul.clientWidth)ul.scrollTo({left:a.parentNode.offsetLeft-20,behavior:reduce?'auto':'smooth'});}
    const first=secs[0].offsetTop,last=secs[secs.length-1],end=last.offsetTop+last.offsetHeight-innerHeight;
    const p=Math.min(1,Math.max(0,(scrollY-first+innerHeight*.35)/(end-first+innerHeight*.35)));prog.style.width=(p*100)+'%';
  }
  addEventListener('scroll',spy,{passive:true});addEventListener('resize',spy);spy();
})();
