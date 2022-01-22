const path = require('path')
const fs = require('fs')

function output(data) {
    fs.writeFileSync(path.resolve(__dirname, 'password.json'), data, 'utf8')
}

module.exports = { output }