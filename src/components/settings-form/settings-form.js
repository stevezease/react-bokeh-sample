import React, { useState } from 'react';
import './settings-form.css';
import ColorsSettings from './colors-settings/colors-settings';
import SizeSettings from './size-settings/size-settings';
import QuantitySettings from './quantity-settings/quantity-settings';
import Presets from './presets/presets';

const SettingsForm = ({
    showSettingsForm,
    colors,
    setColors,
    minSize,
    setMinSize,
    maxSize,
    setMaxSize,
    numLights,
    setNumLights
}) => {
    const [showExport, setShowExport] = useState(false);
    return (
        <div
            className="settings-shell"
            style={
                showSettingsForm
                    ? {}
                    : {
                          opacity: 0,
                          right: '-500px'
                      }
            }
        >
            <div className="settings-content">
                <div
                    className="settings-form"
                    style={{ opacity: showExport ? '0' : '1' }}
                >
                    <div className="settings-header">Settings</div>
                    <div className="colors-settings settings-container">
                        Colors:{' '}
                        <ColorsSettings colors={colors} setColors={setColors} />
                    </div>
                    <div className="colors-settings settings-container">
                        Size:{' '}
                        <SizeSettings
                            minSize={minSize}
                            setMinSize={setMinSize}
                            maxSize={maxSize}
                            setMaxSize={setMaxSize}
                        />
                    </div>

                    <div className="num-lights-settings settings-container">
                        Number of Lights:{' '}
                        <QuantitySettings
                            numLights={numLights}
                            setNumLights={setNumLights}
                        />
                    </div>

                    <div className="presets-settings settings-container">
                        Presets:{' '}
                        <Presets
                            setColors={setColors}
                            setMinSize={setMinSize}
                            setMaxSize={setMaxSize}
                            setNumLights={setNumLights}
                        />
                    </div>
                </div>
                <div
                    className="export-form"
                    style={{
                        opacity: showExport ? '1' : '0',
                        zIndex: showExport ? '1' : '-1'
                    }}
                >
                    <div className="settings-header">Export</div>
                    <div className="export-description">
                        Pass these props into your Bokeh object!
                    </div>
                    <div className="settings-container">
                        <div>randomGenerate:</div>
                        <input className="export-input" value="true" readOnly />
                    </div>
                    <div className="settings-container">
                        <div>randomGenerateSettings:</div>
                        <textarea className="export-text-area" readOnly>
                            {JSON.stringify(
                                {
                                    colors,
                                    minSize,
                                    maxSize,
                                    numLights
                                },
                                undefined,
                                8
                            )}
                        </textarea>
                    </div>
                    <div className="settings-container">
                        <div>lights:</div>
                        <input className="export-input" value="[]" readOnly />
                    </div>
                </div>
                <button
                    className="export-button"
                    onClick={() => setShowExport(!showExport)}
                >
                    {showExport ? 'Done' : 'Export'}
                </button>
            </div>
        </div>
    );
};
export default SettingsForm;
