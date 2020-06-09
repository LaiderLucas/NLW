// itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // add ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // isso sera true ou false
        return itemFound
    })

    // se ja estiver selecionado

    if( alreadySelected >= 0 ) {
        // tira da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemsIsDifferent = item != itemId // false
            return itemsIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // se não estiver selecionado
        // adicionar á seleção
        selectedItems.push(" " +itemId)
    }

    // atualizar o campo escondido com os itens selecionados

    collectedItems.value = selectedItems
}

