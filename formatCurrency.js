const amount = 1234.56;

const currencyBRL = value => {
    const options = { style: "currency", currency: "BRL" }
    return value.toLocaleString("pt-BR",options)
}

const currencyUSD = value => {
    const options = { style: "currency", currency: "USD" }
    return value.toLocaleString("en-BR",options)
}

console.log(currencyBRL(amount))
console.log(currencyUSD(amount))