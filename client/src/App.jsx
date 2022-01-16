import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './routers/Home';
import UpdatePage from './routers/UpdatePage';
import RestaurantDetailPage from './routers/RestaurantDetailPage'
import { RestaurantContextProvider } from './context/RestaurantContext';



const App = () => {
    return(

        <RestaurantContextProvider>

        <div className="container">
            <Link to='/'>Home</Link>
            <Link to='/restaurants/:id/update'>UpdatePage</Link>
            <Link to='/restaurants/:id'>RestaurantDetailPage</Link>

            <Routes>
            
                <Route  path = '/' element = {<Home/>} />
                <Route  path = '/restaurants/:id/update' element = {<UpdatePage/>} />
                <Route  path = '/restaurants/:id' element = {<RestaurantDetailPage/>} />
                
                
            </Routes>
        </div>
        </RestaurantContextProvider>
    ) 
}
 
export default App;