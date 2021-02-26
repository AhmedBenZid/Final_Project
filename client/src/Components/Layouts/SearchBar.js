import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const SearchBar = () => {
    const destinations = useSelector(state => state.destination.destinations)
    return (
        <div className="search-availablity">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <form className="form">
                            <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                                    <select name="" id="" className="form-control custom-select">
                                        {destinations && destinations.map(destination =>
                                            <option value={destination.title}>{destination.title}</option>)}
                                    </select>
                                </div>
                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                                    <input type="text" className="form-control" name="daterange" />
                                </div>
                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                                    <input type="submit" className="btn btn-primary btn-block" value="Search" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
