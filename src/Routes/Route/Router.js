import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/AvailableAppointment/Apponintment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
// import Dashboard from "../../Pages/Dashboard/Dashboard";

import Home from "../../Pages/Home/Home/Home";

import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DashboardLayout from "../../Shared/DashboardLayout/DashboardLayout";
import MyAppointment from "../../Shared/MyAppointment/MyAppointment";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
          
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children : [
            {
                path : '/dashboard/dashboard',
                element : <MyAppointment></MyAppointment>
            },
            {
                path : '/dashboard/allusers',
                element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path : '/dashboard/managedoctors',
                element : <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
            {
                path : '/dashboard/adddoctor',
                element : <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            }
        ]
    },
])

export default router;