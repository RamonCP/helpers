function myTag(strings, person, age) {
    const str1 = strings[0]     // 'O '
    const str2 = strings[1]     // ' é um '
    const str3 = strings[2]     // '.'

    let ageStr = ''
    if (age > 18) {
        ageStr = 'Adulto'
    } else if (age > 13 && age < 18){
        ageStr = 'Adolescente'
    }

    return `${str1}${person}${str2}${ageStr}${str3}`
}

const person = "Michael"
const age = 15

const agePerson = myTag`O ${person} é um ${age}.`

console.log(agePerson)
// O Michael é um Adolescente.