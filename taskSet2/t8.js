function pluck(objects, fieldName) {

    return objects.map(name => name[fieldName]);
}

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']