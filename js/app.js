


// fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
//     console.log(response)

//         response.json().then((data) => console.log(data))

// }).catch((error) => {
//     console.log(error)
// })


async function integrar() {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/")

    const data = await response.json()

    console.log(data)
}

integrar()