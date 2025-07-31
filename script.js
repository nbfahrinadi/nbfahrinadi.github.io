window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar'); // cocokkan kapitalisasi
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.querySelectorAll('*').forEach(el => el.setAttribute('spellcheck', 'false'));

const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeModalBtn");
const openButtons = [
  document.getElementById("openNavbarModal"),
  document.getElementById("openHeroModal"),
  document.getElementById("openNavbarModalContact"),
  document.getElementById("openFooterModalContact"),
];

// Buka modal (dengan class .show)
openButtons.forEach(button => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("show");
  });
});

// Tutup modal (hapus class .show)
closeBtn.addEventListener("click", function () {
  modal.classList.remove("show");
});

// Klik di luar modal
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.getElementById("contactBtn").addEventListener("click", () => {
  alert("Opening contact modal or redirect...");
});

