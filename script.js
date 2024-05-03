const hamMenu = document.querySelector("#hammenu");
const menuNav = document.querySelector(".menunav");

hamMenu.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});


const burgger = document.querySelector("#hammenu");
document.addEventListener("click", function (e) {
	if (!burgger.contains(e.target) && !menuNav.contains(e.target)) {
		menuNav.classList.remove("active");
	}
});