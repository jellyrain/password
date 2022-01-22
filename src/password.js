function string(length) {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += str[Math.floor(Math.random() * (str.length))]
    }
    return result
}

function symbols(length) {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$!%*#_~?&^'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += str[Math.floor(Math.random() * (str.length))]
    }
    return result
}

function password(type, length, name) {
    let p
    switch (type) {
        case 'string':
            p = string
            break
        case 'symbols':
            p = symbols
            break
    }

    if (!Array.isArray(name)) {
        return JSON.stringify({ name: p(length) })
    }

    const result = {}

    name.forEach(item => {
        result[item] = p(length)
    })

    return JSON.stringify(result)
}

module.exports = { password }