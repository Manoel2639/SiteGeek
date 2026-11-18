// Cadastro: valida os campos e guarda no navegador (localStorage).
// Quando houver um servidor, troque a parte "guardar" por um envio (fetch) à API.
// Atenção: nunca guarde senha em texto puro num site de verdade; aqui é só para demonstração.
(function () {
    const $ = (id) => document.getElementById(id);
    const form = $('form');
    const campos = ['nome', 'email', 'senha', 'senha2'];
    const NIVEIS = ['--', 'fraca', 'média', 'boa', 'excelente'];

    // ----- força da senha + regras -----
    function forca() {
        const s = $('senha').value;
        const regras = {
            tam: s.length >= 6,
            num: /\d/.test(s),
            mai: /[A-ZÀ-Ý]/.test(s)
        };
        form.querySelectorAll('[data-regra]').forEach((li) =>
            li.classList.toggle('ok', regras[li.dataset.regra]));

        // cada regra vale 1 ponto, e senha longa (10+) vale mais 1
        let nivel = Object.values(regras).filter(Boolean).length + (s.length >= 10 ? 1 : 0);
        if (!s) nivel = 0;
        nivel = Math.min(nivel, 4);

        document.querySelector('.forca').dataset.nivel = nivel;
        $('forca-texto').textContent = 'Força da senha: ' + NIVEIS[nivel];
    }
    $('senha').addEventListener('input', forca);

    // ----- validação -----
    function erro(campo, msg) {
        $('erro-' + campo).textContent = msg;
        $(campo).classList.toggle('invalido', !!msg);
        return !msg;
    }

    function validar() {
        const nome = $('nome').value.trim();
        const email = $('email').value.trim();
        const senha = $('senha').value;
        const senha2 = $('senha2').value;
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const r = [
            erro('nome', nome.length < 2 ? 'Digite seu nome.' : ''),
            erro('email', emailOk ? '' : 'Digite um e-mail válido.'),
            erro('senha', senha.length < 6 ? 'A senha precisa ter pelo menos 6 caracteres.' : ''),
            erro('senha2', senha2 !== senha ? 'As senhas não são iguais.' : '')
        ];
        return r.every(Boolean);
    }

    function lerUsuarios() {
        try { return JSON.parse(localStorage.getItem('chibi-usuarios')) || []; } catch (e) { return []; }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validar()) return;

        const email = $('email').value.trim().toLowerCase();
        const usuarios = lerUsuarios();
        if (usuarios.some((u) => u.email === email)) {
            erro('email', 'Esse e-mail já está cadastrado.');
            return;
        }
        usuarios.push({ nome: $('nome').value.trim(), email: email, senha: $('senha').value });
        try { localStorage.setItem('chibi-usuarios', JSON.stringify(usuarios)); } catch (e) { /* ok */ }

        const nome = $('nome').value.trim().split(' ')[0];
        form.reset();
        forca();
        $('ok-texto').textContent = 'Cadastro feito! Bem-vindo à ChibiKitchen, ' + nome + '. Itadakimasu!';
        const ok = $('ok');
        ok.hidden = true;
        void ok.offsetWidth; // reinicia a animação do carimbo
        ok.hidden = false;
    });

    campos.forEach((c) => $(c).addEventListener('input', () => erro(c, '')));
    forca();
})();