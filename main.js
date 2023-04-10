function relogio() {
    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart(2, '0');
    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0');

    elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;
    const frase = document.querySelector('.frase')


    dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-feira', 'Sexta-Feira', 'Sábado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de  ${hoje.getFullYear()} ` //1$colocar  qual dia é hoje= quarta-feira, 2$colocar o 0 antes do 5 = 05 de abril, 3$ colocar o ano em que estamos = 2023

    if (formatoHoras >= 0 && formatoHoras < 12) {
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/82/87/88/828788f79e9bb43152171f9ab58a7d0a.jpg)"
    }

    else if (formatoHoras >= 12 && formatoHoras < 18) {
        document.body.style.backgroundImage = "url(https://media.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif)"
    }


    else {
        document.body.style.backgroundImage = "url(https://wallpaperaccess.com/full/8329761.jpg)"

    }
}

setInterval(relogio, 1000);
