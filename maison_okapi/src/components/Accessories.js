import React from 'react';
import './Accessories.css';
import okapiImage from './images/okapi.jpeg';

const Accessories = () => {
    return (
        <div className="accessories-page">
            <div className="accessories-card">
                <img src={okapiImage} alt="Okapi" />
                <h1 className="accessories-title">Accessories</h1>
                <p className="coming-soon-message">Coming Soon</p>
            </div>
        </div>
    );
};

export default Accessories;
