import React from 'react';

const Chirp = props => {
    return (
    
        <div className="card">
            <p className="card-header">{props.subject}</p>
            <div className="card-body">
                {/* <p className="card-title">Subject</p> */}
                <h5 className="card-text">{props.message}</h5>
            </div>
        </div>

    )
};



export default Chirp;