import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    const { card } = props;

    //addition of each person's income!!
    let total = 0;
    for (const each of card) {

        total = total + each.income;
    }

    //Addition of clicked name!!
    let namee = '';
    for (const each of card) {

        namee = namee + ' ' + each.name + '!';

    }
    return (
        <div className="all-con">
            <p className="added-person"><FontAwesomeIcon icon={faPersonBooth} /> Scientist Added:{props.card.length}</p>

            <small className="added-income">Total Income: ${total}</small>
            <div className="continer-cd">
                <p className="sc-name"> {namee}</p>
            </div>

        </div>
    );
};

export default Card;