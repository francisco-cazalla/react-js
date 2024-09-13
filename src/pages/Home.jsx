import { background } from "@chakra-ui/react";
import ItemList from "../ItemList/ItemList";


const Home = () => {
    //const myArray = [1,2,3,4];
    //const mapedArray = myArray.map((item) => { 
    //return item + 1;
    //});

    //console.log(mapedArray);

const productsData = [
    {
    id: 1,
    name: "Zapatilla Adidas 42",
    description: "Zapatillas marca adidas talle 42",
    price: 120,
    stock: 10,
    imgage :'/img/caca.jpg',
    },
    {
    id: 2,
    name: "Zapatilla Adidas 43",
    description: "Zapatillas marca adidas talle 43",
    price: 110,
    stock: 9,
    imgage :'/img/caca.jpg',
    },
    {
    id: 3,
    name: "Zapatilla Adidas 44",
    description: "Zapatillas marca adidas talle 44",
    price: 100,
    stock: 12,
    imgage :'/img/silla_b.webp',
    },
    {
    id: 4,
    name: "Zapatilla Adidas 41",
    description: "Zapatillas marca adidas talle 41",
    price: 130,
    stock: 20,
    imgage :'/img/silla_b.webp',
    },
    {
    id: 5,
    name: "Zapatilla Adidas 40",
    description: "Zapatillas marca adidas talle 40",
    price: 132,
    stock: 1,
    imgage :'/img/silla_b.webp',
    },
    {
        id: 6,
        name: "Zapatilla Adidas 40",
        description: "Zapatillas marca adidas talle 40",
        price: 132,
        stock: 1,
        imgage :'/img/silla_b.webp',
    },
];

return <ItemList products={productsData} />;
};

export default Home;
