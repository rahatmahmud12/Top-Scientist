import React from 'react';
import './Scientist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAddressBook, faDesktop } from '@fortawesome/free-solid-svg-icons'

const Scientist = (props) => {
    //destructuring the props
    const { name, income, age, img, subject, country } = props.each;

    const address = <FontAwesomeIcon icon={faAddressBook} />


    return (

        <div className="all-container">

            {/* go for a card -----------*/}

            <div className="sc-img">
                <img src={img} />
            </div>
            <div className="sc-details">
                <h4 className="name">{name}</h4>
                <p>Country: {country}</p>
                <p>Subject : {subject}</p>
                <p> Income : {income}</p>

                <p><small>Age: {age}</small></p>

                <button onClick={() => props.addToCard(props.each)} className="btn-add">{address} Add to forum</button>

                <p>Search more <FontAwesomeIcon icon={faSearch} /></p>
            </div>
        </div>

    );
};

export default Scientist;