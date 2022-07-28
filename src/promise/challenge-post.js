import fetch from "node-fetch";
const API = " https://api.escuelajs.co/api/v1";

function postData(urlAPi, data){
    const response = fetch(urlAPi,{
        method: "POST",
        mode: "cors",
        credentials:"same-origin",
        headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify(data)    
    })
    return response
}

const data = {    
        "title": "Football",
        "price": 100,
        "description": "balón para jugar",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]     
}

postData(`${API}/products`, data)
.then(response=> response.json())
.then (data=> console.log(data))
.catch(error=>console.log(error))
.finally(fin=>console.log("Finally")) 

import fetch from "node-fetch";
const API = " https://api.escuelajs.co/api/v1";
function deleteData(urlApi) { //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 245; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
    });