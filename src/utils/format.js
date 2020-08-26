const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação Física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Portugês',
    'Química',
    ]
    
const weekdays =[
    'Domingo',
    'Segunda-feira',
    'terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    ]
    
    function getSubject(subjectNumber){
        const position = +subjectNumber - 1
        return subjects[position]
    
    }

    function convertHoursToMinutes(time) {
       const [hour, minutes] =  time.split(':')
       return Number((hour * 60) + minutes)
        
    }

    module.exports = {
        subjects,
        weekdays,
        getSubject,
        convertHoursToMinutes
    }