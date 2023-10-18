let saldoVitorias = subtrair(100, 15)
let nivel = ""

if (saldoVitorias <= 10) {
    nivel -= "Ferro"
} else if (saldoVitorias <= 20) {
    nivel = "Bronze"
} else if (saldoVitorias <= 50) {
    nivel = "Prata"
} else if (saldoVitorias <= 80) {
    nivel = "Ouro"
} else if (saldoVitorias <= 90) {
    nivel = "Diamante"
} else if (saldoVitorias <= 100) {
    nivel = "Lendário"
} else if (saldoVitorias >= 101) {
    nivel = "Imortal"
}

function subtrair(vitorias, derrotas) {
    let saldoDeRankeadas = vitorias - derrotas
    return saldoDeRankeadas
}

console.log("O Herói de saldo de " + saldoVitorias + " está no nível de " + nivel)