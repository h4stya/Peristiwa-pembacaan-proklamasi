// Efek ketik otomatis judul
const judul = document.getElementById("judul");
judul.textContent = "Peristiwa Pembacaan Proklamasi";

// Scroll animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('show');
    }
  });
});
