import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore, getDocs, getDoc, doc,} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "e-commerce-demaria.firebaseapp.com",
    projectId: "e-commerce-demaria",
    storageBucket: "e-commerce-demaria.appspot.com",
    messagingSenderId: "924986867639",
    appId: "1:924986867639:web:5e42788d2b55b0e9163232"
};

const app = initializeApp(firebaseConfig);

const store = getFirestore()

const loadStore = async () => {
    const promise = await fetch('./json/stock.json')
    const items = await promise.json()
    items.forEach(async(item) => {
        await addDoc(collection(store, 'items'), {
            idCat: item.idCat,
            title: item.title,
            description: item.description,
            price: item.price,
            stock: item.stock,
            img: item.pictureUrl
        })
    });
}

const getItemId = async (id) =>{
    const item = await getDoc(doc(store, 'items', id))
    const items = [item.id, item.data()]
    return items
}

const getItems = async () => {
    const items = await getDocs(collection(store, 'items'))
    const prod = items.docs.map(item => [item.id, item.data()])
    return prod
}

export {loadStore, getItems, getItemId}