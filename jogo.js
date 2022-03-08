//Recuperando o tamanho da pagina automaticamente

var altura = 0;
var altura = 0;
var vida = 1;
var tempo = 60;
var dificuldade = window.location.search;
dificuldade = dificuldade.replace('?', '');
var tempoMosquito = 1500;


if (dificuldade == 'facil') {
    tempoMosquito = 1500;
} else if (dificuldade == 'medio') {
    tempoMosquito = 1000;
} else if (dificuldade == 'dificil') {
    tempoMosquito = 750;
}



function recuperarTamanhoPagina() {
    altura = window.innerWidth;
    largura = window.innerHeight;

    console.log(altura, largura);
}

var cronometro = setInterval(function () {

    if (tempo <= 0) {
        window.location.href = "vitoria.html"
        clearInterval(cronometro);
        clearInterval(criarMosquito);
    } else {
        tempo -= 1
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

recuperarTamanhoPagina()


function criandoMosquitoPosicaoAleatoria() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();


        if (vida > 3) {
            clearInterval(criarMosquito);
            window.location.href = "game_over.html"
        } else {
            document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"
            vida++
        }
    }

    var posicaoX = Math.floor(Math.random() * altura) - 90;
    var posicaoY = Math.floor(Math.random() * largura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = definirTamanhoMosquito() + ' ' + definirLadoMosquito();
    mosquito.style.position = 'absolute';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    }

    document.body.appendChild(mosquito);


    function definirTamanhoMosquito() {
        var tamanhoMosquito = Math.floor(Math.random() * 3);

        switch (tamanhoMosquito) {
            case 0:
                return 'mosquito-1'
            case 1:
                return 'mosquito-2'
            case 2:
                return 'mosquito-3'
        }
    }

    function definirLadoMosquito() {
        var ladoMosquito = Math.floor(Math.random() * 2);

        switch (ladoMosquito) {
            case 0:
                return 'ladoA'
            case 1:
                return 'ladoB'
        }
    }
}