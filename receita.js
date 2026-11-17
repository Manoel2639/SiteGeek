(function () {
    const $ = (sel) => document.querySelector(sel);
    const criar = (tag, classe, texto) => {
        const el = document.createElement(tag);
        if (classe) el.className = classe;
        if (texto) el.textContent = texto;
        return el;
    };

    // ----- qual receita? (receita.html?id=naruto) -----
    const id = new URLSearchParams(location.search).get('id');
    const r = (window.RECEITAS || []).find((x) => x.id === id);

    if (!r) {
        $('#app').innerHTML =
            '<h1>Receita não encontrada</h1>' +
            '<p class="sub">Essa receita não existe. Volte e escolha outra.</p>' +
            '<a class="voltar" href="index.html">← Voltar para o início</a>';
        $('#personagem').remove();
        return;
    }

    // ----- cabeçalho da receita -----
    document.title = r.titulo + ' - ChibiKitchen';
    document.documentElement.style.setProperty('--c1', r.cor[0]);
    document.documentElement.style.setProperty('--c2', r.cor[1]);

    $('#cam-anime').textContent = r.anime;
    $('#capa-emoji').textContent = r.emoji;
    $('#titulo').textContent = r.titulo;
    $('#sub').textContent = r.sub;
    $('#intro').textContent = r.intro;
    $('#dica').textContent = 'Dica: ' + r.dica;
    $('#capa').style.backgroundImage =
        'linear-gradient(160deg, ' + r.cor[0] + 'bb, ' + r.cor[1] + 'cc), url("' + r.poster + '")';

    function caixinhas(alvo, lista) {
        lista.forEach(([valor, rotulo]) => {
            const d = criar('div');
            d.append(criar('strong', '', valor), rotulo);
            $(alvo).append(d);
        });
    }
    caixinhas('#info', [[r.tempo, 'Tempo total'], [r.porcoes, r.unidade], [r.dificuldade, 'Dificuldade']]);
    caixinhas('#ficha', [[r.anime, 'Anime'], [r.episodio, 'Onde aparece'], [r.categoria, 'Categoria']]);
    r.utensilios.forEach((u) => $('#utensilios').append(criar('li', '', u)));

    // ----- personagem -----
    const avatar = $('#avatar');
    const img = $('#pers-img');
    avatar.setAttribute('aria-label', 'Cutucar ' + r.personagem);
    img.onerror = () => {
        img.hidden = true;
        avatar.classList.add('sem-img');
        $('#pers-emoji').textContent = r.emoji;
    };
    img.src = 'imgs/personagens/' + r.id + '.png';

    let timer;
    function falar(msg) {
        if (!msg) return;
        const fala = $('#fala');
        fala.textContent = msg;
        fala.classList.add('on');
        clearTimeout(timer);
        timer = setTimeout(() => fala.classList.remove('on'), 6000);
    }

    let ultima = -1;
    avatar.addEventListener('click', () => {
        avatar.classList.remove('pula');
        void avatar.offsetWidth; // reinicia a animação
        avatar.classList.add('pula');
        const frases = r.falas.cutucar;
        let i;
        do { i = Math.floor(Math.random() * frases.length); } while (frases.length > 1 && i === ultima);
        ultima = i;
        falar(frases[i]);
    });

    // ----- ingredientes (checklist) -----
    const totalIng = r.ingredientes.reduce((n, g) => n + g.itens.length, 0);
    let marcados = 0;
    const atualizarContador = () => {
        $('#contador').textContent = marcados + ' de ' + totalIng + ' separados';
    };
    r.ingredientes.forEach((grupo) => {
        if (grupo.grupo) $('#ingredientes').append(criar('h3', '', grupo.grupo));
        grupo.itens.forEach((item) => {
            const label = criar('label', 'ing');
            const caixa = document.createElement('input');
            caixa.type = 'checkbox';
            caixa.addEventListener('change', () => {
                marcados += caixa.checked ? 1 : -1;
                atualizarContador();
                if (marcados === totalIng) falar(r.falas.separado);
            });
            label.append(caixa, criar('span', '', item));
            $('#ingredientes').append(label);
        });
    });
    atualizarContador();

    // ----- passar páginas -----
    // Sequência única: 0 = visão geral, 1 = ingredientes, 2... = cada passo, última = prato pronto
    const n = r.passos.length;
    const total = n + 3;
    let pos = 0;
    const secoes = { visao: $('#pg-visao'), ingredientes: $('#pg-ingredientes'), preparo: $('#pg-preparo') };
    const abaDe = (i) => (i === 0 ? 'visao' : i === 1 ? 'ingredientes' : 'preparo');

    function mostrar(novo, animar) {
        const direcao = novo >= pos ? 'entra-direita' : 'entra-esquerda';
        pos = Math.max(0, Math.min(total - 1, novo));
        const nome = abaDe(pos);
        const p = pos - 2; // passo atual (só vale no preparo)
        const fim = p >= n;

        Object.keys(secoes).forEach((k) => {
            secoes[k].hidden = k !== nome;
            $('#aba-' + k).classList.toggle('ativa', k === nome);
            $('#aba-' + k).setAttribute('aria-selected', String(k === nome));
        });

        let rotulo;
        let msg;
        if (nome === 'preparo') {
            rotulo = fim ? 'Pronto!' : 'Passo ' + (p + 1) + ' de ' + n;
            $('#passo-num').textContent = fim ? 'Concluído' : rotulo;
            $('#passo-titulo').textContent = fim ? 'Prato pronto!' : (r.passos[p].titulo || 'Passo ' + (p + 1));
            $('#passo-texto').textContent = fim ? 'Você terminou a receita. Bom apetite!' : r.passos[p].texto;
            msg = fim ? r.falas.fim : r.falas.passos[p % r.falas.passos.length];
        } else {
            rotulo = nome === 'visao' ? 'Visão geral' : 'Ingredientes';
            msg = r.falas[nome];
        }

        $('#pos-texto').textContent = rotulo + ' (' + (pos + 1) + '/' + total + ')';
        $('#barra').style.width = ((pos + 1) / total) * 100 + '%';
        $('#ant').disabled = pos === 0;
        $('#prox').textContent =
            pos === 0 ? 'Ingredientes →' :
                pos === 1 ? 'Começar →' :
                    pos === total - 2 ? 'Terminei! ✓' :
                        pos === total - 1 ? 'Recomeçar ↺' : 'Próxima →';

        if (animar) {
            const s = secoes[nome];
            s.classList.remove('entra-direita', 'entra-esquerda');
            void s.offsetWidth; // reinicia a animação
            s.classList.add(direcao);
            // leva as abas para o topo da tela, para o conteúdo da nova página ficar à vista
            const topo = $('.abas').getBoundingClientRect().top;
            if (Math.abs(topo - 10) > 4) window.scrollTo({ top: window.scrollY + topo - 10, behavior: 'smooth' });
        }
        try { history.replaceState(null, '', '#' + (pos + 1)); } catch (e) { /* ok */ }
        falar(msg);
    }

    $('#prox').addEventListener('click', () => mostrar(pos === total - 1 ? 0 : pos + 1, true));
    $('#ant').addEventListener('click', () => mostrar(pos - 1, true));

    // abas = atalhos (preparo vai para o primeiro passo)
    const atalhos = { visao: 0, ingredientes: 1, preparo: 2 };
    document.querySelectorAll('[data-ir]').forEach((b) =>
        b.addEventListener('click', () => mostrar(atalhos[b.dataset.ir], true)));

    // setas do teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && pos < total - 1) mostrar(pos + 1, true);
        if (e.key === 'ArrowLeft' && pos > 0) mostrar(pos - 1, true);
    });

    // deslizar o dedo no celular
    let x0 = null;
    $('#app').addEventListener('touchstart', (e) => { x0 = e.changedTouches[0].clientX; }, { passive: true });
    $('#app').addEventListener('touchend', (e) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        x0 = null;
        if (dx < -70 && pos < total - 1) mostrar(pos + 1, true);
        if (dx > 70 && pos > 0) mostrar(pos - 1, true);
    });

    // abre na página guardada no endereço (#3 = página 3), senão na primeira
    const guardada = parseInt(location.hash.slice(1), 10) - 1;
    mostrar(isNaN(guardada) ? 0 : guardada, false);
})();