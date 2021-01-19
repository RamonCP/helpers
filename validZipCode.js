const isValidBRZip = (zip) => {
    const pattern = /^[0-9]{5}-[0-9]{3}$/
    return pattern.test(zip)
}

console.log(isValidBRZip('12345-123'))
console.log(isValidBRZip('asdadasdasd'))