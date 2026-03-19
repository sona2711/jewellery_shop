import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../components/layout/AuthLayout";
import { MainLayout } from "../components/layout/MainLayout";
import { WithSuspense } from "./routerHelpers";
import { lazyNamed } from "./lazyNamed";

const Home = lazyNamed(() => import("../pages/Home"), "Home");
const Catalog = lazyNamed(() => import("../pages/Catalog"), "Catalog");
const ProductPage = lazyNamed(
  () => import("../pages/ProductPage"),
  "ProductPage",
);
const Collections = lazyNamed(() => import("../pages/Collections"), "Collections");
const Services = lazyNamed(() => import("../pages/Services"), "Services");
const Checkout = lazyNamed(() => import("../pages/Checkout"), "Checkout");
const Contact = lazyNamed(() => import("../pages/Contact"), "Contact");
const FAQ = lazyNamed(() => import("../pages/FAQ"), "FAQ");
const NotFound = lazyNamed(() => import("../pages/NotFound"), "NotFound");
const About = lazyNamed(() => import("../pages/About"), "About");
const Account = lazyNamed(() => import("../pages/Account"), "Account");
const Blog = lazyNamed(() => import("../pages/Blog"), "Blog");

const Login = lazyNamed(() => import("../components/forms/Login"), "Login");
const Register = lazyNamed(
  () => import("../components/forms/Register"),
  "Register",
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <WithSuspense Component={Home} /> },
      { path: "/catalog", element: <WithSuspense Component={Catalog} /> },
      {
        path: "/catalog/collection/:collectionSlug",
        element: <WithSuspense Component={Catalog} />,
      },
      {
        path: "/catalog/category/:category",
        element: <WithSuspense Component={Catalog} />,
      },
      {
        path: "/catalog/:gender/:category",
        element: <WithSuspense Component={Catalog} />,
      },
      { path: "/catalog/:gender", element: <WithSuspense Component={Catalog} /> },
      { path: "/product/:id", element: <WithSuspense Component={ProductPage} /> },
      { path: "/collections", element: <WithSuspense Component={Collections} /> },
      { path: "/services", element: <WithSuspense Component={Services} /> },
      { path: "/checkout", element: <WithSuspense Component={Checkout} /> },
      { path: "/about", element: <WithSuspense Component={About} /> },
      { path: "/contact", element: <WithSuspense Component={Contact} /> },
      { path: "/faq", element: <WithSuspense Component={FAQ} /> },
      { path: "/blog", element: <WithSuspense Component={Blog} /> },
      { path: "/account", element: <WithSuspense Component={Account} /> },
      { path: "*", element: <WithSuspense Component={NotFound} /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <WithSuspense Component={Login} /> },
      { path: "register", element: <WithSuspense Component={Register} /> },
    ],
  },
]);

