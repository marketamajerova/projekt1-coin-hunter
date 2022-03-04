let panacek = document.getElementById('panacek');
let poziceX = panacek.style.left = '500px';
let poziceY = panacek.style.top = '400px';

let platnoSirka = window.innerWidth;
let platnoVyska = window.innerHeight;

let mince = document.getElementById('mince');
let minceVyska = mince.style.height;

let mincePoziceX = mince.style.left = Math.random() * (platnoSirka - minceVyska) + 'px';
console.log(mincePoziceX);
let mincePoziceY = mince.style.top = Math.random() * (platnoVyska - minceVyska) + 'px';
console.log(mincePoziceY);


function stiskSipky(udalost) {

	if (udalost.code === 'ArrowRight') {

		panacek.src = 'obrazky/panacek-vpravo.png';
		  
		poziceX = parseInt(poziceX) + 15 + 'px';
		let novaPoziceX = poziceX;
		panacek.style.left = novaPoziceX;

		//if (panacek.style.left === platnoSirka ){
		//		novaPoziceX = platnoSirka;
		//	} 

	} else if (udalost.code === 'ArrowLeft') {

		panacek.src = 'obrazky/panacek-vlevo.png';
		
		poziceX = parseInt(poziceX) - 15 + 'px';
		let novaPoziceX = poziceX;
		panacek.style.left = novaPoziceX;
		
	} else if (udalost.code === 'ArrowDown') {

		panacek.src = 'obrazky/panacek.png';
		
		poziceY = parseInt(poziceY) + 15 + 'px';
		let novaPoziceY = poziceY;
		panacek.style.top = novaPoziceY;

	} else if (udalost.code === 'ArrowUp') {

		panacek.src = 'obrazky/panacek-nahoru.png';
		
		poziceY = parseInt(poziceY) - 15 + 'px';
		let novaPoziceY = poziceY;
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
