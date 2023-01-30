const fs = require('fs');

//CRUD EXAMPLES
//create
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('File created');
});

//read
fs.readFile('employees.json', 'utf-8', (err, data) => {
    console.log('File is reading...');
    if (err) console.log(err);
    console.log(data);
})

//update
fs.appendFile('employees.json', '{"name": "Employee 2 Name", "salary": 4000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log("Uptades")
})

//remove
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log("file removed")
});