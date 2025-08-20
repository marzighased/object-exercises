const person = {
    name: 'Marzi',
    job: 'web developer',
    family: 'ghasedian',
    hasDrivingLicence: true,
    friends: ['bahar', 'hadis', 'eli']
}
console.log(person.job)
console.log(person['friends'])

const answerUser = prompt("select between name, job, family, hasDrivingLicence, friends");
console.log(person[answerUser])