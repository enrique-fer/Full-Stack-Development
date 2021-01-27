var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scotsdale'
};

for (var key in student) {
    console.log(key + " => " + student[key]);
};