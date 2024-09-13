import React, { useState } from "react";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import NavBar from "./componentes/navBar";
import ItemListContainer from "../src/item/item";
import ItemCount from './itemCount/itemCount';
import CartWidget from './CartWidget/CartWidget'
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";

const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const toast = useToast();

  const handleAdd = (quantity) => {
    setCartItems(cartItems + quantity);

    toast({
      title: "Item agregado.",
      description: `Has agregado ${quantity} items al carrito.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <ChakraProvider>
      {/* Pasamos cartItems al NavBar */}
      <NavBar cartItems={cartItems} />
      <ItemListContainer greeting="Hola a todos, esta es mi tienda!!" />
      
        <Home />
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1vh', marginTop:'20px' }}>
        <ItemCount initial={1} stock={5} onAdd={handleAdd} />
      </div>
    </ChakraProvider>
  );
};

export default App;





