'use strict';

function obliczOdsetki(kapital, procent) {
    var kapitalZOdsetkami = kapital + kapital * procent;
    return kapitalZOdsetkami;
}

var inwestycjaAnety = obliczOdsetki (100000, 0.015);
    
var inwestycjaKuby = obliczOdsetki(1000, 0.05);

console.log(inwestycjaAnety);
console.log(inwestycjaKuby);







//wyswietlWKonsoliImie("Monia");
//wyswietlWKonsoliImie("Ula");
//wyswietlWKonsoliImie("Kuba");
//wyswietlWKonsoliImie("Stan");


