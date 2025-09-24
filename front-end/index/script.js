window.addEventListener("load", async () => {
  const div_root = document.querySelector("#root");

  try {
    const resposta = await fetch("http://localhost:3000/perfil");
    const produtos = await resposta.json();

    produtos.map((p) => {
      const div_card = document.createElement("div");
      div_card.classList.add("card");

      const imagem_card = document.createElement("img");
      imagem_card.src = p.imagem;

      const overlay = document.createElement("div");
      overlay.classList.add("overlay");

      const titulo_card = document.createElement("h5");
      titulo_card.innerText = p.titulo;

      const preco_card = document.createElement("h6");
      preco_card.innerText = "R$ " + p.preco;

      overlay.appendChild(titulo_card);
      overlay.appendChild(preco_card);

      div_card.appendChild(imagem_card);
      div_card.appendChild(overlay);
      div_root.appendChild(div_card);
    });
  } catch (error) {
    console.error("Erro ao buscar produtos da API:", error);
    div_root.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
  }
});

