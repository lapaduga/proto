document.addEventListener('DOMContentLoaded', () => {
	const rows = document.querySelectorAll('.grid__row');
	const btn = document.querySelector('.grid__btn');
	const overlays = document.querySelectorAll('.grid__cell-overlay');
	let counter = 0;
	
	btn.addEventListener('click', () => {
		if (counter < rows.length) {
			rows[counter].classList.add('grid__row--show');
			counter++;
		}
	});

	overlays.forEach(overlay => {
		overlay.addEventListener('click', function() {
			this.classList.add('grid__cell-overlay--hide');
		});
	});
});



