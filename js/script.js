var nomi = ["Luca", "luca", "marco", "Marco", "Paolo", "paolo", "Alessandro", "alessandro", "GIALLLUCA"];
var nome = prompt('Chi Sei?>_>');
var presente = false;
var dadi = document.getElementById('dadi');
var getOut = document.getElementById('get-out');
for (i = 0; i < nomi.length; i++) {
  if (nome == nomi[i]) {
    presente = true;
  }
};
  if (presente) {
    dadi.style.display = 'block';
  }
  else {
    getOut.style.display = 'block';
  }
var dado = document.getElementById('dado');

dado.addEventListener('click',
function() {
  var risultato = document.getElementById('risultato');
  var risultatoBot = document.getElementById('risultatoBot');
  var risltCasuale = Math.floor(Math.random() * 6) + 1;
  var risltCasualeBot = Math.floor(Math.random() * 6) + 1;
  var vincitore = document.getElementById('vincitore');
  risultato.innerHTML = 'Il tuo Risultato: ' + risltCasuale;
  risultatoBot.innerHTML = 'Risultato del tuo avversario: ' + risltCasualeBot;
  if (risltCasuale > risltCasualeBot) {
    vincitore.innerHTML = 'Complimenti! Hai vinto!'
  }
  else if (risltCasuale == risltCasualeBot){
    vincitore.innerHTML = 'A quanto pare è un pareggio!'
  }
  else {
    vincitore.innerHTML = 'Accidenti! Stavolta non hai vinto.'
  }
}
);
