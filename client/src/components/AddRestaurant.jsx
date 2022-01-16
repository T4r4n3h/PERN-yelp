import React from 'react'

export default function AddRestaurant() {
    return (
        <div className="mb-4">
            <form action="">
                <div className="row g-4">
                    <div className="col-3">
                        <input type="text" className=" form-control" placeholder="name "/>
                    </div>
                    <div className="col-3">
                        <input type="text" className=" form-control" placeholder="location"/>
                    </div>
                    <div className="col-3">
                        <select className="custom-select my-1 mr-sm-2" placeholder=""name="" id="">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    
                    <button className="col-2 btn btn-primary">ADD</button>

                </div>
            </form>
        </div>
    )
}
