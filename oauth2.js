// Request OAuth 2 example

function requestOAuth2() {
    const options = {
        method: 'POST',
        url: 'https://YOUR_URL/oauth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: {
            grant_type: 'client_credentials',
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET',
        }
    }
    
    return fetch(options)
        .then(function(response) {
            return response
        })
        .catch(function(err) {
            return err
        })
}

async function requestApi() {
    const token = await requestOAuth2()
    const options = {
        method: 'POST',
        url: 'https://YOUR_URL/v1/api',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`
        },
        body: {
            id: "idTeste"
        }
    }

    return options
}

const response = requestApi()
console.log(response)