const resultado = document.querySelector(".resultado");
const meusPontos = document.querySelector(".meus-pontos");
const pontosMaquina = document.querySelector(".maquina-pontos");

let contadorHumano = 0;
let contadorMaquina = 0;

const escolhaUsuario = (valorUsuario) => {
    
    playHuman(valorUsuario, randomEscolha( ))
}

const randomEscolha = () => {
    const valorMaquina = ['pedra', 'papel', 'tesoura'];
    const sorteioIndice = Math.floor(Math.random() * 3);

    return valorMaquina[sorteioIndice];
}

const playHuman = (humano, maquina) => {
    if(humano === maquina) {
        resultado.innerHTML = `Deu empate! ${'&#x1F644;'}`;
    
    } else if ((humano === 'pedra' && maquina === 'tesoura') || 
               (humano === 'papel' && maquina === 'pedra') ||
               (humano === 'tesoura' && maquina === 'papel')) {
        contadorHumano++
        meusPontos.innerHTML = contadorHumano;
        resultado.innerHTML = `Você venceu! ${'&#x1F60E;'}`;

    } else {
        contadorMaquina++;
        pontosMaquina.innerHTML = contadorMaquina;
        resultado.innerHTML = `Você perdeu! ${'&#x1F625;'}`;
    }
}

