import checkUrl from './checkURL'

const post = async (url = 'localhost:8081/add-url', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async (value) => {
    if (checkUrl(value)){
        console.log(post({url: value}));
    }else{
        alert("Invalid URL");
    }

}

export default handleSubmit
