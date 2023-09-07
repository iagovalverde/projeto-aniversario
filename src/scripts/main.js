AOS.init();

const meuAniversario = new Date("Jan 11, 2024 20:00:00");
const timeStampAniversario = meuAniversario.getTime();

const contadorHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const tempoAteAniversario = timeStampAniversario - timeStampAgora;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteAniversario = Math.floor(tempoAteAniversario / diaEmMs);
    const horasAteAniversario = Math.floor((tempoAteAniversario % diaEmMs) / horaEmMs);
    const minutosAteAniversario = Math.floor((tempoAteAniversario % horaEmMs) / minutoEmMs);
    const segundosAteAniversario = Math.floor((tempoAteAniversario % minutoEmMs) / 1000);

    document.getElementById('timer').innerHTML = `${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundosAteAniversario}s`

    if(tempoAteAniversario < 0) {
        clearInterval(contadorHoras);
        document.getElementById('timer').innerHTML = 'Meu aniversário já foi 😔';
    }
}, 1000)