import { GiShoppingCart } from "react-icons/gi";



export const CartWidget = ({cartItems}) => {
  
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
      {cartItems}
    </div>
  );
};

