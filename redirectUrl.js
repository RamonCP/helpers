const redirectWithParams = (destination) => {
    const query = window.location.search || ''
    const result = `${destination}${query}`
    window.location = result
}

redirectWithParams('https://google.com')