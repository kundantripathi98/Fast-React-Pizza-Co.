import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCart, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCart = useSelector(getTotalCart);
  const totalAmount = useSelector(getTotalCartPrice);

  if(!totalCart) return null;
  
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCart} pizzas</span>
        <span>{formatCurrency(totalAmount)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link> 
    </div>
  );
}

export default CartOverview;
