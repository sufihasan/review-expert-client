import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import AddService from "../pages/AddService/AddService";
import MyService from "../pages/MyService/MyService";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../routes/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Loading from "../pages/Loading/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/services/featured'),
                hydrateFallbackElement: <Loading></Loading>,
            },

            {
                path: '/services',
                Component: Services,
                loader: () => fetch('http://localhost:3000/services'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myService',
                element: <PrivateRoute><MyService></MyService></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);


export default router;