// UPPGIFT 2

// Jag börjar med att leta upp valutan för dollar och euro och sätter dessa i varsin variabel
var dollarKurs = 0.151632;
var euroKurs = 0.111224235;

// Sätter en funktion som 
function validateInput() {	
	var sek = document.querySelector("#sek");

	// Om användaren använt sig av annat än siffror kommer isNan känna av detta, och i detta fall kommer en alert-ruta upp
	if (isNaN(sek.value))	{
		alert('Bara siffror tack');
	}
	// Om det är bara siffror i inputfältet kommer räknaren sätta igång
	else {
		addValue(sek.value);
	}
}
// Följande två funktioner räknar ut valuta för euro och dollar
function calculateEuro(sek) {
	return sek*euroKurs;
}

function calculateDollar(sek){
	return sek*dollarKurs;	
}

// Denna funktion visar resultaten av föregående funktionen, men med endast två decimaler (vilket toFixed är till för)
function addValue(sek) {

	var euro = calculateEuro(sek).toFixed(2);
	var dollar = calculateDollar(sek).toFixed(2);
	
	// Jag hämtar listan jag skapat i html-dokumentet och sätter den som variabeln list
	var list = document.querySelector('#lista');	
	// Jag skapar också en variabel för li, vilken jag måste skapa
	var li = document.createElement('li');
	// Jag sätter line som en variabel och låter den avgöra hur jag vill att texten ska se ut senare
	var line = sek + " sek= " + euro + " euro" + ", " + dollar + " dollar "; 
	// Jag sätter sekTextNode som variabel och skapar sedan en textnod som heter just line
	var sekTextNode = document.createTextNode(line);
	// Jag bestämmer sedan att resultaten inte försvinner när man gör en ny uträkning utan hamnar under varandra på rad
	li.appendChild(sekTextNode);
	// Sedan bestämmer jag att de nyaste resultaten ska hamna överst genom att sätta dem före firstChild
 	list.insertBefore(li, list.firstChild);
}
// window.onload bestämmer vad som händer när objektet har laddats in
window.onload = function() {
	// Sätter en variabel för Skicka-knappen genom att hämta klassen för den
	var submitButton = document.querySelector(".submitButton");
	// Denna rad bestämmer att något händer när man klickar på knappen, i detta fall får man fram resultatet
	submitButton.addEventListener('click', validateInput);
};





// UPPGIFT 3

// Börjar med att lägga in variabler för bilderna med tillhörande URL
var images = ["http://2.bp.blogspot.com/-qkiBFQco1Xw/T8srlweUvoI/AAAAAAAAEQM/WBveO1dVlD8/s1600/nature-wallpaper-27.jpg", "http://www.hdwallpapersinn.com/wp-content/uploads/2013/05/Nature-wallpaper-75.jpg", "http://www.hdwallpapers3d.com/wp-content/uploads/2013/06/ForestFall.jpg", "http://www.hdwallpapersplus.com/wp-content/uploads/2012/10/nature6.jpg"];

// Sätter en räknare som bestämmer att man börjar med bilden i första lådan i array:en          
var counter = 0;

// Sätter en intervallfunktion som bestämmer hur lång tid det tar innan nästa bild visas
setInterval(function(){changeImage();}, 2000 );
// Funktion för bildspelet
function changeImage(){
	// Hämtar första bilden som finns i html och css
	var selectedImage = document.querySelector("#changeImageId");
	// Följande textrad är själva "bildbytar-funktionen"
	selectedImage.setAttribute("src", images[counter]);
	// Denna text bestämmer att bilden ändras från nr1 till nr2 osv
	counter += 1;
	
// Sätter en if-sats som bestämmer att om räknaren går över [3], kommer den börja om från början igen
	if(counter>3){
		counter = 0;	
	}
}
