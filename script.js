let circle = document.querySelector(".circle");
document.body.addEventListener("keydown", function(e) {
	switch(e.key) {
		case "Enter":
			if (!circle.classList.contains("active")) {
				circle.classList.add("active");
			}
			break;  
		case "Escape":
			circle.classList.remove("active");
			break;
	}
})