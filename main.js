// panacek
let panacek = document.getElementById('panacek');
let poziceX = panacek.style.left = '500px';
let poziceY = panacek.style.top = '400px';
let panacekSirka = panacek.clientWidth;
let panacekVyska = panacek.clientHeight;

// platno
let platnoSirka = window.innerWidth;
let platnoVyska = window.innerHeight;

// mince
let mince = document.getElementById('mince');
let minceSirka = mince.clientWidth;
let mincePoziceX = mince.style.left = Math.random() * (platnoSirka - minceSirka) + 'px';
let mincePoziceY = mince.style.top = Math.random() * (platnoVyska - minceSirka) + 'px';

//score
let score = document.getElementById('score'); 

function stiskSipky(udalost) {

	if (udalost.code === 'ArrowRight') {

		panacek.src = 'obrazky/panacek-vpravo.png';
		  
		poziceX = parseInt(poziceX) + 15 + 'px';
		let novaPoziceX = poziceX;
		panacek.style.left = novaPoziceX;
 

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

	if (!( parseInt(poziceX) + panacekSirka < parseInt(mincePoziceX) || 
	parseInt(mincePoziceX) + minceSirka < parseInt(poziceX) || 
	parseInt(poziceY) + panacekVyska < parseInt(mincePoziceY) || 
	parseInt(mincePoziceY) + minceSirka < parseInt(poziceY))) 
	{
		console.log(score.textContent); 
		let noveScore = parseInt(score.textContent) + 1;
		score.textContent = noveScore;
		mincePoziceX = mince.style.left = Math.random() * (platnoSirka - minceSirka) + 'px';
		mincePoziceY = mince.style.top = Math.random() * (platnoVyska - minceSirka) + 'px';
	}
}



/*
 problemy :
 	1) mince obcas vyskoci z obrazovky, 
	2) panacek vybiha z obraovky
 otazky :
	1) Proc nefunguje -> panacekVyska = panacek.style.width; ale pouze clientWidth
*/