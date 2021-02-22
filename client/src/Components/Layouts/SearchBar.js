import React from 'react'

const SearchBar = () => {
    return (
        <div className="search-availablity">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <form className="form">
                            <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                                    <select name="" id="" className="form-control custom-select">
                                        <option value="">Destination</option>
                                        <option value="">Peru</option>
                                        <option value="">Japan</option>
                                        <option value="">Thailand</option>
                                        <option value="">Brazil</option>
                                        <option value="">United States</option>
                                        <option value="">Israel</option>
                                        <option value="">China</option>
                                        <option value="">Russia</option>
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
