const nameT = document.getElementById("nom")
const cognT = document.getElementById("cog")
const dataT = document.getElementById("dat")
const buttom = document.getElementById("but")

const outDiv = document.getElementById("output")


// console.log(butT)

function Persone(nome, cognome, dataN) {
    this.nome = nome;
    this.cognome = cognome;
    this.dataN = dataN;
}

const carlosS = new Persone("Carlos", "Sarmiento", "06/09/1992");


// console.log(carlosS)


buttom.onclick = function () {
    const actual = new Persone(
        nameT.value,
        cognT.value,
        dataT.value
    );
    // const actualP = new Persone(nameT.value);
    console.log(actual)

    // console.log(carlosS.nome)

    outDiv.innerHTML = `
    <table>

    <tr>
    <td>${actual.nome}</td>
    </tr>

    <tr>
    <td>${actual.cognome}</td>
    </tr>

    <tr>
    <td>${actual.dataN}</td>
    </tr>
    </table>

    `



}


