
const loader=document.getElementById('loader');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),450));
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const menuBtn=document.getElementById('menuBtn'),menu=document.getElementById('mobileMenu');
menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
