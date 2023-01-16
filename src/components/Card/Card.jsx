import React from 'react';
import './Card.css';

export default function Cards({cover, title}) {
    return (
        <div className="card">
            <img src={cover} alt="locations" />
            
            <div>
                <h2>{title}</h2>
            </div>
        </div>
    );
}
