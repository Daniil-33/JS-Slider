let slides = document.getElementsByClassName('slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);
let dot = document.getElementsByClassName('dot');

function nextSlide() {
	slides[currentSlide].className = 'slide';
	dot[currentSlide].className = 'dot';
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].className = 'slide showing';
	dot[currentSlide].className = 'dot active';
}
dot.onclick = function(){
		for(let i = 0; i < dot.length; i++)
			currentSlide = dot[i]; 
	}
