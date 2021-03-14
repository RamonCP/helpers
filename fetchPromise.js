const urlApi = 'https://api.github.com/users/ramoncp/repos'

function getUsers(){
    return fetch(urlApi)
}

const users = getUsers()
users
    .then(handleErrors)
    .then((response)=>{
        console.log(response)
    })
    .catch((err) => {
        console.error(err)
    })

function handleErrors(response){
    if ( !response.ok ) throw Error(response.statusText)
    return response.json()
}