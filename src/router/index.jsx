import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// Pages
import { HomePage, ErrorPage, ShopPage, SignIn, SignUp, Cart } from "@/pages";

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