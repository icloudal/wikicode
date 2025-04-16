// Cambiar el fondo del header al hacer scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.md-header');
    if (window.scrollY > 50) {
        header.classList.add('md-header-scrolled');
    } else {
        header.classList.remove('md-header-scrolled');
    }
});



document.addEventListener('mousemove', function(e) {
    const bg = document.querySelector('.parallax-bg');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `translate(${x}px, ${y}px)`;
});





document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("bg-video");
  if (video) {
    video.playbackRate = 0.9;
  }
});


