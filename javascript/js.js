// UPPGIFT 1
// S�tter variabel f�r knapp som ska d�lja/visa tabellen

var button = document.getElementById('buttonClick');
 
// Funktionen buttonClick

buttonClick = function() {
	
	// L�gger till klassen 'hide' med hj�lp av toggle-metoden
	document.getElementById("tableContent").classList.toggle("hide");
	
};

// Kallar p� funktionen buttonClick som sker n�r man klickar p� knappen
button.addEventListener('click', buttonClick);

