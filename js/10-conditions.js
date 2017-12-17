'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 189;

if ( wzrostOlgi < wzrostMateusz ) {
    console.log("Olga jest niższa :)");
}

if ( wzrostOlgi > wzrostMateusz ) {
    console.log("Olga jest wyższa");
} else {
    console.log("olga jest niższa");
}

if ( wzrostOlgi > wzrostMateusz ) {
    console.log("Olga jest wyższa");
} else if (wzrostOlgi == wzrostMateusz ) {
} else {
    console.log("olga jest niższa");
}

var kolor = 'niebieski';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
        
}