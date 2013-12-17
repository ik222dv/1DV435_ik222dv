"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {
	// Skapar en variabel, ger den ett värde
	var test = 10;
	// Returnerar variabeln test
	return test;
	
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {
	// Skapar två variabler som jag tilldelar värden enligt instruktionen.
	var one = 2.5;
	var two = 8;
	// Skapar en variabel för svaret för att kunna göra en beräkning
	var svar;
	
	// Ställer upp de olika variablerna i en ekvation
	svar = one * two;
	// Returnerar variabeln svar
	return svar;
}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {
	// Skapar en variabel för svaret
	var resultat;
	
	// Stället upp variablerna i en ekvation
	resultat = tal1 - tal2;
	// Returnerar variabeln resultat
	return resultat;
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {
	// Skapar variabel för svaret
	var svar;
	// Använder mig av math.round som beräkning
	svar = Math.round(tal);
	// Returnerar variabeln svar
	return svar;
	
}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {
	// Skapar variabel för längd (le för length)
	var le;
	// Använder mig av funktionen length för att räkna ut längden på text
	le = text.length;
	// Returnerar variabeln le
	return le;
	
}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {
	// Skapar variabel för längd (le för length)
	var le;
	// Använder mig av funktionen length för att räkna ut längden på text
	le = text.length;
	// Använder mig av charAt-funktionen för att räkna ut vilken den näst sista bokstaven är
	return text.charAt(le - 2);
	
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
	// Anger ordningen för efternamn och förnamn samt kommatecken och mellanslag däremellan
	var namn = surname + ", " + firstname ;
	// Returnerar namn
	return namn;
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
	// Anger att andra ordet i textsträngen ska returneras med indexOf
	// Hittar andra ordet genom att leta reda på mellanslaget mellan de två orden
	// Hittar sedan andra ordets första bokstav genom att lägga till +1 efter
	return words.substr(words.indexOf(" ")+1);
	// Kontrollerar att texten returneras som den ska genom att lägga in en console.log
	console.log (words.substr(words.indexOf(" ")+1));
	
}

/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
	
	// Anger namn för boolean, sätter den till true som default
	var trueofalse = true;
	// Bestämmer att om parametern number är större eller lika med 100, ska en true boolean returneras
	if(number >= 100){
		trueofalse = true;
	// Returnerar true boolean
	return trueofalse ;
	}
	// Om parametern number inte är större eller lika med 100, returneras en false boolean
	else{
		trueofalse = false;
	// Returnerar false boolean
		return trueofalse;
	}
	
}

/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn) {
	
	// Anger att om längden på epost ELLER namn är mindre än eller lika med 0, skatexten nedan returneras
	if(epost.length <=0 || namn.length<=0){
	return "Du har glömt att ange namn eller e-post";
	}
	
	// Letar efter @ i epostadressen, om den är mindre än eller lika med 0 ska texten nedan returneras
	else if(epost.indexOf("@") <=0){
	return "Ange en e-postadress";
	}
	
	// Om båda dessa finns ska texten nedan returneras för att all information som behövs finns
	else{
		return "Ditt meddelande skickas";
	}
	
	
	
}


/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {
	// Anger le som variabel för array:ens längd, delar denna på 2. 
	// Jag har tidigare använt mig av console.log för att se vilka värden som finns i just denna låda och sedan tänkt ut hur jag ska komma åt lådan i mitten oavsett ojämnt tal i arr
	var le = (arr.length/2);
	// Svaret blir då 3,5 medan jag vill åt låda 3 där medelvärdet ligger. Jag avrundar detta tal (0, 1, 2, 3=mitten, 4, 5, 6, 7) 
	le = Math.round(le);
	// När jag kollar i console.log ser jag att jag kommit åt låda 4 istället
	console.log(arr);
	// Jag returnerar sedan detta värde minus 1 för att komma åt låda 3
	return arr[le-1];
	
}


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
	
	console.log (arr);
	// Anger variabel för längden på array:en
	var le = arr.length;
	// Anger startvärde för summa, dvs 0
	var summa = 0;
	
	// Börjar for-loop där jag anger i som variabel för lådnr (0, 1, 2, 3 osv, den börjar alltså på låda 1 vilket ju är 0)
	// Längden på i får inte vara längre än längden på array:en
	// i++ betyder låda i (i detta fall 0) + 1, alltså 1
	for(var i=0;	i<le;	i++){
		// 0 + värdet i den första lådan (låda 0), dvs 0+1 = 1. Detta är då första loopen.
		//Denna loop kommer återupprepa sig tills den är i samma längd som hela array:en.
		summa = summa + arr[i];
	}
	// För att få fram medelvärdet anger jag en ny variabel -  medel - och delar sedan summan med längden på array:en.
	var medel = summa/le;
	// Sedan returnerar jag medel.
	return medel;
}






















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

