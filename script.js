let tarefas = [];

function adicionarTarefa(){

    let campo = document.getElementById("novaTarefa");

    let texto = campo.value.trim();

    if(texto === ""){

        alert("Digite uma tarefa.");

        return;

    }

    tarefas.push(texto);

    campo.value="";

    listarTarefas();

}

function listarTarefas(){

    let lista = document.getElementById("listaTarefas");

    lista.innerHTML="";

    for(let i=0;i<tarefas.length;i++){

        lista.innerHTML +=
        `
        <li>

            ${tarefas[i]}

            <button
            class="excluir"
            onclick="excluirTarefa(${i})">

            Excluir

            </button>

        </li>

        `;

    }

}

function excluirTarefa(indice){

    tarefas.splice(indice,1);

    listarTarefas();

}