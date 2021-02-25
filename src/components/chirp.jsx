import React from 'react';

const Chirp = props => {
    return (
        <div className="card-deck d-flex justify-content-center">
            <div className="card">
                <p className="card-header">Chirp</p>
                <div className="card-body">
                    <p className="card-title">@Username</p>
                    <h5 className="card-text">Message</h5>
                </div>
            </div>
        </div>

    )
};



export default Chirp;