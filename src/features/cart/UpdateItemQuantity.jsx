import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({pizzaId}) => {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        {currentQuantity}
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
};

export default UpdateItemQuantity;