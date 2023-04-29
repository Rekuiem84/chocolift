const gridChoco = document.querySelector(".galerie-choco-lait");
const gridWhite = document.querySelector(".galerie-choco-blanc");
const imgChoco = document.querySelector(".hero-img-lait");
const imgWhite = document.querySelector(".hero-img-white");
const galerieHero = document.querySelector(".galerie-hero");

imgChoco.addEventListener("click", () => {
	gridChoco.classList.remove("hidden");
	galerieHero.classList.remove("active-white");
	galerieHero.classList.add("active-choco");
	gridWhite.classList.add("hidden");
});
imgWhite.addEventListener("click", () => {
	gridWhite.classList.remove("hidden");
	galerieHero.classList.remove("active-choco");
	galerieHero.classList.add("active-white");
	gridChoco.classList.add("hidden");
});
