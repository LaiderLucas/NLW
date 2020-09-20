function cloneField() {
      //Seleciona todos os elementos com a classe schedule
    const newFieldContainer = document.querySelectorAll('.schedule')
  
    // loop para pegar cada elemento contido dentro do vetor e verifica cada um deles para add a classe de opacidade
    for ( fieldContainer of newFieldContainer ){
        // pela o elemento b para a verificação de adição da classe
        const fields = fieldContainer.querySelector('b')
        // verifica se o elemento b selecionado acima é null, caso seja adiciona as classes schedule e opacity
        if (fields == null) {
            //adicionando as classes ao elemento
            fieldContainer.setAttribute('class', 'schedule opacity')
        }
    }
}
// chama a função para execução
cloneField()
