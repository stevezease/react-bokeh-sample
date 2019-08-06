import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import './command-bar.css';

const CommandBar = ({ showSettingsForm, setShowSettingsForm }) => {
    return (
        <div className="command-bar">
            <div
                className="command-bar-item"
                onClick={() => setShowSettingsForm(!showSettingsForm)}
            >
                <FontAwesomeIcon icon={faSlidersH} />
            </div>
        </div>
    );
};
export default CommandBar;
