import React, { useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComp from "./components/Header";
import BodyComp from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";   // first highLevel Component
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import RestaurantDetails from "./pages/RestaurantDetails";
import UserContext from "./utils/userContext";
import {Provider} from 'react-redux';
import appStore from "./utils/store/appStore";
import CartPage from "./pages/CartPage";

   const AppLayOut = () =>{

      const [name,setName] = useState('');

    
    return  (
        <Provider store={appStore}>
             <UserContext.Provider value={{UserName:name,setName}}>
              <div>
         <HeaderComp/>
         {/* // this will render all childern routes acodering to their route name */}
         <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
       
    )
   }
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <AppLayOut/>,
            children: [
                {
                    path: '/',
                    element:<BodyComp/>
                }
                ,
                {
                    path: '/about',
                    element: <AboutUs/>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path:'/res/:id',
                    element:<RestaurantDetails/>
                },
                {
                    path:'/res/cart',
                    element:<CartPage/>
                }
            ],
            errorElement: <ErrorPage/>
        },
    
    ])
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter}/>);
