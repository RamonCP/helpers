function countup() {
    const pastDate = +new Date("Jan 20, 2021 12:00")
    const now = +new Date()
    const diff = now - pastDate
    let timeLeft = {}

    if (diff > 0) {
        timeLeft = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000)
        }
    }

    return timeLeft
}

setInterval(() => {
    console.log(countup())
}, 1000)