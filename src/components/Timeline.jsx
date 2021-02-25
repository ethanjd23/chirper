import React from 'react';
import Chirp from './chirp';
import { chirpArray } from './Input';

const Timeline = props => {
    return (
        <div className="card-deck d-flex justify-content-center">
            <Chirp subject={chirpArray[0].subject} message={chirpArray[0].message} />
            {chirpArray.map((chirp) => {
                console.log(chirp);
            return <Chirp subject={chirp.subject} message={chirp.message} />; })}
        </div>

    )
}

export default Timeline;