import App from "./App";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const routes = [
    {
        path: '/', element: <App />, children: [
            { index: true, element: <Home /> },
            { path: '/products', element: <ProductsList /> },
            { path: '/products/details/:id', element: <ProductDetails /> },
            { path: '/cart', element: <Cart /> },
            { path: '/checkout', element: <Checkout /> }
        ]
    },
]


export default routes;