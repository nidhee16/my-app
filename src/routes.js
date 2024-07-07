import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";

export const routes=[
    {path:"/",element:<ProductList/>},
    {path:"/product/:pid",element:<ProductDetail/>}
]