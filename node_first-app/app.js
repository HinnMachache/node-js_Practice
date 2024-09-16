const logger = require('./logger')  //receiving module

// logger.log('message')
// console.log(module)

const path = require('path')

const pathObj = path.parse(__filename)
// console.log(pathObj)

const os = require('os')
const totalMem = os.totalmem()
const freeMem = os.freemem()

console.log(`Total Mem : ${totalMem}`)
console.log(`Free Mem : ${freeMem}`)
