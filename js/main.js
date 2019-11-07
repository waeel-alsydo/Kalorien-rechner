let personInfo = [
  { height: document.getElementById('height') },
  { age: document.getElementById('age') },
  { gewicht: document.getElementById('gewicht') }
];
var grundumsatz = document.getElementById('grundumsatz');
var gesamtumsatz = document.getElementById('gesamtumsatz');
var select = document.getElementById('select');
var kjfirst = document.getElementById('kjfirst');
var kjscound = document.getElementById('kjscound');
console.log(select.value);
let equal = document
  .getElementById('equal')
  .addEventListener('click', GrundumsatzSammlung);
function GrundumsatzSammlung() {
  if (man.checked) {
    var m = 66.47 + 13.7 * gewicht.value + 5 * height.value - 6.8 * age.value;
    var gesamtMann = select.value * m;
    var kj1 = m * 4.184;
    var kj2 = gesamtMann * 4.184;
    kjfirst.innerHTML = kj1.toFixed(2);
    kjscound.innerHTML = kj2.toFixed(2);
    grundumsatz.innerHTML = m.toFixed(2);
    gesamtumsatz.innerHTML = gesamtMann.toFixed(2);
    console.log(select.value);
    console.log('Er ist ein Mann');
  } else if (woman.checked) {
    var w = 655.1 + 9.6 * gewicht.value + 1.8 * height.value - 4.7 * age.value;
    var gesamtFrau = select.value * w;
    var kj3 = w * 4.184;
    var kj4 = gesamtFrau * 4.184;
    kjfirst.innerHTML = kj3.toFixed(2);
    kjscound.innerHTML = kj4.toFixed(2);
    grundumsatz.innerHTML = w.toFixed(2);
    gesamtumsatz.innerHTML = gesamtFrau.toFixed(2);
    console.log(select.value);
    console.log('sie ist eine Frau');
  } else {
    alert('müssen Sie Ihre Information geben!');
  }
}
