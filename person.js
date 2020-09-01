const person = {
    name: 'Juan',
    age: 23,
    sons: ['Paco', 'Maria']
}

console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.sons[0], person.sons[1]);

for(const key in person){
    console.log(key);
}

for (const key in person){
    console.log(person[key]);
}