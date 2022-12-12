console.log('app.js reporting for duty..');

// fetch('http://localhost:3000/api/v1/test', {
//     method: 'GET'
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// SECTION TOKEN Request

// fetch('https://api.petfinder.com/v2/oauth2/token', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'grant_type=client_credentials&client_id=xxxx&client_secret=xxxx'
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));


// SECTION GET Request (GET Pet Data)

const token = "xxx";


fetch('https://api.petfinder.com/v2/animals', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));