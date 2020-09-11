const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1 
    return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + parseInt(minutes))
}

function convertMinutesToHours(time) {
    
    let hour = parseInt((time/60))
    let minute = (time - (hour*60))
    if (hour < 10){
        hour = "0" + hour
    }
    if (minute < 10){
        minute = "0" + minute
    }
    const hourFormated = hour + ":" + minute
    return hourFormated
    

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes,
    convertMinutesToHours
}