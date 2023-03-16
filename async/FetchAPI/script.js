// Fetch API

// cara 1
// function doLogin(){
//     const request = new Request("https://eodiczt2l5llftm.m.pipedream.net", {
//         method: "POST",
//         headers: {
//             "Content-Type" : "application/json",
//             "Accept" : "application/json"
//         },
//         body: JSON.stringify({
//             "username" : document.getElementById('username').value,
//             "password" : document.getElementById('password').value,
//         })
//     })

//     const response = fetch(request)

//     response
//             .then((response)=> response.json())
//             .then((json)=> document.getElementById('respon').textContent = json.about)

// }

// Cara 2
// function doLogin(){
//     const response = fetch("https://eodiczt2l5llftm.m.pipedream.net", {
//         method: "POST",
//         headers: {
//             "Content-Type" : "application/json",
//             "Accept" : "application/json"
//         },
//         body: JSON.stringify({
//             "username" : document.getElementById('username').value,
//             "password" : document.getElementById('password').value,
//         })
//     })

//     response
//             .then((response)=> response.json())
//             .then((json)=> document.getElementById('respon').textContent = json.about)

// }



document.getElementById('button').onclick = doLogin