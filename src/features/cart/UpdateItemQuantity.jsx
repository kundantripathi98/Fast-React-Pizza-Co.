import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getCurrentQuantityById } from "./cartSlice";

const UpdateItemQuantity = ({pizzaId}) => {
    // const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div>
      <Button type="round">-</Button>
        {/* {currentQuantity} */}
        1
      <Button type="round">+</Button>
    </div>
  );
};

export default UpdateItemQuantity;