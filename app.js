(function(){
  var a=document.getElementById('audio'),b=document.getElementById('music');
  function label(){b.textContent=a.paused?'🎵 Bật nhạc':'⏸ Tắt nhạc'}
  try{var t=parseFloat(localStorage.getItem('mt')||0);if(t)a.currentTime=t}catch(e){}
  b.onclick=function(){if(a.paused){a.play().catch(function(){});localStorage.setItem('mp','1')}else{a.pause();localStorage.setItem('mp','0')}label()};
  a.addEventListener('play',label);a.addEventListener('pause',label);
  setInterval(function(){try{localStorage.setItem('mt',a.currentTime)}catch(e){}},1000);
  if(localStorage.getItem('mp')==='1')a.play().catch(function(){});
  label();
  var em=document.body.dataset.petals.split(',');
  setInterval(function(){
    var p=document.createElement('div');p.className='petal';p.textContent=em[Math.floor(Math.random()*em.length)];
    p.style.left=Math.random()*100+'vw';p.style.fontSize=(14+Math.random()*16)+'px';
    p.style.animationDuration=(7+Math.random()*7)+'s';document.body.appendChild(p);
    setTimeout(function(){p.remove()},15000)},600);
  var lb=document.getElementById('lb'),li=lb.querySelector('img');
  document.querySelectorAll('.hero,.gallery img').forEach(function(i){i.onclick=function(){li.src=i.src;lb.style.display='flex'}});
  lb.onclick=function(){lb.style.display='none'};
})();
