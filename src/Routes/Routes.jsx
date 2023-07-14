import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Class from "../Pages/Class/Class";

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
  ]);