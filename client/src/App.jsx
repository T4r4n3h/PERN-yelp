import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage'

const App = () => {
    return <div>App
        <Switch>

        <Router exact path = '/' component = {Home} />
        <Router exact path = '/restaurants/:id/update' component = {UpdatePage} />
        <Router exact path = '/restaurants/:id' component = {RestaurantDetailPage} />
        
        </Switch>
    </div>
}
 
export default App;