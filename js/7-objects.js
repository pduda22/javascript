'use strict';

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function() {console.log(this.imie)}
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

krystian.waga = 80;
krystian.wyswietlDetale = function() {
    console.log(this.imie + "," + this.wzrost + "," + this.waga)
}
krystian.wyswietlDetale();