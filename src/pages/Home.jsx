import { background, Box } from "@chakra-ui/react";
import { ItemList} from "../componentes/ItemList";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
import { Loader } from "../componentes/Loader";
import { ItemListContainer } from "../componentes/item";
import { NavBar } from "../componentes";
import { style } from "framer-motion/client";


 export const Home = () => {
  const [cartItems, setCartItems] = useState(0);
  
  
    const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect --> hook que nos sirve para ejecutar acciones asegurando que el componente ya esta renderizado (ya esta en el DOM)
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProductsData(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    
    <Loader />
    
  ) : (
    <>
    
    <ItemListContainer greeting="CASA DRODA"/>
    <ItemList products={productsData} />
    
    </>
    

    
  );
};

/*const productsData = [
    {
    id: 1,
    name: "Sillons Tulip Giratorios",
    description: "Zapatillas marca adidas talle 42",
    price: 120,
    stock: 10,
    imgage :'https://acdn.mitiendanube.com/stores/001/823/801/products/gjlb-d27ce35ed6735bee1617089040600778-640-0.png',
    },
    {
    id: 2,
    name: "Poltrona Herman Miller Total Black",
    description: "Zapatillas marca adidas talle 43",
    price: 110,
    stock: 9,
    imgage :'https://acdn.mitiendanube.com/stores/001/823/801/products/4wetdf-3de158e91439b4c74917106094510295-640-0.png',
    },
    {
    id: 3,
    name: "Sillón LCX de EAMES + Mesita de SAARINEN",
    description: "Zapatillas marca adidas talle 44",
    price: 100,
    stock: 12,
    imgage :'https://acdn.mitiendanube.com/stores/001/823/801/products/photo-2024-02-25-21-33-08-f206576bba741e8bf317089077018873-640-0.png',
    },
    {
    id: 4,
    name: "Silla Finn Nueva",
    description: "Sillón LCX de EAMES + Mesita de SAARINEN",
    price: 130,
    stock: 20,
    imgage :'https://acdn.mitiendanube.com/stores/001/823/801/products/ear-13edb7de016a84e63f17096081825314-640-0.png',
    },
    {
    id: 5,
    name: "Set Para Exterior ",
    description: "Zapatillas marca adidas talle 40",
    price: 132,
    stock: 1,
    imgage :'https://acdn.mitiendanube.com/stores/001/823/801/products/qr-c8db0a9b69ccebdfd616967678127734-640-0.png',
    },
    
];*/




