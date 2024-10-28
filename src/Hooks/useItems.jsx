import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
import {collection,getDoc, getDocs} from 'firebase/firestore'
import { db } from "../firebase";
// hook es una funcion de react
// hooks que vienen en el core de React:
//     useState
//     useEffect
//     useContext
//     useLayoutEffect
//     useId
//     useRef

// Custom hook -- funcion de react customizada por nosotros
//     useItems
//     useScreenAnimation
//     usePepitoPerez

export const useItems = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const itemsCollection = collection(db,'products');
    getDocs(itemsCollection).then((snapshot)=>
    {
      setProductsData(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
    );
    }).catch((error) => console.error(error)).finally(()=> setLoading(false));
   // getAllProducts()
      //.then((res) => {
      //  setProductsData(res.data.products);
      //})
      //.catch((error) => {
     //   console.log(error);
     // })
     // .finally(() => setLoading(false));
  }, []);

  return { productsData, loading };
};