// procura elemento html
document.querySelector("#add-time")
// vai ficar ouvindo o evento do elemento selecionado
.addEventListener('click', cloneField)

// função de remoção do campo
function removeField() {
    //reaproveitando a estrategias de pegar o ultimo elemento filho do elemento selecionado, que nesse caso é a que o botão clicado faz parte
    const newFieldContainer = document.querySelector('#schedule-items').lastElementChild
    newFieldContainer.remove()
}

// definir a função a ser executada ao disparar o evento
function cloneField() {
    let addControl = false
    // clono o elemento selecionado, pegando o útimo elemento renderizado na tela
    const newFieldContainer = document.querySelector('#schedule-items').lastElementChild.cloneNode(true)
    // pegando inputs
    const fields = newFieldContainer.querySelectorAll('input')

    // verifica se os campos anteriores estão vazios e atribui valores vazios para o novos campos adicionados
    fields.forEach(function(field) {
        console.log(field)
        if (field.value != "") {
            field.value = ""
            addControl = true

        } else {
            addControl = false
        }
        
    })

    // verifica o estado da variavel de controle para emitir um alerta ou executar a função de add os campos de horario
   if (addControl == true) {
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    } else {
        alert('Verifique os campos')
    }
    
}