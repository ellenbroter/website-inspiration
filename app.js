// Button - Back to index
const backButton = document.querySelector('.button-back');
backButton.addEventListener('click', () =>{
	window.history.back()
});

// Button - Back to the top
const topButton = document.querySelector('.button-top');
topButton.addEventListener('click', () =>{
	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	 });
});

const takeToTop = document.querySelector('.buttontop');
takeToTop.addEventListener('click', () =>{
	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	 });
});