import { createBrowserRouter, RouterProvider} from "react-router-dom"; // RouterProvider
import { MainLayout } from "../components/layout/MainLayout";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Product } from "../pages/Product";
import { Collections } from "../pages/Collections";
import { Services } from "../pages/Services";
import { Checkout } from "../pages/Checkout";
import { Contact } from "../pages/Contact";
import { FAQ } from "../pages/FAQ";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";
import { Account } from "../pages/Account";
import { Blog } from "../pages/Blog";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/catalog",
                element: <Catalog/>
            },
            {
                path: "/product/:id",
                element: <Product/>
            },
            {
                path: "/collections",
                element: <Collections/>
            },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path: "/checkout",
                element: <Checkout/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/faq",
                element: <FAQ/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/account",
                element: <Account/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
        ]
    },
    {
        path: "/",
        element: <AuthLayout/>,
        children:[]
    }
])

const AppRouter = () => {
    return (
      <RouterProvider router={router}/>
    )
  }
  
export default AppRouter