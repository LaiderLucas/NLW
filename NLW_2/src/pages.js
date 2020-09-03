const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHoursToMinutes, convertMinutesToHours } = require('./utils/format')
const db = require('./database/db')


function pageLanding(req, res){
    return res.render("index.html")
}

async function pageStudy(req, res){
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {

        return res.render("study.html", {filters, subjects, weekdays })
    }

    const timeToMinutes = convertHoursToMinutes(filters.time)
    
    const query = `
        SELECT classes.id as class_id, classes.subject, classes.cost, classes.proffy_id, proffys.*, proffys.id as schedule
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

   

    /*
    async function weekdayList(class_id){
        const db = await Database
        const List =  await db.all( await querySchedules(class_id))
        List.map( (schedule) => {
            schedule.weekday = weekdays[schedule.weekday]
            schedule.time_from = convertMinutesToHours(schedule.time_from)
            schedule.time_to = convertMinutesToHours(schedule.time_to)
        }) 
        return List
    }
    */
    
    try {
        
        const db = await Database

        async function querySchedules(class_id){
            const querySchedule = `
            SELECT * FROM class_schedule where class_id = ${class_id}`
            
            const schedule = "lkdfn"//await db.all(querySchedule)
            

            return schedule
        }

        const proffys = await db.all(query)
        proffys.map( async (proffy) => {
            proffy.subject = getSubject(proffy.subject)
            const getSchedules =  await querySchedules(proffy.class_id)
            proffy.schedule = getSchedules
            console.log(getSchedules)

        })

        console.log(proffys)

        return res.render('study.html', {proffys, subjects, filters, weekdays})

    } catch (error) {
        console.log(error)
    }
}

function pageGiveClasses(req, res){

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

    const classScheduleValues = req.body.weekday.map( (weekday, index) =>{

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
        
        return res.render("success.html", {queryString} )
    } catch (error) {
        console.log(error)
        
    }

}

function saveSuccess(req, res){
    return res.render("success.html")
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    saveSuccess
}