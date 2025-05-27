function abrir() {
  const btn = document.querySelector('button');
  const popup = document.getElementById('popup');
  const imagemContainer = document.querySelector('.image-container');
  const contador = document.getElementById('contador');
  const p = document.getElementById('p');
  const main = document.getElementById('main');
  btn.style.display = 'none';

  popup.style.display = 'block';
  popup.style.animation = 'popupAnim 2s forwards';

  setTimeout(() => {
    popup.style.display = 'none';
    imagemContainer.style.display = 'inline-block'; // mostrar container com imagem e h2
    contador.style.display = 'block';
    p.style.display = 'block';
    main.style.display = 'block'        // mostrar contador
    iniciarContador();                                // iniciar contador

    // Criar vários corações a cada 300ms por 5 segundos
    const intervalo = setInterval(criarCoracao, 300);
    setTimeout(() => clearInterval(intervalo), 5000);
  }, 2000);
}

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.textContent = '❤️';

  coracao.style.left = Math.random() * window.innerWidth + 'px';

  coracao.style.bottom = '100px';

  document.body.appendChild(coracao);

  coracao.addEventListener('animationend', () => {
    coracao.remove();
  });
}

function iniciarContador() {
  const contador = document.getElementById('contador');
  const inicio = new Date(2023, 2, 17);

  function atualizar() {
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += ultimoMes;
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }

    contador.textContent = `Juntos há ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
  }

  atualizar();
  setInterval(atualizar, 1000);
}
