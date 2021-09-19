import React from 'react';
import './Searchbar.css'

const SearchBar = (props) => {
    return(
        <div className="container d-flex align-items-center i">
{/* {        <i className="material-icons prefix">search</i>} */}
        <input type="search" placeholder="Search" value={props.val} onChange={props.search} className="form-control"/>
        </div>
    )
}

export default SearchBar; 