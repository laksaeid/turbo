import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/home";
import Home from "../screens/home";


export const router = createBrowserRouter([
    {
      element: <HomeLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);