import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Scientist from '../Scientist/Scientist';
import './scientists.css'

const Scrintists = () => {
    const [scientist, setScientist] = useState([])

    const [card, setCard] = useState([])


    useEffect(() => {
        fetch('./Scientist.json')
            .then(res => res.json())
            .then(data => setScientist(data))
    }, [])

    const addToCard = (each) => {
        const newCard = [...card, each];
        setCard(newCard)
    }
    return (
        <div className="container">
            <div className="scientists">
                {

                    scientist.map(each => <Scientist
                        key={each.name}
                        each={each}
                        addToCard={addToCard}

                    ></Scientist>)
                }
            </div>
            <div className="card">
                <Card card={card}></Card>

            </div>
        </div>
    );
};

export default Scrintists;