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


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                Component: Home
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
                path: '/services',
                Component: Services,
                loader: () => fetch('http://localhost:3000/services')
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/myService',
                element: <MyService></MyService>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            }
        ]
    },
]);


export default router;