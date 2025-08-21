const person = {
    name: 'Marzi',
    job: 'web developer',
    family: 'ghasedian',
    hasDrivingLicence: true,
    friends: ['bahar', 'hadis', 'eli']
}
/*console.log(person.job)
console.log(person['friends'])

const answerUser = prompt("select between name, job, family, hasDrivingLicence, friends");
console.log(person[answerUser])*/

person.birthYear = 1990
person['instagramId'] = 'marzi.gh12'
console.log(person)

const newProperties = {
    city: 'Magdeburg',
    country: 'Germany'
}

for (let key in newProperties) {
    person[key] = newProperties[key]
    console.log(key)
}
console.log(person)