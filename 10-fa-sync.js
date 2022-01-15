const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./test folder/test2.txt', 'utf-8')
const second = readFileSync('./test folder/test3.txt', 'utf-8')

console.log(first, second)

writeFileSync('./test folder/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'}) // a: append