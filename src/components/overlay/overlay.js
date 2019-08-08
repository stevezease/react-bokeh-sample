import React, { useState } from 'react';
import './overlay.css';
import SettingsForm from '../settings-form/settings-form';
import CommandBar from './command-bar/command-bar';
import ColorPicker from '../color-picker/color-picker';

const Overlay = ({
    colors,
    setColors,
    minSize,
    setMinSize,
    maxSize,
    setMaxSize,
    numLights,
    setNumLights,
    backgroundColor,
    setBackgroundColor
}) => {
    const [showSettingsForm, setShowSettingsForm] = useState(false);
    return (
        <div className="overlay">
            <div className="action-bar">
                <div className="background-selector">
                    <ColorPicker
                        activeColor={backgroundColor}
                        onChange={setBackgroundColor}
                    />
                </div>
                <CommandBar
                    showSettingsForm={showSettingsForm}
                    setShowSettingsForm={setShowSettingsForm}
                />
            </div>
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
