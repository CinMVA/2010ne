(function(){
  function swap(el){var s=el.getAttribute('src')||'';if(s.indexOf('assets/')===0){el.setAttribute('src',s.replace('assets/','assest/'))}}
  document.querySelectorAll('img,audio').forEach(function(el){
    el.addEventListener('error',function(){swap(el)});
    if(el.tagName==='IMG'&&el.complete&&el.naturalWidth===0)swap(el);
  });
})();
(function(){
  var a=document.getElementById('audio'),b=document.getElementById('music');
  function label(){b.textContent=a.paused?'🎵 Bật nhạc':'⏸ Tắt nhạc'}
  try{var t=parseFloat(localStorage.getItem('mt')||0);if(t)a.currentTime=t}catch(e){}
  b.onclick=function(){if(a.paused){a.play().catch(function(){});localStorage.setItem('mp','1')}else{a.pause();localStorage.setItem('mp','0')}label()};
  a.addEventListener('play',label);a.addEventListener('pause',label);
  setInterval(function(){try{localStorage.setItem('mt',a.currentTime)}catch(e){}},1000);
  function showOv(){
    if(document.getElementById('ov'))return;
    var ov=document.createElement('div');ov.id='ov';
    ov.innerHTML='<div class="e">💌</div><div class="t">Có thiệp gửi đến bạn</div><div class="s">Chạm vào màn hình để mở</div>';
    document.body.appendChild(ov);
    ov.onclick=function(){a.play().catch(function(){});try{localStorage.setItem('mp','1')}catch(e){}ov.remove()};
  }
  a.play().then(function(){try{localStorage.setItem('mp','1')}catch(e){}}).catch(showOv);
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
