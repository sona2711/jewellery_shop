import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { ProductPage } from "../pages/Product";
import { Collections } from "../pages/Collections";
import { Services } from "../pages/Services";
import { Checkout } from "../pages/Checkout";
import { Contact } from "../pages/Contact";
import { FAQ } from "../pages/FAQ";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";
import { Account } from "../pages/Account";
import { Blog } from "../pages/Blog";
import { Login } from "../components/forms/Login";
import { Register } from "../components/forms/Register";


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
                path: "/catalog/:categorySlug",
                element: <Catalog/>
            },
            {
                path: "/product/:id",
                element: <ProductPage/>
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
        path: "auth",
        element: <AuthLayout/>,
        children:[
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            },
        ]
    }
])

const AppRouter = () => {
    return (
      <RouterProvider router={router}/>
    )
  }
  
export default AppRouter