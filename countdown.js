function countdown() {
  const date = new Date('Jan 21, 2021 12:00:00')
  const difference = +date - +new Date() // === date - today
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }
  }

  return timeLeft
}

setInterval(() => {
  console.log(countdown())
}, 1000)
