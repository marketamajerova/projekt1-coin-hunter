let panacek = document.getElementById('panacek');
let startPoziceX = panacek.style.left = '600px';
let startPoziceY = panacek.style.top = '300px';

function stiskSipky(udalost) {

	if (udalost.code === 'ArrowRight') {

		panacek.src = 'obrazky/panacek-vpravo.png';
		
		startPoziceX = parseInt(startPoziceX) + 15 + 'px';
		let novaPoziceX = startPoziceX;
		panacek.style.left = novaPoziceX;

	} else if (udalost.code === 'ArrowLeft') {

		panacek.src = 'obrazky/panacek-vlevo.png';
		
		startPoziceX = parseInt(startPoziceX) - 15 + 'px';
		let novaPoziceX = startPoziceX;
		panacek.style.left = novaPoziceX;
		
	} else if (udalost.code === 'ArrowDown') {

		panacek.src = 'obrazky/panacek.png';
		
		startPoziceY = parseInt(startPoziceY) + 15 + 'px';
		let novaPoziceY = startPoziceY;
		panacek.style.top = novaPoziceY;

	} else if (udalost.code === 'ArrowUp') {

		panacek.src = 'obrazky/panacek-nahoru.png';
		
		startPoziceY = parseInt(startPoziceY) - 15 + 'px';
		let novaPoziceY = startPoziceY;
		panacek.style.top = novaPoziceY;
	}
}

// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
