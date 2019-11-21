const Person = require('./person')

const props = { name: "Mike", Age: 30, favoriteSites: ["GitHub", "StackOverflow", "Devhumor"] }
const person = new Person(props);

console.log(person);