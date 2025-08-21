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
    //console.log(key)
}
//console.log(person)

person.city = 'Honnover'
person['family'] = 'ghasedi'
//console.log(person)

delete person.country;
delete person.city;
//console.log(person)

const company = {
    name: "Tech Group",
    employees: ["Tom","Mark"],
    address: {
        city: "Toronto",
        country: "Canada"
    },
};
//console.log(company.address.city)

//console.log(company.address?.city || 'not exist');


const contact = {
    phone: '123-45-89',
    email:'mo@gmail.com'
}

const newPerson = {...person,country:'germany', ...contact}
console.log("newPerson", newPerson)