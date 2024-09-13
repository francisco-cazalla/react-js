import { GiShoppingCart } from "react-icons/gi";



const CartWidget = ({cartItems}) => {
  
  return (
    <div
      style={{
        display: "flex",
        marginRight: "20px",
        alignItems: "center",
        width: "30%",
        justifyContent: "space-between",
      }}

    >
       
      <GiShoppingCart size={0} />
      {/* Mostramos el número de items que se pasa como prop */}
      {cartItems}
    </div>
  );
};

export default CartWidget;