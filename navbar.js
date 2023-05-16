// set to false on dom load
var is_pressed
var navbar
var navbar_icon

document.addEventListener('DOMContentLoaded', (event) => {
  is_pressed = false
  navbar = document.getElementById("navbar")
  navbar_icon = document.querySelector(".navbar-mobile-icon")
  setListener()
  setImageListeners()
})

// call on dom load
function setListener() {
	navbar_icon.addEventListener("click", navbarIconPressed, false)
}

function setImageListeners() {
	var gallery_images = document.querySelectorAll(".image-stack__item")
	for(gallery_image of gallery_images) {
		gallery_image.addEventListener("click", () => {
			imagePressed(gallery_image)
		}, false)
	}
}

function imagePressed(image) {
	console.log("pressed")
	if(image.style.width = '100%') {
		image.style.width = '49%'
	} else {
		image.style.width = '100%'
	}
}

function navbarIconPressed() {
	if(is_pressed == true) {
		is_pressed = false
		navbar.style.visibility = 'hidden'
	} else {
		is_pressed = true
		navbar.style.visibility = 'visible'
	}
}

// Create a media condition that targets viewports at least 768px wide
//const widthMediaQuery = window.matchMedia('(min-width: 1201px)')
// Check if the media query is true
//if (widthMediaQuery.matches) {}