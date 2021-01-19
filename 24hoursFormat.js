const hour = () => {
    const date = new Date();
    const options = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo'
    }

    return date.toLocaleDateString('pt-BR', options)
}

console.log(hour())