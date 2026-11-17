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
        // posição vertical da imagem (opcional, por pôster)
        fundo.style.backgroundPosition = poster.dataset.posicao || '';
        fundo.style.setProperty('--cor', poster.style.getPropertyValue('--cor'));
        fundo.classList.add('ativo');
    };
    const esconder = () => fundo.classList.remove('ativo');

    poster.addEventListener('mouseenter', mostrar);
    poster.addEventListener('mouseleave', esconder);
    poster.addEventListener('focus', mostrar);
    poster.addEventListener('blur', esconder);
});

// Logo do anime no pôster: se o arquivo da logo não for encontrado,
// mostra o NOME do anime no lugar, para o efeito sempre aparecer.
document.querySelectorAll('.logo-anime').forEach((img) => {
    const trocarPorTexto = () => {
        const texto = document.createElement('span');
        texto.className = 'logo-anime logo-texto';
        texto.textContent = img.dataset.nome;
        img.replaceWith(texto);
    };
    img.addEventListener('error', trocarPorTexto);
    if (img.complete && img.naturalWidth === 0) trocarPorTexto(); // já falhou antes do script rodar
});