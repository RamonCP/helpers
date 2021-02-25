function* func1() {
    yield 10
}

function* func2() {
    yield* func1()
}

const iterator = func2()
console.log(iterator.next().value)
console.log("==============================")


function* g1() {
    yield 35
    yield 42
    yield 10
}

function* g2() {
    yield 1;
    yield* g1()
}

const generator = g2()

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log("==============================")


// Passing arguments into generator
function* logGenerator() {
    console.log(0, yield)
    console.log(1, yield)
    console.log(2, yield)
    console.log(3, yield)
}

const log = logGenerator()

log.next()
log.next("Michael Jordan")
log.next("Shaq")
log.next("Lebron James")
log.next("Kevin Durant")
console.log("==============================")


const obj = {
    *gen() {
        yield "Hello World"
        yield "Hello everyone"
    }
}

const genObj = obj.gen()

console.log(genObj.next())
console.log(genObj.next())