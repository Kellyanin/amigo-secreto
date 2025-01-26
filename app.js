//O principal objetivo deste desafio é fortalecer suas habilidades 
// em lógica de programação. Aqui você deverá desenvolver a lógica 
// para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    // Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
    let amigo = document.querySelector('#amigo').value;
    console.log(amigo);
    // Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    // Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

    if (amigo == ''){
        alert ("Por favor, insira um nome.");
    } else {
        // Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
        amigos.push(amigo);
        
        // Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
        document.querySelector('#amigo').value = '';
    }

    // Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
    let listaDeAmigos = document.querySelector('#listaAmigos');

    // Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
    listaDeAmigos.innerHTML = "";

    // Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
    for (let i = 0; i < amigos.length; i++) {
        // Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
        listaDeAmigos.innerHTML += '<li>'+ amigos[i] + '</li>';
    }
}