async function getData(){
    return fetch(5)
    .then(response=> response.json())
    .catch(error => {
        console.log(error);
    })
}