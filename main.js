let panacek = document.getElementById('panacek');
let startPoziceX = panacek.style.left = '600px';
let startPoziceY = panacek.style.top = '300px';

function stiskSipky(udalost) {

	if (udalost.code === 'ArrowRight') {
		startPoziceX = parseInt(startPoziceX) + 15 + 'px';
		let novaPoziceX = startPoziceX;
		panacek.style.left = novaPoziceX;
		/*
		let novaPoziceX = parseInt(startPoziceX) + 1 + 'px';
		panacek.style.left = novaPoziceX;
		*/
	} else if (udalost.code === 'ArrowLeft') {
		startPoziceX = parseInt(startPoziceX) - 15 + 'px';
		let novaPoziceX = startPoziceX;
		panacek.style.left = novaPoziceX;
	} else if (udalost.code === 'ArrowDown') {
		startPoziceY = parseInt(startPoziceY) + 15 + 'px';
		let novaPoziceY = startPoziceY;
		panacek.style.top = novaPoziceY;
	} else if (udalost.code === 'ArrowUp') {
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
