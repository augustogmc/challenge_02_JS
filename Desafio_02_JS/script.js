const students = [
    {
        name: "Augusto",
        noteOne: 10,
        noteTwo: 9,
    },
    {
        name: "Felipe",
        noteOne: 8,
        noteTwo: 7,
    },
    {
        name: "Ananda",
        noteOne: 6,
        noteTwo: 5,
    },
    {
        name: "João Victor",
        noteOne: 4,
        noteTwo: 3,
    },
]

let result

const averageTest = function(noteOne, noteTwo){
    return (noteOne + noteTwo)/2
    
}
const passChecker = function(student){

    let average = averageTest(student.noteOne, student.noteTwo)
    let mensage

    if(averageTest(student.noteOne, student.noteTwo) >= 7){
        mensage = (`
        A média do(a) aluno(a) ${student.name} é: ${average}
        Parabéns, ${student.name}! Você foi aprovado no concurso!
        `)
    } else{
        mensage = (`
        A média do(a) aluno(a) ${student.name} é: ${average}
        Não foi dessa vez, ${student.name}! Tente novamente!
        `)
    }

    return mensage
}

for(let student of students){
    let mainMensage = passChecker(student)
    alert(mainMensage)
}