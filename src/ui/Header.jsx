import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="bg-yellow-400 flex justify-between items-center p-4">
      <Link to="/"><span className="uppercase tracking-[2px]">Fast React Pizza Co.</span></Link>

      <SearchOrder/>

      <p>Kundan</p>
    </header>
  );
};

export default Header;