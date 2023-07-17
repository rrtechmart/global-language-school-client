import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Class from "../Pages/Class/Class";
import InstructorClass from "../Pages/Instructor/InstructorClass";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'instructor',
          element: <Instructor></Instructor>
        },
        {
          path:'instructorClass',
          element: <InstructorClass></InstructorClass>
        },
        {
          path:'class',
          element: <Class></Class>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        { 
          path:'myClass',
          element:<MyClass></MyClass>
        },
        {
          path:'enrolledClass',
          element: <EnrolledClass></EnrolledClass>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },

      ]
    }
  ]);