const createPhone = (newPhone) => {    
    const createPhoneURL = `http://localhost:3001/api/v1/phones`

    console.log(newPhone)

    return fetch(createPhoneURL, {
        method: 'POST',
        body: JSON.stringify(newPhone),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': window.location.href       
        }
    })
        .then((res) => res.json())
        .then((response) => {
            return response
        })
        .catch(error => {
            console.log("Phones error", error.message)
            throw new Error("Sorry, something went wrong!")
        });
}

export default createPhone