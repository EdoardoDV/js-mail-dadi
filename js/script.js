// Elementi in Uso
var nomi = ["Luca", "luca", "marco", "Marco", "Paolo", "paolo", "Alessandro", "alessandro", "GIALLLUCA"];
var nome = prompt('Chi Sei?>_>');
var presente = false;
// Fine Elementi in Uso
var dadi = document.getElementById('dadi'); // Gioco dei Dadi
var getOut = document.getElementById('get_out'); // Blocco per ID Non Identificata
// Controllo se ID Utente Combacia con ID Consentiti
for (i = 0; i < nomi.length; i++) {
  if (nome == nomi[i]) {
    presente = true;
  }
};
  if (presente) {
    dadi.style.display = 'block'; // ID è Consentito -> Mostra Gioco Dadi
  }
  else {
    getOut.style.display = 'block'; // ID non Consentito -> Accesso Negato
  }
  // (inserimento label con nome = nomi.push?)
// Gioco dei Dadi
var dado = document.getElementById('dado');
// Bottone Cliccabile
dado.addEventListener('click',
function() {
  var risultato = document.getElementById('risultato');
  var risultatoBot = document.getElementById('risultatoBot');
  var risltCasuale = Math.floor(Math.random() * 6) + 1; // Dado Giocatore Utente
  var risltCasualeBot = Math.floor(Math.random() * 6) + 1; // Dado Bot
  var vincitore = document.getElementById('vincitore'); // Messaggio informativo
  risultato.innerHTML = 'Il tuo Risultato: ' + risltCasuale;
  risultatoBot.innerHTML = 'Risultato del tuo avversario: ' + risltCasualeBot;
  // In Caso di Vittoria
  if (risltCasuale > risltCasualeBot) {
    vincitore.innerHTML = 'Complimenti! Hai vinto!'
  }
  // In Caso di Pareggio
  else if (risltCasuale == risltCasualeBot){
    vincitore.innerHTML = 'A quanto pare è un pareggio!'
  }
  // In Caso di Sconfitta
  else {
    vincitore.innerHTML = 'Accidenti! Stavolta non hai vinto.'
  }
}
);
// Fine Gioco dei Dadi
