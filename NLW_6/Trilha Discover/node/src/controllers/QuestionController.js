const Database = require('../db/config')
module.exports = {
    async index(req, res) {
        const db = await Database()
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password
        console.log(questionId)

        var stmt = await db.prepare(`SELECT * FROM rooms WHERE  id=?`)
        const verifyRoom = await stmt.get(roomId)
        stmt.finalize()

        if (verifyRoom.pass === password) {
            if (action == 'delete') {

                stmt = await db.prepare(`DELETE FROM questions WHERE id= ? `)
                await stmt.run(questionId)
                stmt.finalize()

            } else if (action == 'check') {

                stmt = await db.prepare(`UPDATE questions SET read = ? WHERE id= ? `)
                await stmt.run('1',questionId)
                console.log(stmt)
                stmt.finalize()
            }
            res.redirect(`/room/${roomId}`)
        }else {
            res.render('passincorrect', {roomId: roomId})
        }
        db.close();
    },

    async create(req, res) {
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        save = await db.prepare('INSERT INTO questions (title, room, read ) VAlUES (?,?,?)')
        save.run(question, roomId, '0')
        save.finalize();
        db.close();
        res.redirect(`/room/${roomId}`)

    }
}