var nomi = ["Luca", "Marco", "Paolo"];
var nome = prompt('Chi Sei?>_>');
var dadi = document.getElementById('dadi');
for (i = 0; i < nomi.length; i++) {
  if (nome == nomi[i]) {
    dadi.style.display = 'block';
    console.log(nome)
  }

}
