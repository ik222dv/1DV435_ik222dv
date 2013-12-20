// UPPGIFT 1
// Sätter variabel för knapp som ska dölja/visa tabellen

var button = document.getElementById('buttonClick');
 
// Funktionen buttonClick

buttonClick = function() {
	
	// Lägger till klassen 'hide' med hjälp av toggle-metoden
	document.getElementById("tableContent").classList.toggle("hide");
	
};

// Kallar på funktionen buttonClick som sker när man klickar på knappen
button.addEventListener('click', buttonClick);

