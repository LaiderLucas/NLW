const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHoursToMinutes, convertMinutesToHours } = require('./utils/format')
const db = require('./database/db')


function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {

        return res.render("study.html", { filters, subjects, weekdays })
    }

    const timeToMinutes = convertHoursToMinutes(filters.time)

    const query = `
        SELECT classes.id as class_id, classes.subject, classes.cost, classes.proffy_id, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.id
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = '${filters.subject}'
    `

    try {

        const db = await Database

        async function querySchedules(class_id) {
            const querySchedule = `
            SELECT * FROM class_schedule where class_id = ${class_id} order by weekday`

            const schedule = await db.all(querySchedule)


            return schedule
        }

        const Proffys = await db.all(query)


        Proffys.map(async (proffy) => {
            proffy.subject = getSubject(proffy.subject)
        })

        const schedules = []
        async function teste() {

            for (const [id, proffy] of Proffys.entries()) {

                const getSchedules = await querySchedules(proffy.class_id)

                getSchedules.map((time) => {
                    time.time_from = convertMinutesToHours(time.time_from)
                    time.time_to = convertMinutesToHours(time.time_to)
                })

                schedules.push(getSchedules)
            }
        }

        await teste()

        console.log(schedules)



        return res.render('study.html', { Proffys, subjects, filters, weekdays, schedules })

    } catch (error) {
        console.log(error)
    }
}

function pageGiveClasses(req, res) {

    return res.render("give-classes.html", { subjects, weekdays })
}

async function saveClasses(req, res) {
    const createProffy = require("./database/createProffy")

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    const classScheduleValues = req.body.weekday.map((weekday, index) => {

        return {
            weekday,
            time_from: convertHoursToMinutes(req.body.time_from[index]),
            time_to: convertHoursToMinutes(req.body.time_to[index])
        }
    })

    try {
        const db = await Database
        await createProffy(db, { proffyValue, classValue, classScheduleValues })

        let queryString = "?subject=" + req.body.subject
        queryString += "&weekday=" + req.body.weekday[0]
        queryString += "&time=" + req.body.time_from[0]

        return res.render("success.html", { queryString })
    } catch (error) {
        console.log(error)

    }

}

function saveSuccess(req, res) {
    return res.render("success.html")
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    saveSuccess
}