function populateUFs() {
    const ufSelect = document.querySelector("select[id=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {
        for ( state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[id=city]")
    const stateInput = document.querySelector("input[id=state]")

    const ufValue = event.target.value

    const indexOFSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOFSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.disabled = true
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"

    fetch(url)
    .then( res => res.json())
    .then( cities => {
        for ( city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })

}
document
    .querySelector("select[id=uf]")
    .addEventListener("change", getCities)