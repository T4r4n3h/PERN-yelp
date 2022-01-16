import React from 'react';
import AddRestaurant from '../components/AddRestaurant';
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
function Home() {
    return (
        <div>
            <Header/>
            <AddRestaurant/>
            <RestaurantList/>

            this is the Home page
        </div>
    )
}

export default Home
