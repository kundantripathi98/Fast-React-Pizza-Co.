import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate(`/order/${query}`);
        setQuery('');
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Search Order #" value={query} onChange={(e)=>setQuery(e.target.value)} type="text"/>
    </form>
  );
};

export default SearchOrder;