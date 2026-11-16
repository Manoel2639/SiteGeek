// Ao passar o mouse (ou focar com o teclado) num pôster, mostra o fundo do anime.
// O fundo é uma imagem SEPARADA do pôster, indicada em data-fundo="imgs/fundos/xxx.jpg".
// Se a imagem ainda não existir, aparece só um brilho na cor do anime.
const fundo = document.getElementById('fundo-anime');

document.querySelectorAll('.poster').forEach((poster) => {
    const caminho = poster.dataset.fundo;
    let existe = false;

    // confere se a imagem do fundo existe
    if (caminho) {
        const teste = new Image();
        teste.onload = () => { existe = true; };
        teste.src = caminho;
    }

    const mostrar = () => {
        fundo.style.backgroundImage = existe ? 'url("' + caminho + '")' : 'none';
        fundo.style.setProperty('--cor', poster.style.getPropertyValue('--cor'));
        fundo.classList.add('ativo');
    };
    const esconder = () => fundo.classList.remove('ativo');

    poster.addEventListener('mouseenter', mostrar);
    poster.addEventListener('mouseleave', esconder);
    poster.addEventListener('focus', mostrar);
    poster.addEventListener('blur', esconder);
});