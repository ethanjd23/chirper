import React from 'react';

const Input = props => {
    return (
        <div>
            <div className="input-group">
                <span className="input-group-text">Message</span>
                <textarea className="form-control" aria-label="Message"></textarea>
            </div>

        </div>
    )
}

export default Input;