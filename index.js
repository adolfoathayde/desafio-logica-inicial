let nomeHeroi = "xXx_Lord_Athayde_xXx"
let levelHeroi = 2000
let rankHeroi


if (levelHeroi >= 10001) {
    rankHeroi = "Radiante"
} else if (levelHeroi >= 9001) {
    rankHeroi = "Imortal"
} else if (levelHeroi >= 8001) {
    rankHeroi = "Ascendente"
} else if (levelHeroi >= 7001) {
    rankHeroi = "Platina"
} else if (levelHeroi >= 5001) {
    rankHeroi = "Ouro"
} else if (levelHeroi >= 2001) {
    rankHeroi = "Prata"
} else if (levelHeroi >= 1001) {
    rankHeroi = "Bronze"
} else {
    rankHeroi = "Ferro"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi)