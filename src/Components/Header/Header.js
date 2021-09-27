import React from 'react';
import './Header.css'

const Header = () => {


    return (
        <div className="header">
            <h1 className="top">Top <span className="scientists-only">Scientists</span> Forum</h1> <br />
            <small className="established">Established : 1945</small>

            <p><small className="long-text">Science is the greatest collective endeavor. It has a specific role, as well as a variety of functions for the benefit of our society: <br /> creating new knowledge, improving education, and increasing the quality of our live.</small></p>

            <p className="donation">Expected Donation: $800,000</p>

        </div>
    );
};

export default Header;