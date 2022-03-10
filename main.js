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

//zvuky
let zvukMince = document.getElementById('zvukmince');
let zvukFanfara = document.getElementById('zvukfanfara');
let hudba = document.getElementById('hudba');

//score
let score = document.getElementById('score'); 

function stiskSipky(udalost) {

	hudba.play();

	if (udalost.code === 'ArrowRight') {

		panacek.src = 'obrazky/panacek-vpravo.png';
		  
		poziceX = parseInt(poziceX) + 20 + 'px';
		let novaPoziceX = poziceX;
		panacek.style.left = novaPoziceX;
 

	} else if (udalost.code === 'ArrowLeft') {

		panacek.src = 'obrazky/panacek-vlevo.png';
		
		poziceX = parseInt(poziceX) - 20 + 'px';
		let novaPoziceX = poziceX;
		panacek.style.left = novaPoziceX;
		
	} else if (udalost.code === 'ArrowDown') {

		panacek.src = 'obrazky/panacek.png';
		
		poziceY = parseInt(poziceY) + 20 + 'px';
		let novaPoziceY = poziceY;
		panacek.style.top = novaPoziceY;

	} else if (udalost.code === 'ArrowUp') {

		panacek.src = 'obrazky/panacek-nahoru.png';
		
		poziceY = parseInt(poziceY) - 20 + 'px';
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
		zvukMince.play();
	}

	if (score.textContent == 5){
		score.textContent = 'Vyhrala jsi !!!';
		zvukFanfara.play();
	}


	if (parseInt(poziceY) < 0){
		poziceY = 0;
	} 
	if (parseInt(poziceX) < 0){
		poziceX = 0;
	} 
	if ((platnoVyska - panacekVyska) < parseInt(poziceY)){
		poziceY = 0;
	}
	if ((platnoSirka - panacekSirka) < parseInt(poziceX)){
		poziceX = 0;
	}
}
