import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './ui/Home';
import Menu, {loader as menuLoader} from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {action as createOrderAction} from './features/order/CreateOrder';
import Order, {loader as orderLoader} from './features/order/Order';
import {action as makeOrderAction} from './features/order/UpdateOrder';
// import PageNotFound from "./ui/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        errorElement: <Error/>,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        errorElement: <Error/>,
        action: createOrderAction
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        errorElement: <Error/>,
        action: makeOrderAction,
        loader: orderLoader,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
};

export default App;