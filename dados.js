/* Dados das receitas. Para criar uma receita nova, copie um bloco e mude os valores.
   capa = imagem do topo da receita | logo = logo do anime | poster = imagem do cartão da home */
window.RECEITAS = [
    {
        "id": "naruto",
        "titulo": "Ramen do Naruto",
        "sub": "O lámen de missô com chashu e ovo marinado da barraca Ichiraku.",
        "tempo": "2h30",
        "porcoes": "2",
        "unidade": "Porções",
        "dificuldade": "Média",
        "intro": "Este é o prato mais icônico do anime Naruto, preparado pelo mestre Teuchi (o famoso Tio do Ramen, dono da barraca Ichiraku) e devorado por Naruto Uzumaki. Ele aparece logo no Episódio 1 do anime clássico (\"Chegou: Naruto Uzumaki!\"), quando o sensei Iruka leva Naruto para comemorar sua formatura na Academia Ninja com uma tigela gigante de lámen, marcando o início da tradição favorita do protagonista ao longo de toda a série.",
        "ingredientes": [
            {
                "grupo": "Carne (Chashu) e ovo marinado (Ajitsuke Tamago)",
                "itens": [
                    "400 g de barriga de porco (pancetta) em peça",
                    "2 ovos grandes",
                    "1/2 xícara de molho shoyu",
                    "1/4 de xícara de saquê culinário (ou vinho branco seco)",
                    "2 colheres (sopa) de açúcar mascavo",
                    "1 xícara de água",
                    "2 dentes de alho levemente amassados",
                    "3 fatias finas de gengibre fresco"
                ]
            },
            {
                "grupo": "Caldo de missô",
                "itens": [
                    "1 litro de caldo de galinha ou de porco (caseiro ou dissolvido com pouco sal)",
                    "3 colheres (sopa) de pasta de missô (soja fermentada)",
                    "1 dente de alho bem ralado",
                    "1 colher (chá) de gengibre fresco ralado",
                    "1 colher (sopa) de óleo de gergelim torrado"
                ]
            },
            {
                "grupo": "Montagem (rende 2 tigelas grandes)",
                "itens": [
                    "2 porções de macarrão próprio para lámen (ou macarrão instantâneo oriental sem o sachê de tempero)",
                    "4 fatias de narutomaki (massa de peixe japonesa com espiral rosa), opcional, encontrada em mercados orientais",
                    "2 folhas pequenas de alga nori",
                    "Cebolinha verde picada e sementes de gergelim torrado a gosto"
                ]
            }
        ],
        "passos": [
            {
                "titulo": "Prepare o ovo de gema cremosa",
                "texto": "coloque os ovos com casca em uma panela com água já fervente e cozinhe por exatos 6 minutos e 30 segundos. Retire imediatamente e mergulhe em uma tigela com água gelada e gelo por 5 minutos para interromper o cozimento. Descasque com cuidado e reserve."
            },
            {
                "titulo": "Cozinhe o chashu",
                "texto": "em uma panela média em fogo alto, doure a peça de barriga de porco por cerca de 2 minutos de cada lado. Acrescente a água, o shoyu, o saquê, o açúcar mascavo, o alho e as fatias de gengibre. Abaixe o fogo, tampe a panela e cozinhe por 40 a 50 minutos (virando a carne na metade do tempo), até ficar bem macia."
            },
            {
                "titulo": "Marine os ovos",
                "texto": "retire a peça de porco da panela e reserve. Deixe o molho escuro do cozimento esfriar um pouco, transfira para um pote fundo junto com os ovos descascados (se precisar, adicione um pouco de água para cobri-los) e leve à geladeira por no mínimo 1 hora para absorverem o sabor."
            },
            {
                "titulo": "Faça a base do caldo",
                "texto": "em outra panela, aqueça o óleo de gergelim em fogo médio e refogue o alho e o gengibre ralados por 30 segundos, apenas para liberar o aroma. Despeje o caldo de galinha ou de porco e espere levantar fervura."
            },
            {
                "titulo": "Dissolva o missô",
                "texto": "abaixe o fogo para o mínimo. Pegue uma concha do caldo quente, dissolva a pasta de missô dentro dela com uma colher até ficar totalmente lisa e despeje de volta na panela. Mantenha o caldo quente, mas evite deixar ferver vigorosamente depois desse ponto para não perder o sabor do missô."
            },
            {
                "titulo": "Cozinhe o macarrão e sele a carne",
                "texto": "cozinhe o macarrão de lámen em água fervente pelo tempo indicado na embalagem (geralmente 2 a 3 minutos) e escorra bem. Fatie a barriga de porco em rodelas de cerca de 0,5 cm e, se quiser intensificar o sabor, passe as fatias rapidamente em uma frigideira quente para dourar as bordas."
            },
            {
                "titulo": "Monte a tigela do Ichiraku",
                "texto": "divida o macarrão quente em duas tigelas fundas e cubra com o caldo de missô. Disponha as fatias de chashu de um lado, o ovo marinado cortado ao meio no centro, duas fatias de narutomaki, uma folha de alga nori encostada na borda da tigela e finalize com bastante cebolinha picada e gergelim."
            }
        ],
        "anime": "Naruto",
        "episodio": "Episódio 1",
        "categoria": "Prato principal",
        "emoji": "🍜",
        "cor": [
            "#FF7B00",
            "#c1121f"
        ],
        "poster": "imgs/Naruto.jpg",
        "personagem": "Naruto",
        "utensilios": [
            "Panela média",
            "Panela para o caldo",
            "Tigela com água e gelo",
            "Faca afiada",
            "Tigelas fundas"
        ],
        "dica": "Faça o chashu e os ovos na véspera: o sabor fica ainda melhor depois de uma noite na geladeira.",
        "falas": {
            "visao": "Dattebayo! Esse é o ramen do Ichiraku, o melhor do mundo!",
            "ingredientes": "Separa tudo direitinho. Não vale esquecer o narutomaki!",
            "separado": "Tudo pronto! Agora é só cozinhar, dattebayo!",
            "passos": [
                "Capricha no ponto do ovo, hein!",
                "Paciência: o chashu precisa de tempo para ficar macio.",
                "Esse cheirinho já está me deixando com fome!"
            ],
            "fim": "Itadakimasu! Será que tem mais uma tigela?",
            "cutucar": [
                "Ei! Estou com fome, não me atrapalha!",
                "Um dia eu vou ser Hokage… depois do ramen.",
                "Dá para pedir mais narutomaki?"
            ]
        },
        "capa": "imgs/capas/naruto.jpg",
        "logo": "imgs/logos/naruto.png"
    },
    {
        "id": "sanji",
        "titulo": "Arroz Frito do Sanji",
        "sub": "O arroz frito com frutos do mar que Sanji faz para salvar Gin no Baratie.",
        "tempo": "25 min",
        "porcoes": "2",
        "unidade": "Porções",
        "dificuldade": "Fácil",
        "intro": "Este prato aparece no anime One Piece, preparado pelo cozinheiro Sanji no Episódio 21 (\"Um Cliente Indesejado! A Comida de Sanji e a Dívida de Gin\"). Na cena, após o pirata Gin ser expulso do restaurante flutuante Baratie por estar sem dinheiro e morrendo de fome, Sanji prepara esse arroz frito bem quente e aromático nos bastidores para salvar a vida dele.",
        "ingredientes": [
            {
                "grupo": "",
                "itens": [
                    "2 xícaras de arroz branco já cozido (de preferência frio ou do dia anterior, para ficar bem soltinho)",
                    "150 g de camarões médios limpos e descascados",
                    "100 g de lula cortada em anéis ou cubinhos (opcional; pode substituir por mais camarão ou kani)",
                    "2 ovos batidos",
                    "2 dentes de alho bem picados",
                    "1/2 cebola pequena picada em cubos finos",
                    "2 colheres (sopa) de cebolinha verde picada",
                    "1 colher (sopa) de molho shoyu",
                    "1 colher (sopa) de óleo de gergelim (ou óleo vegetal comum)",
                    "1 colher (sopa) de manteiga",
                    "Sal e pimenta-do-reino a gosto"
                ]
            }
        ],
        "passos": [
            {
                "titulo": "Tempere os frutos do mar",
                "texto": "Tempere os camarões e a lula com uma pitada de sal e pimenta-do-reino. Reserve."
            },
            {
                "titulo": "Faça os ovos mexidos",
                "texto": "Aqueça uma frigideira grande ou wok em fogo alto com metade do óleo. Despeje os ovos batidos, mexa rapidamente até formarem pedaços macios e retire para um prato à parte."
            },
            {
                "titulo": "Salteie os frutos do mar",
                "texto": "Na mesma frigideira, adicione o restante do óleo e salteie os camarões e a lula por cerca de 2 minutos, apenas até ficarem rosados e cozidos. Retire e reserve junto com os ovos."
            },
            {
                "titulo": "Refogue alho e cebola",
                "texto": "Abaixe para fogo médio, derreta a manteiga e refogue o alho e a cebola por 1 minuto até começarem a dourar."
            },
            {
                "titulo": "Frite o arroz",
                "texto": "Volte para o fogo alto, adicione o arroz cozido e mexa constantemente com a espátula por 2 a 3 minutos para fritar e soltar bem os grãos."
            },
            {
                "titulo": "Junte tudo",
                "texto": "Retorne os frutos do mar e os ovos mexidos para a frigideira, incorporando tudo ao arroz."
            },
            {
                "titulo": "Finalize com shoyu",
                "texto": "Despeje o molho shoyu pelas bordas internas da frigideira para dar um leve sabor defumado, misture bem, finalize com a cebolinha picada e sirva imediatamente."
            }
        ],
        "anime": "One Piece",
        "episodio": "Episódio 21",
        "categoria": "Prato principal",
        "emoji": "🍤",
        "cor": [
            "#FFB703",
            "#6a040f"
        ],
        "poster": "imgs/Sanji.jpg",
        "personagem": "Sanji",
        "utensilios": [
            "Wok ou frigideira grande",
            "Espátula",
            "Tigela para os ovos",
            "Faca e tábua"
        ],
        "dica": "Arroz do dia anterior solta melhor e não empapa. Se o arroz for fresquinho, deixe esfriar antes.",
        "falas": {
            "visao": "Cozinhar também é uma forma de cuidar de alguém.",
            "ingredientes": "Ingrediente fresco faz toda a diferença. Confira a lista.",
            "separado": "Tudo em ordem. A cozinha é o meu campo de batalha!",
            "passos": [
                "Fogo alto e movimento constante: esse é o segredo.",
                "Sem pressa, mas sem enrolar: o arroz não espera.",
                "Esse aroma… perfeito."
            ],
            "fim": "Prato pronto! Sirva bem quente.",
            "cutucar": [
                "Por favor, não encoste na minha cozinha.",
                "Um cozinheiro nunca deixa ninguém passar fome.",
                "Quem vai provar primeiro?"
            ]
        },
        "capa": "imgs/capas/sanji.jpg",
        "logo": "imgs/logos/one-piece.png"
    },
    {
        "id": "senku",
        "titulo": "Cola do Senku",
        "sub": "O refrigerante de cola feito só com coentro, limão e mel, direto do Mundo de Pedra.",
        "tempo": "30 min",
        "porcoes": "2",
        "unidade": "Copos",
        "dificuldade": "Média",
        "intro": "Esta receita aparece no anime Dr. Stone, criada pelo protagonista Senku Ishigami no Episódio 15 da 1ª temporada (\"O Culminar de Dois Milhões de Anos\"). Para selar de vez a aliança com o mentalista Gen Asagiri no Mundo de Pedra, Senku cumpre a promessa de recriar uma garrafa de refrigerante de cola gelado usando apenas ingredientes naturais encontrados na natureza, combinando a química dos aromas do coentro e do limão com mel caramelizado.",
        "ingredientes": [
            {
                "grupo": "",
                "itens": [
                    "1/4 de xícara (cerca de 5 g) de folhas e talos de coentro fresco",
                    "Raspas e suco de 1 limão (taiti ou siciliano)",
                    "4 a 5 colheres (sopa) de mel",
                    "250 ml de água com gás bem gelada",
                    "Pedras de gelo a gosto"
                ]
            }
        ],
        "passos": [
            {
                "titulo": "Raspe e esprema o limão",
                "texto": "Lave bem o limão e retire as raspas da casca (evitando a parte branca para não amargar). Depois, corte-o e esprema o suco em um recipiente à parte."
            },
            {
                "titulo": "Amasse o coentro",
                "texto": "Em um pilão ou tigela resistente, amasse bem as folhas e os talos de coentro junto com as raspas de limão até formar uma pasta verde bem úmida e aromática. A junção dos óleos naturais do coentro com o cítrico do limão é o que cria o cheiro e a base do sabor de cola."
            },
            {
                "titulo": "Coe o líquido",
                "texto": "Despeje o suco de limão sobre essa pasta, misture bem e passe tudo por uma peneira fina, pressionando com as costas de uma colher para extrair todo o líquido concentrado. Descarte o bagaço e reserve o líquido."
            },
            {
                "titulo": "Carameliza o mel",
                "texto": "Em uma panela pequena em fogo médio-baixo, coloque o mel e aqueça mexendo sempre até ferver, espumar e atingir uma cor âmbar escura (ponto de caramelo, com um leve aroma tostado). Fique atento para não queimar demais."
            },
            {
                "titulo": "Faça o xarope",
                "texto": "Desligue o fogo e despeje imediatamente o líquido coado de limão e coentro sobre o mel caramelizado, misturando rápido antes que endureça, até obter um xarope escuro e homogêneo. Deixe amornar."
            },
            {
                "titulo": "Monte a bebida",
                "texto": "Coloque gelo em um copo, adicione de 3 a 4 colheres (sopa) do xarope de cola no fundo e complete devagar com a água com gás bem gelada. Mexa suavemente para não perder o gás e sirva na hora."
            }
        ],
        "anime": "Dr. Stone",
        "episodio": "Episódio 15 (1ª temporada)",
        "categoria": "Bebida",
        "emoji": "🥤",
        "cor": [
            "#2EC4B6",
            "#240046"
        ],
        "poster": "imgs/Doutor.jpg",
        "personagem": "Senku",
        "utensilios": [
            "Pilão ou tigela resistente",
            "Peneira fina",
            "Panela pequena",
            "Copo alto"
        ],
        "dica": "Fique de olho no mel: do âmbar ao queimado são poucos segundos. Tenha o líquido coado pronto antes de caramelizar.",
        "falas": {
            "visao": "Hora da ciência culinária! Vamos recriar a cola do zero.",
            "ingredientes": "Poucos ingredientes, mas cada um tem um papel químico.",
            "separado": "Materiais prontos. Começando o experimento!",
            "passos": [
                "Anote: o ponto do caramelo decide tudo.",
                "Isso é pura química, e funciona toda vez.",
                "Quase lá. Observe a cor do mel."
            ],
            "fim": "Resultado: sucesso total. Experimento concluído!",
            "cutucar": [
                "Não me distraia, estou calculando.",
                "A ciência deixa tudo mais gostoso.",
                "Quer saber como funciona o coentro? É só perguntar."
            ]
        },
        "capa": "imgs/capas/senku.jpg",
        "logo": "imgs/logos/dr-stone.png"
    },
    {
        "id": "vegeta",
        "titulo": "Takoyaki do Vegeta",
        "sub": "Os bolinhos de polvo que o príncipe dos Saiyajins faz para acalmar o Deus da Destruição.",
        "tempo": "40 min",
        "porcoes": "16",
        "unidade": "Bolinhas",
        "dificuldade": "Média",
        "intro": "Esta receita aparece no anime Dragon Ball Super, preparada pelo próprio Vegeta no Episódio 6 (\"Não Irritem o Deus da Destruição! Uma Festa de Aniversário Animada!\"). Durante a festa de aniversário da Bulma a bordo de um navio de cruzeiro, Vegeta entra em desespero para manter Bills, o Deus da Destruição, de bom humor e impedir que ele destrua a Terra. Para agradar o paladar exigente do deus, o príncipe dos Saiyajins mergulha no mar para capturar um polvo gigante e assume a chapa para cozinhar takoyaki em velocidade supersônica, sem imaginar que Kuririn havia escondido uma porção exagerada de wasabi em um dos bolinhos.",
        "ingredientes": [
            {
                "grupo": "Massa",
                "itens": [
                    "1 xícara (chá) de farinha de trigo peneirada",
                    "1 e 1/2 xícara (chá) de caldo dashi frio (ou 1 e 1/2 xícara de água filtrada misturada com 1 colher de chá de hondashi, o tempero japonês de peixe)",
                    "2 ovos grandes",
                    "1 colher (chá) de molho shoyu",
                    "1 pitada de sal",
                    "Óleo vegetal para untar a forma"
                ]
            },
            {
                "grupo": "Recheio",
                "itens": [
                    "150 g de tentáculos de polvo já cozidos e cortados em cubos pequenos (cerca de 1,5 cm)",
                    "1/4 de xícara de cebolinha verde bem picada",
                    "2 colheres (sopa) de gengibre em conserva picado (beni shoga), opcional, mas dá o toque ácido tradicional",
                    "1/4 de xícara de tenkasu (flocos crocantes de massa de tempurá frita), opcional; pode substituir por batata palha bem triturada para dar textura interna",
                    "Opcional (modo \"pegadinha do Kuririn\"): uma ponta de pasta de wasabi para rechear um único bolinho"
                ]
            },
            {
                "grupo": "Cobertura (finalização)",
                "itens": [
                    "Molho para takoyaki ou molho tonkatsu (caso não encontre, misture 2 colheres de sopa de ketchup, 1 colher de sopa de molho inglês, 1 colher de chá de shoyu e 1 colher de chá de açúcar mascavo ou mel)",
                    "Maionese japonesa (Kewpie) ou maionese tradicional",
                    "Flocos de peixe bonito seco (katsuobushi) a gosto",
                    "Alga aonori em pó (ou folha de alga nori bem triturada) a gosto"
                ]
            }
        ],
        "passos": [
            {
                "titulo": "Prepare a massa líquida",
                "texto": "em uma tigela, bata os ovos com um fouet (batedor de arame). Adicione o caldo dashi frio, o shoyu e o sal, misturando bem. Acrescente a farinha de trigo aos poucos e mexa até obter uma massa bem lisa, rala e sem grumos (ela deve ficar mais líquida do que massa de panqueca). Se possível, transfira para uma jarra com bico para facilitar na hora de despejar."
            },
            {
                "titulo": "Aqueça e unte a chapa",
                "texto": "aqueça uma forma própria para takoyaki (ou uma máquina elétrica de cake pop) em fogo médio. Pincele todas as cavidades e também a superfície plana ao redor delas com bastante óleo vegetal."
            },
            {
                "titulo": "Despeje a massa e recheie",
                "texto": "preencha cada cavidade com a massa até transbordar levemente por cima da chapa. Coloque imediatamente um ou dois cubinhos de polvo no centro de cada buraco e espalhe a cebolinha, o gengibre picado e os flocos crocantes por cima de tudo."
            },
            {
                "titulo": "Modele os bolinhos",
                "texto": "depois de 1 a 2 minutos, quando as bordas começarem a firmar, use um palito de bambu (ou hashi) para separar a massa entre uma cavidade e outra. Empurre as sobras de massa das bordas para dentro de cada buraco e vire cada bolinho de lado (90 graus), deixando a massa ainda crua escorrer para o fundo da cavidade."
            },
            {
                "titulo": "Doure por igual",
                "texto": "aguarde mais 1 minuto e termine de girar cada bolinho por completo (180 graus) para fechar a esfera. Continue virando os bolinhos na chapa por mais 2 a 3 minutos até ficarem bem redondinhos, dourados e crocantes por fora, mantendo o interior cremoso."
            },
            {
                "titulo": "Finalize e sirva",
                "texto": "retire os bolinhos bem quentes para uma barquinha ou prato. Regue com o molho escuro, faça fios de maionese por cima, polvilhe a alga triturada e finalize com os flocos de katsuobushi (que vão se mexer com o vapor quente dos bolinhos)."
            }
        ],
        "anime": "Dragon Ball Super",
        "episodio": "Episódio 6",
        "categoria": "Petisco",
        "emoji": "🐙",
        "cor": [
            "#00B4D8",
            "#03045e"
        ],
        "poster": "imgs/Vegeta.jpg",
        "personagem": "Vegeta",
        "utensilios": [
            "Forma de takoyaki (ou máquina de cake pop)",
            "Palito de bambu",
            "Jarra com bico",
            "Fouet",
            "Pincel de cozinha"
        ],
        "dica": "A massa precisa ficar bem mais líquida que a de panqueca: é isso que deixa o interior cremoso.",
        "falas": {
            "visao": "Hmpf. Faça direito, ou o Bills destrói tudo.",
            "ingredientes": "Nada de improviso. Confira cada item!",
            "separado": "Tudo reunido. Agora cozinhe como um verdadeiro Saiyajin!",
            "passos": [
                "Mais rápido! O Bills não tem paciência.",
                "Vire os bolinhos com precisão. Nada de bagunça.",
                "Hmpf… até que não está ruim."
            ],
            "fim": "Pronto. Ninguém vai chorar hoje. Pode servir!",
            "cutucar": [
                "Não me interrompa, estou concentrado.",
                "O orgulho de um príncipe não permite takoyaki queimado.",
                "E nem pense em esconder wasabi nisso."
            ]
        },
        "capa": "imgs/capas/vegeta.jpg",
        "logo": "imgs/logos/dragon-ball-super.png"
    }
];