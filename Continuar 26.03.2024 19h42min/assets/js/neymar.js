function carregar() {
    fetch('assets/json/neymar.json')
        .then(response => response.json())
        .then(jogos => {
            const conteiner = document.querySelector("#jogos-conteiner");

            // Criar uma div envolvente para todos os jogos
            const divJogos = document.createElement("div");
            divJogos.classList.add("jogosClass");

            for (let i = 0; i < jogos.length; i++) {
                const jogo = jogos[i];
                const span = document.createElement("span");
                span.classList.add("card");

                const divImg = document.createElement("div");
                divImg.classList.add("imgClass");

                const img = document.createElement("img");
                img.src = jogo.imagem;
                img.alt = jogo.nome;

                const divPrecos = document.createElement("div");
                divPrecos.classList.add("precosClass");

                const titulo = document.createElement("h3");
                titulo.classList.add("h3Titulo");
                titulo.textContent = jogo.nome;

                const precoNormal = document.createElement("h3");
                precoNormal.classList.add("h3PrecoNormal");
                precoNormal.textContent = jogo.precoNormal;

                const precoPromo = document.createElement("h3");
                precoPromo.classList.add("h3PrecoPromo");
                precoPromo.textContent = jogo.precoPromo;

                // Adiciona a imagem da loja
                const divImgLoja = document.createElement("div");
                divImgLoja.classList.add("imgLojaClass");
                divImg.appendChild(divImgLoja);

                const imgLoja = document.createElement("img");
                imgLoja.src = jogo.imagemLoja;
                imgLoja.alt = "";
                divImgLoja.appendChild(imgLoja);

                // Adiciona a imagem do produto
                const divImgProduto = document.createElement("div");
                divImgProduto.classList.add("imgProdutoClass");
                divImg.appendChild(divImgProduto);

                const imgProduto = document.createElement("img");
                imgProduto.src = jogo.imagemProduto;
                imgProduto.alt = "";
                divImgProduto.appendChild(imgProduto);

                span.appendChild(divImg);
                divPrecos.appendChild(titulo);
                divPrecos.appendChild(precoPromo);
                divPrecos.appendChild(precoNormal);
                
                // Adiciona o botão de pegar promoção após os elementos de texto
                divPrecos.appendChild(document.createElement("br")); // Adiciona uma quebra de linha
                const botao = document.createElement("button");
                botao.classList.add("botaoClass");
                botao.textContent = "Pegar promoção";
                divPrecos.appendChild(botao);

                span.appendChild(divPrecos);
                divJogos.appendChild(span);
            }

            // Adicionar a div envolvente ao conteiner
            conteiner.appendChild(divJogos);
        })
        .catch(error => console.error('Erro ao carregar os jogos:', error));
}

// Chame a função carregar para carregar os jogos quando a página carregar
carregar();
