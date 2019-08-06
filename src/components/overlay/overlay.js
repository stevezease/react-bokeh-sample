import React, { useState } from 'react';
import './overlay.css';
import SettingsForm from '../settings-form/settings-form';
import CommandBar from './command-bar/command-bar';

const Overlay = ({
    colors,
    setColors,
    minSize,
    setMinSize,
    maxSize,
    setMaxSize,
    numLights,
    setNumLights
}) => {
    const [showSettingsForm, setShowSettingsForm] = useState(false);
    return (
        <div className="overlay">
            <CommandBar
                showSettingsForm={showSettingsForm}
                setShowSettingsForm={setShowSettingsForm}
            />
            <SettingsForm
                colors={colors}
                setColors={setColors}
                showSettingsForm={showSettingsForm}
                minSize={minSize}
                setMinSize={setMinSize}
                maxSize={maxSize}
                setMaxSize={setMaxSize}
                numLights={numLights}
                setNumLights={setNumLights}
            />
        </div>
    );
};
export default Overlay;
