const express = require("express")
const server = express()

// importando o banco de dados
const db = require("./database/db")

// configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação

server.use(express.urlencoded({ extended: true }))

// utilizando template
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: false
})

//configurando rotas da aplicação
server.get("/", (req, res) => {
   return res.render("index.html")
})

server.get("/create-point", (req, res) => {
   return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
   
       // inserir dados na tablela
       const query = `
       INSERT INTO places (
           image,
           name,
           address,
           address2,
           state,
           city,
           items
       ) VALUES ( ?, ?, ?, ?, ?, ?, ? );
   `
   const values = [
       req.body.image,
       req.body.name,
       req.body.address,
       req.body.address2,
       req.body.state,
       req.body.city,
       req.body.items
   ]

   function afterInsertData(err){
       if(err) {
        return res.render("create-point.html", { saved: false })
       }

       return res.render("create-point.html", { saved: true })
   }

   db.run(query, values, afterInsertData)


})

server.get("/search", (req, res) => {

   const search = req.query.search

   if(search == "") {

      return res.render("search-results.html", { total: 0 })

   }

   // consultando os dados do bd
   db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
      if(err) {
            return console.log(err)
      }

      // pegando o total de registro encontrado
      const total = rows.length

      // mostrar a página html com os dados do banco de dados
      return res.render("search-results.html", { places: rows, total })
   })

 })

//ligar o servidor
server.listen(3000)