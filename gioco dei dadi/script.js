function lanciaDadi() {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var punteggioTotale = dado1 + dado2;

    if (punteggioTotale % 2 == 0) {
        document.getElementById('risultato').innerText = "Hai ottenude " + dado1 + " e " + dado2 + ". Tot: " + punteggioTotale + ". HAI VINTO !";
    } else {
        document.getElementById('risultato').innerText = "Hai ottenude " + dado1 + " e " + dado2 + ". Tot: " + punteggioTotale + ". HAI PERSO!";
    }
}