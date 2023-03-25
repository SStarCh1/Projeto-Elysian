const caixa = document.querySelector('.caixa');
const perguntas = document.querySelector('.perguntas');
const voltarBtn = document.querySelector('.voltar-btn');

perguntas.addEventListener('click', () => {
  caixa.style.display = 'none';
});

voltarBtn.addEventListener('click', () => {
  caixa.style.display = 'block';
});
