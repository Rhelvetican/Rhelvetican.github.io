const collapse = document.getElementById("option");
collapse.addEventListener("click", collapse_me);

function collapse_me() {
	document.getElementById("nav").classList.toggle("active");
	collapse.classList.toggle("click");
}
