AOS.init();

const dataEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function () { 
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const dataDistanciaAteEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(dataDistanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor(dataDistanciaAteEvento % diasEmMs / horaEmMs);
    const minutosAteEvento = Math.floor(dataDistanciaAteEvento % horaEmMs /minutoEmMs);
    const segundosAteEvento = Math.floor((dataDistanciaAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (diasAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado! Entre em contato para informações';
    }
}, 1000)