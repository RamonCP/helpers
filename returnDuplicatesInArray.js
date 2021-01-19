const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort()
    let results = [];

    sorted_arr.forEach((item, key) => {
        sorted_arr[key + 1] == sorted_arr[key] && results.push(sorted_arr[key])
    })

    return results;
}

let array = [
    "0007249281",
    "0007249280",
    "0007241550",
    "0007146184",
    "0006849693",
    "0006849692",
    "0007249280",
    "0006849692",
    "0007144114"
]

console.log(findDuplicates(array))