document.querySelector("button").addEventListener("click", async () => { //async indica que dentro da função tem algo assíncrono
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;
  const resposta = await fetch("http://localhost:3000/usuarios/login" , { //await indica que o código deve esperar a resposta da requisição
    method: "POST",//método de envio]
    headers: {
      "Content-Type": "application/json" //tipo de conteúdo que está sendo enviado
    },
    body: JSON.stringify({ //stringify transorma o objeto em string
        "email": email,
        "senha": senha
    }),
  });
  if (resposta.status === 200) {
    return (window.location.href =  "../Perfil/perfil.html"); //redireciona para a página de perfil
  }
  alert("Email ou senha incorretos");
});