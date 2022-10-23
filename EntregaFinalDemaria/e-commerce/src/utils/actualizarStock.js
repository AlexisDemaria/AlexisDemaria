import { updateItem, delateItem, createItem, getItemId } from "./firebase";

const item = {
    "idCat": "domesticos",
    "title": "Nuevo",
    "description": "Siemens",
    "price": 6000,
    "stock": 10,
    "pictureUrl": "https://firebasestorage.googleapis.com/v0/b/e-commerce-demaria.appspot.com/o/img%2FIT%20Siemens.jpg?alt=media&token=4fa9d72d-7dc1-4b02-a613-03f0610f5c11"
}
createItem(item).then(state => console.log(state))

// getItemId('').then(item =>  {
//     const prod = item[1]
//     console.log(item)
// })

// delateItem('').then(state => {
//     console.log(state)
// })