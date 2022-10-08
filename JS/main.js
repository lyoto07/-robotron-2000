const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

console.log(pecas);
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.controle,evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value ) + 1;
    }
}

function atualizaEstatistica(operacao, corpo) {
    estatistica.forEach( (elemento ) => {
        if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[corpo][elemento.dataset.estatistica];
        }
        if(operacao === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[corpo][elemento.dataset.estatistica];
        }
    })
}