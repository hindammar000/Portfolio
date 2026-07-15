// Premium interactions
window.addEventListener('scroll',()=>{
 const nav=document.querySelector('.navbar');
 if(!nav) return;
 nav.style.background = window.scrollY>40
   ? 'rgba(17,16,34,.82)'
   : 'rgba(17,16,34,.60)';
});
