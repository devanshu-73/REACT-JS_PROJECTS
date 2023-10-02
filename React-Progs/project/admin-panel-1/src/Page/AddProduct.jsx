/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from 'axios';

function AddProduct() {
    const [data, setData] = useState({
        hotelType: "",
        price: ""
    });

    const onInsert = async () => {
        const res = await axios.post(`http://localhost:3000/product`, data);
        alert("Inserted successfully");
    };

    const handleHotelTypeChange = (event) => {
        setData({ ...data, hotelType: event.target.value });
    };

    const handlePriceChange = (event) => {
        setData({ ...data, price: event.target.value });
    };   

    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Product</h1>
                        </div>
                    </div>
                    {/*/.ROW*/}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Add Hotel Room
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Hotel Type</label>
                                        <select
                                            className="form-control"
                                            value={data.hotelType}
                                            onChange={handleHotelTypeChange}
                                        >
                                            <option disabled value=""> -- Select -- </option>
                                            <option>Junior Suite Room</option>
                                            <option>Executive Suite Room</option>
                                            <option>Super Deluxe Room</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <label>Price</label>
                                        <select
                                            className="form-control"
                                            value={data.price}
                                            onChange={handlePriceChange}
                                        >
                                            <option disabled value=""> -- Select -- </option>
                                            <option>Rs. 2000</option>
                                            <option>Rs. 4000</option>
                                            <option>Rs. 7000</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <button type="button" className="btn btn-info" onClick={onInsert}>
                                        Add Room
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /. PAGE-INNER  */}
            </div>
        </div>
    );
}

export default AddProduct;
