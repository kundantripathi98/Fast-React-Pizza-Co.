import { useDispatch } from "react-redux";
import Button from "../../ui/Button";

const DeleteItem = () => {
    const dispatch = useDispatch();
    
  return (
    <Button type="small">Delete</Button>
  );
};

export default DeleteItem;