// procura elemento html
document.querySelector("#add-time")
// vai ficar ouvindo o evento do elemento selecionado
.addEventListener('click', cloneField)

function removeField() {
    const newFieldContainer = document.querySelector('#schedule-items').lastElementChild
    newFieldContainer.remove()
}

// definir a função a ser executada ao disparar o evento
function cloneField() {
    let addControl = false
    // clono o elemento selecionado
    const newFieldContainer = document.querySelector('#schedule-items').lastElementChild.cloneNode(true)
    // pegando inputs
    const fields = newFieldContainer.querySelectorAll('input')

    // atribuindo a cada campo valor vazio
    fields.forEach(function(field) {
        console.log(field)
        if (field.value != "") {
            field.value = ""
            addControl = true

        } else {
            addControl = false
        }
        
    })

    // defino o local a ser adicionado na página
   if (addControl == true) {
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    } else {
        alert('Verifique os campos')
    }
    
}