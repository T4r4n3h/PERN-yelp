import React, {useEffect} from 'react'
import RestaurantsFinder from '../apis/RestaurantsFinder'


function RestaurantList() {

    useEffect(async () => {
        try {
           const response = await RestaurantsFinder.get('/')
           console.log(response)
        } catch (err) {
            
        }

    },[])
    return (
        <div className="list-group">
           <table class="table">
                    <thead>
                        <tr className="bg-primary">
                            <th scope="col">Restaurant</th>
                            <th scope="col">Location</th>
                            <th scope="col">Price Range</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>mcdonalds</td>
                        <td>New YOrk</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td>
                        <button className="btn btn-warning">Update</button>
                        </td>
                        <td>
                        <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    </tbody>
           </table>
        </div>
    )
}

export default RestaurantList
