function rand(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * ( max - min + 1 )) + min
}

console.log(rand(1,5))