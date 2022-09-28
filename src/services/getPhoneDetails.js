const getPhoneDetails = (id) => {    
    const phoneDetailsURL = `http://localhost:3001/api/v1/phones/${id}`

    return fetch(phoneDetailsURL)
        .then((res) => res.json())
        .then(response => {
                const {id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram} = response.data
                return { id, name, manufacturer, description, color, price, image: imageFileName, screen, processor, ram };
        })
        .catch(error => {
            console.log("Phone detail error", error.message)
            throw new Error("Sorry, something went wrong!")
        });
}

export default getPhoneDetails