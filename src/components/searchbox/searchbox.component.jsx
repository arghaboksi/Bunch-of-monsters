import React from 'react';
import './searchbox.styles.css';
export const SearchBox = props => (
    <input className="search" type="search" placeholder="Search Monster" onChange={props.changeHandler} />
)