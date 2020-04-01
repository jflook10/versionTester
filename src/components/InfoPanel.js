import React from 'react';
import './InfoPanel.css';
import GroupOfPeople from '../images/GroupOfPeople.svg'

function InfoPanel() {
    return (
        <div className="infoPanel">
            <img src={GroupOfPeople} alt="Group of people" className="infoImage"/>
            <h2>To check if the version supplied meets the given spec, enter a version and constraint/s into the inputs prior to submitting the request.</h2>
        </div>
    );
}

export default InfoPanel;
