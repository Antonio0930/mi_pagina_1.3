const heart = document.getElementById('heart');
const envelope = document.getElementById('envelope');
const paper = document.querySelector('.paper');
const flap = document.querySelector('.flap');
const scrollText = document.getElementById('scrollText');

let opened = false;

// Deshabilitar scroll
document.body.style.overflow = 'hidden';

window.addEventListener('click', () => {
  if(opened) return; // evita repetir
  opened = true;

  // 1️⃣ Corazón late y luego cae
  heart.classList.remove('beat');
  heart.classList.add('drop');

  // 2️⃣ Después de 1s abrir sobre
  setTimeout(() => {
    flap.style.transition = 'transform 1s ease';
    flap.style.transform = 'rotateX(180deg)';

    // Hacer que flap quede atrás del papel
    flap.style.zIndex = '1';
    paper.style.zIndex = '2';

    // 3️⃣ Animar papel subiendo
    paper.style.transition = 'transform 1s ease';
    paper.style.transform = 'translateY(-90%)';
  }, 1000);

  // 4️⃣ Fade-out y redirección
  setTimeout(() => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'carta.html';
    }, 500);
  }, 4000); // suficiente para ver animaciones
});
