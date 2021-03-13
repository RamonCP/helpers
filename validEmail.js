const isEmail = (text) => {
    return /^.+@.+$/.test(text)
}

console.log(isEmail('aaa.com')) // false
console.log(isEmail('aaa@aa.com')) // true