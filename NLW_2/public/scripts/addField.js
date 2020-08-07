// procura elemento html
document.querySelector("#add-time")
// vai ficar ouvindo o evento do elemento selecionado
.addEventListener('click', cloneField)

// definir a função a ser executada ao disparar o evento
function cloneField() {
    // clono o elemento selecionado
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegando inputs
    const fields = newFieldContainer.querySelectorAll('input')

    // atribuindo a cada campo valor vazio
    fields.forEach(function(field) {
        field.value = ""
    })

    // defino o local a ser adicionado na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}