#!/usr/bin/env node

const fs = require('node:fs')

// fs.readFile('./database.csv', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         console.log(data)
//     }
// });

try {
    const data = fs.readFileSync('./database.csv', 'utf-8')
    console.log(data)
}catch(err){
    console.log(err)
}

console.log(process.env.PORT)
console.log(process.env.HBNB_MYSQL_USER)
console.log(process.env.MY_VAR)
