
const images = [
  "assets/images/fragnance-1.png",
  "assets/images/fragnance-2.png",
  "assets/images/fragnace-3.png"
];

function changeImage(index) {
  document.getElementById("mainImage").src = images[index];
}


const radios = document.querySelectorAll("input");
const addToCart = document.getElementById("addToCart");

radios.forEach(radio => {
  radio.addEventListener("change", updateCart);
});

function updateCart() {
  const fragrance = document.querySelector("input[name='fragrance']:checked").value;
  const purchase = document.querySelector("input[name='purchase']:checked").value;
  addToCart.href = `#${fragrance}-${purchase}`;
}

/* COUNT UP */
const counters = document.querySelectorAll(".count");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let target = +entry.target.dataset.target;
      let count = 0;
      const interval = setInterval(() => {
        count++;
        entry.target.textContent = count + "%";
        if (count === target) clearInterval(interval);
      }, 20);
      observer.unobserve(entry.target);
    }
  });
});

counters.forEach(c => observer.observe(c));