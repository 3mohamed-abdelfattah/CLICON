import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage, ErrorPage, ShopPage, SignIn, SignUp } from "@/pages";

import ProtectedRoute from "./ProtectedRoute";
import Cart from './../components/Cart';

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
    },
    {
        path: "/home",
        element: (
            <ProtectedRoute>
                <HomePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/sign_up",
        element: <SignUp />,
    },
    {
        path: "/shop",
        element: (
            <ProtectedRoute>
                <ShopPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/cart",
        element: (
            <ProtectedRoute>
                <Cart />
            </ProtectedRoute>
        ),
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
