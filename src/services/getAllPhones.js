const getAllPhones = () => {    
    const allPhonesURL = `http://localhost:3001/api/v1/phones`

    return fetch(allPhonesURL)
        .then((res) => res.json())
        .then((response) => {
            const phones = response.data.map((e) => {
                const {id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram} = e
            return { id, name, manufacturer, description, color, price, image: imageFileName, screen, processor, ram };
            });
        
            return phones
        })
        .catch(error => {
            console.log("Phones error", error.message)
            throw new Error("Sorry, something went wrong!")
        });
}

export default getAllPhones