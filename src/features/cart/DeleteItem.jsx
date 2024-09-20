import Button from "../../ui/Button";

const DeleteItem = () => {
  return (
    <div>
       <Button type="small" onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default DeleteItem;