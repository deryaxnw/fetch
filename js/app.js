const form = document.getElementById("data");


window.onload = () => {
    colocarFoco(form.cep);
}



form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const cep = form.cep.value; // Captura o valor do campo "cep"

    if (cep.length !== 8) {
        return;
    }

    await buscar(cep); // Passa o CEP para a função buscar
});

async function buscar(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        

        const dados = await response.json();

        // Preenche os campos com os dados retornados

        form.logradouro.value = dados.logradouro;
        form.bairro.value = dados.bairro;
        form.localidade.value = dados.localidade;
        form.estado.value = dados.estado; 
        form.regiao.value = dados.regiao;
        
    } catch (error) {
        console.error(error);
    }

        // Limpa o campo de CEP
        limparCEP();

        // Coloca o foco no campo Número
        colocarFoco(form.numero);
}

function limparCEP() {
    form.cep.value = '';
}

function colocarFoco(campo) {
    campo.focus();
}
