const nameT = document.getElementById("nom")
const cognT = document.getElementById("cog")
const dataT = document.getElementById("dat")
const buttom = document.getElementById("but")
const outDiv = document.getElementById("output")

function Persone(nome, cognome, dataN) {
    this.nome = nome;
    this.cognome = cognome;
    this.dataN = dataN;
}
buttom.onclick = function () {
    const actual = new Persone(nameT.value, cognT.value, dataT.value);
    outDiv.innerHTML =
        `<table>
        <tr><td>${actual.nome}</td></tr>
        <tr><td>${actual.cognome}</td></tr>
        <tr><td>${actual.dataN}</td></tr>
        </table>`
}


