/* Hamburgarmeny */
function toggleMenu() {
    const meny = document.getElementById("meny");
    meny.classList.toggle("visa");
}

/* Bildkarusell */
const bilder = [
    "bilder/hero.webp",
    "bilder/rum.webp",
    "bilder/restaurang.webp",
    "bilder/spa.webp"
];

let aktuellBild = 0;

function bytBild(steg) {
    aktuellBild = aktuellBild + steg;

    if (aktuellBild < 0) {
        aktuellBild = bilder.length - 1;
    }

    if (aktuellBild >= bilder.length) {
        aktuellBild = 0;
    }

    document.getElementById("karusell-bild").src = bilder[aktuellBild];
}