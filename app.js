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

function sortearAmigo() {
    // Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
    if(amigos.length > 0) { 
        // Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.        
        let numeroSorteado = amigos.length;
        while(numeroSorteado > amigos.length-1) {
            numeroSorteado = Math.random() * 10;
            numeroSorteado = Math.floor(numeroSorteado);
           
        }
        console.log(numeroSorteado);
        document.querySelector('#resultado').innerHTML = amigos[numeroSorteado];
    }
}

// Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.


// Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.