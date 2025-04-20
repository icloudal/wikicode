
document.addEventListener('mousemove', function(e) {
    const bg = document.querySelector('.parallax-bg');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `translate(${x}px, ${y}px)`;
});




