import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage, ErrorPage, ShopPage, SignIn, SignUp } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/sign_up",
        element: <SignUp />,
    },
    {
        path: "/sign_in",
        element: <SignIn />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
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