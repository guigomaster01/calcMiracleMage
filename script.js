const manaAtualInput = document.getElementById('manaAtual');
const manaMaximaInput = document.getElementById('manaMaxima');
const manaRunaInput = document.getElementById('manaRuna');
const runasCriadasInput = document.getElementById('runasCriadas');
const manaFaltanteSpan = document.getElementById('manaFaltante');
const tempoRegeneracaoSpan = document.getElementById('tempoRegeneracao');
const manaGastaRunasSpan = document.getElementById('manaGastaRunas');
const tempoRunasSpan = document.getElementById('tempoRunas');
const timerLink = document.getElementById('timerLink');
const creditosButton = document.getElementById('creditos');

function atualizarResultados() {
    const manaAtual = parseInt(manaAtualInput.value);
    const manaMaxima = parseInt(manaMaximaInput.value);
    const manaRuna = parseInt(manaRunaInput.value);
    const runasCriadas = parseInt(runasCriadasInput.value);

    const manaFaltante = manaMaxima - manaAtual;
    const tempoRegeneracaoSegundos = manaFaltante * 4;
    const manaGastaRunas = manaRuna * runasCriadas;
    const tempoRunasSegundos = manaGastaRunas * 4;

    manaFaltanteSpan.textContent = manaFaltante;
    tempoRegeneracaoSpan.textContent = formatarTempo(tempoRegeneracaoSegundos);
    manaGastaRunasSpan.textContent = manaGastaRunas;
    tempoRunasSpan.textContent = formatarTempo(tempoRunasSegundos);
    timerLink.textContent = `Seu Timer`
    timerLink.href = `https://www.google.com/search?q=timer+${tempoRegeneracaoSegundos}+segundos`
}

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
}
creditosButton.addEventListener('click', () => {
    alert('Front-end: Rodrigo - Bydrak\nPaleta de cores - Livia - Penelope Tankosa\nBack-end: Rodrigo - Tron Wuel\nIdeia de fazer foi de alguém do Discord (falar com um dos Rodrigos)');
});

manaAtualInput.addEventListener('input', atualizarResultados);
manaMaximaInput.addEventListener('input', atualizarResultados);
manaRunaInput.addEventListener('input', atualizarResultados);
runasCriadasInput.addEventListener('input', atualizarResultados);

atualizarResultados();