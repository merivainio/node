const tulosta = require('./tulostus');

const tulostaNelio = (sivu)  => {
    for (var count = 0; count < sivu; count++) {
        tulosta.tulostaTahtia(4);
        }

}

const tulostaSuorakulmio = (leveys, korkeus)  => {
    for (var count = 0; count < korkeus; count++) {
        tulosta.tulostaTahtia(leveys);
        }

}

const tulostaKolmio = (korkeus)  => {
    for (var count = 1; count < korkeus; count++) {
        tulosta.tulostaTahtia(count);
        }

}

const lukusarjanSumma = (n) => {
    let summa = 0;
    for (let i = 0; i <= n; i++) {
        summa += i;
    }
    return summa;
}

const kertoma = (n) => n > 0 ? kertoma(n - 1) * n : 1;

module.exports = {    
    tulostaNelio,
    tulostaSuorakulmio,
    tulostaKolmio,
    lukusarjanSumma,
    kertoma
}

tulostaNelio(4);
tulostaSuorakulmio(3,2);
tulostaKolmio(5);
tulosta.tulostaTulos(lukusarjanSumma(100));
tulosta.tulostaTulos(kertoma(10));