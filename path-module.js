const path = require('path')

console.log(path.sep);

const filePath = path.join('/test1', 'content', 'text.txt')
console.log(filePath);
console.log(path.basename(filePath))

console.log(path.resolve(__dirname, 'test1', 'content', 'text.txt'));