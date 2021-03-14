function differenceDates(){
    const date = new Date("Mar 01, 2020 00:00:00")
    const today = new Date()
    const difference = date - today 

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)
    
    return { difference, hours, days, minutes, seconds }
}

setInterval(()=>{
    console.log(differenceDates())
}, 1000)
