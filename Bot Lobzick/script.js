let theme = document.querySelector('.theme');
let button1 = document.querySelector('button');
let uzor1 = document.querySelector('main');
button1.onclick = function () {
	theme.classList.toggle('light-theme');
	theme.classList.toggle('dark-theme');
	button1.classList.toggle('button-light');
	button1.classList.toggle('button-dark');
	uzor1.classList.toggle('main');
}

