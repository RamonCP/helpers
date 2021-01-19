const isEmail = (text) => {
    return /^.+@.+$/.test(text)
}

console.log(isEmail('aaa.com'))
console.log(isEmail('aaa@aa.com'))