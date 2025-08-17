// Fade-in on scroll
const sections=document.querySelectorAll('.section');
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:0.3});
sections.forEach(sec=>observer.observe(sec));

// Before-After Slider Effect
const slider=document.querySelector('.slider');
const after=document.querySelector('.after');
slider.addEventListener('input',()=>{after.style.clipPath=`inset(0 0 0 ${slider.value}%)`;});

// Dark Mode Toggle
document.querySelector('.theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('dark');});
