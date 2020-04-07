// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
	modal.style.display = 'block';
}

// Close
function closeModal() {
	modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

//Select element function
const selectElement = function (element) {
	return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
// let navToggler = selectElement('.item-toggle');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open');
});

$('a.nav-link').click(function () {
	$('body').removeClass('open');
});

// navToggler.addEventListener('click', function () {
// 	body.classList.toggle('open');
// });

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 300,
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 600,
});
