const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true

        while (isRoom) {

            for (var i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                    roomId += Math.floor(Math.random() * 10).toString()
            }

            const roomsExistIds = await db.all(`SELECT id  FROM rooms`)

            isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId)

            if (!isRoom) {
                 save = await db.prepare('INSERT INTO rooms (id, pass ) VAlUES (?,?)')
                 save.run( (parseInt(roomId)), pass)
                 save.finalize();
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },
   async open(req, res){
        const db = await Database()
        const roomId = req.params.room

        var stmt = await db.prepare(`SELECT * FROM questions WHERE room = ? AND read = ?`)
        const questions = await stmt.all(roomId,'0')
        stmt.finalize()

        stmt = await db.prepare(`SELECT * FROM questions WHERE room = ? AND read = ?`)
        const questionsRead = await stmt.all(roomId,'1')
        stmt.finalize()
        let isNoQuestions
        if(questions.length == 0) {
            if(questionsRead.length == 0) {
                isNoQuestions = true
            }

        }

        res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions })
        await db.close()
    },

    enter(req, res) {
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)

    }
}