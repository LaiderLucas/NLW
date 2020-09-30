# :school: Proffy
##### Open Source software desenvolvido pela rocketseat durante a 2º Edição da NLW #####
###### Trilha Booster
Tecnologias Utilizadas:
  - Node.Js
  - Express
  - Nodemon
  - Nunjuks
  - SQLite3

Um pouco sobre:
> O Software Proffy foi o desenvolvido com o intuito de auxiliar na conexão entre estudantes e professores para ajudar no aprendizado, para seu desenvolvimento foram utilizados além as tecnologias acima, o [HTML5] ,  [CSS3], além é claro do [JAVASCRIPT], durante o desenvolvimento, foram abordados vários conceitos, dentrele eles, conceitos de Front e Back-End, conceitos de Responsividade, Verbos HTTP, bancos de Dados, Mobile First, além de apresentar desafios para que possamos aperfeiçoar os conceitos aprendidos durante a semana.

Funcionalidades:
  - Cadastro de Professores
  - Cadastro de horários personalizados por dia da semana, horário e disciplina
  - Busca por horários, dia da semana, horário e disciplina
  - Lista os professores com seus respectivos horário de cada dia da semana
  - Contagem de Conexãoes já feitas
  - Link Direto para conversa pelo WhatsApp
  - Tela de Confirmação de Cadastro (Com redirecionamento)


### Como fazer a instalação:
 
 Clonando o Projeto
 
 ```
 git clone <link>
 ```
 
 Instalando todas as dependencias
 
 ```
 npm install
 ```
 
 Depois é só executar
 
 ```
 npm run dev
 ```

# Desafios

## 01 - Página de sucesso

:white_check_mark: Mostrar página de sucesso após o cadastro do proffy
- aguardar 2 segundos na página e redirecionar para a listagem dos proffys, com filtro
    - use `setTimeout()` para aguardar os 2 segundos
    - `location.href = ""`
#### Solução
 - Criado a página de sucesso de acordo com o layout do Figma
 - Criado a rota para renderizar a página caso de Sucesso ao Cadastrar
 - Add a função `setTimeout()` para fazer a espera de 2 segundos e utilizado o `location.href = ""` para fazer o redirecionamento para página (inclusive com os dados que acabaram de ser cadastrado)

## 02 - Correção de bugs

:white_check_mark: Não permitir o usuário colocar um novo campo de dia e horário, se o dia e hora anterior estiver vazio
#### Solução
 - Adicionado uma função no função de adicionar campo, que ao clicar para adicionar, verifica se os valores do ultimo elemento filho é diferente de vazio, caso seja ele adiciona um novo campo, caso contrário exibe um alerta, não me preocupei com os demais, porque mesmo que o usuário tire os valores, o processo de validação do `required` do HTML5 já faz essa validação para não deixar o form ir com dados vazio.
 
:white_check_mark: Funcionalidade de deletar um campo de dia e hora
#### Solução
 - reaproveitado a estrategias de pegar o ultimo elemento filho do elemento selecionado, que nesse caso é o que o botão clicado faz parte e usado a função `.remove()` para remover o elemento.
 
 # Features

 :white_check_mark: Adicionar os horários de cada dia da semana, e deixando opaco os dias que não tem horário
 
 #### Solução
  - Adotado a estratégia de buscar os horários selecionando eles pelo `class_id` deles e adicionado em um vetor de objetos usando a funcionalidade `for .. of`, que me ajudou no problema da criação do vetor de objetos. Depois disso foi tranquilo montar a lógica para renderzar na página, bastou usar `for` e `if` no `nunjucks `
  
  :white_check_mark: Registra a contagem de conexão já feitas
  
  #### Solução
   - Adotado a estratégia de salvar o ID do proffy que for clicado para futura funcionalidade (Contagem de clicks, categorizar por número de clicks, maior relevância e ETC), para isso foi adotado a estratégia de adicionar o `form` envolvendo o botão com dois `inputs` escondidos, sendo um para enviar o ID e outro a URL da API do whatsApp com as informações de cada proffy. Feito isso, foi adicionado uma rota para receber essas informações, salvar no banco e redirecionar para API do whatsApp

  
  :white_check_mark: Exibir a contagem de conexão já feitas
  
  #### Solução
   - Adotado a estratégia de utilizar a rota para fazer o `select count` na tabela de registro de conexãoes, e depois passo isso para a tela de inicio `\`
