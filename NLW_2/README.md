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

- [x] Mostrar página de sucesso após o cadastro do proffy
- aguardar 2 segundos na página e redirecionar para a listagem dos proffys, com filtro
    - use setTimeout para aguardar os 2 segundos
    - location.href = ""

## 02 - Correção de bugs

- [x] Não permitir o usuário colocar um novo campo de dia e horário, se o dia e hora anterior estiver vazio
- [x] Funcionalidade de deletar um campo de dia e hora


![Convite](https://github.com/LaiderLucas/NLW/blob/master/NLW_2/Inscri%C3%A7%C3%A3o.png)