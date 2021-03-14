function recursive(n) {
    // console.log("Antes",n)
    if (n === 0){
        return 1
    } 
    else {
        // console.log("Recursive", n)
        return recursive(n - 1) + recursive(n - 1)
    }
}

console.log(recursive(3))