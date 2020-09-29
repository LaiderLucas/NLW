const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, saveSuccess, addConnections } = require('./pages')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.urlencoded({ extended: true})) // receber dados do req.body
.use(express.static("public"))
.get("/", pageLanding)
.get("/study",pageStudy)
.post("/study",addConnections)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.get("/success", saveSuccess)
.listen(5000)
