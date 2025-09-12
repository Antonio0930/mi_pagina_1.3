// CORAZÓN PALPITANDO Y CAÍDA
const heart = document.getElementById('heart');
window.addEventListener('scroll', ()=>{
  if(!heart.classList.contains('drop')){
    heart.classList.remove('beat');
    void heart.offsetWidth; // fuerza reflow
    heart.classList.add('drop');
  }

  // REDIRECCIÓN AL FINAL DEL SCROLL
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.scrollHeight;
  if(scrollTop + windowHeight >= docHeight - 5){
    document.body.classList.add('fade-out');
    setTimeout(()=>{ window.location.href="carta.html"; }, 500);
  }
});

heart.addEventListener('animationend', e=>{
  if(e.animationName==='drop-heart') heart.style.display='none';
});

// Desvanecer sobre
envelope.style.opacity = 0;
scrollText.style.opacity = 0;
document.body.classList.add("fade-out");

// Mostrar carta poco a poco después del fade-out
setTimeout(() => {
  const cartaContainer = document.getElementById('cartaContainer');
  cartaContainer.classList.add('visible'); // agrega la clase para que aparezca
}, 1000);
