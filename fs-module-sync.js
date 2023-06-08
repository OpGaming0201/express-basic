const {writeFileSync, readFileSync, write} = require('fs')
const first = readFileSync('./test1/content/text.txt', 'utf-8')
const second = readFileSync('./test1/content/text1.txt', 'utf-8')
console.log(first, second);

writeFileSync(
    './test1/content/text2.txt',
    'utf-8',
    {flag: 'a'}
)