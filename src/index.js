const { password } = require('./password')
const { output } = require('./json')

const data = password('symbols', 100, ['input', 'output'])

output(data)