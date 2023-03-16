// Async Await

// Mengambil data dengan output Promise
function getData(){
    const request = new Request("api/data.json",{
        method: "GET"
    })

    const response = fetch(request)

    return response.then((response) => response.json())
}

// Menggunakan Promise biasa
// function commonPromise(){
//     return new Promise(function(resolve, reject){
//         getData()
//             .then((data) => resolve(data.name))
//             .catch((error) => reject(error))
//     })
// }


// Menggunakan AsyncPromise
async function asyncPromise(){
    // Memakai handle error di async
    try {
        const data = await getData()
        return data.name
    } catch (error) {
        console.log(`ada kesalahan ${error}`)
    }

}

asyncPromise().then((data) => console.log(data))