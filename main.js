
const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

function limpa_formulário() {
    document.querySelector("#"+campo).value("")
}

cep.addEventListener("blur", (e) =>{
    let numbers_cep = cep.value

    const options = {
        method : 'GET',
        mode : 'cors',
        cache : 'default',
    }

    console.log(cep.value)

    fetch(`https://viacep.com.br/ws/${numbers_cep}/json/`, options)
     .then((response) => {response.json()
        .then(data => showData(data))
    })
    .catch(e => alert("Insira um CEP válido"))
});
