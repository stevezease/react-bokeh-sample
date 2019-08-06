import React, { useState } from 'react';
import './colors-settings.css';
import ColorPicker from '../../color-picker/color-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { throttle } from 'lodash';

const updateColor = throttle((color, index, colors, setColors) => {
    const _colors = [...colors];
    _colors[index] = color;
    setColors(_colors);
}, 250);

const ColorsSettings = ({ colors, setColors }) => {
    const addColor = () => {
        const _colors = [...colors];
        _colors.push('#000000');
        setColors(_colors);
    };

    const deleteColor = index => {
        const _colors = [...colors];
        _colors.splice(index, 1);
        setColors(_colors);
    };
    return (
        <div className="colors-settings">
            {colors.map((color, index) => (
                <div className="color-setting-block">
                    <ColorPicker
                        activeColor={color}
                        onChange={changeColor =>
                            updateColor(changeColor, index, colors, setColors)
                        }
                    />
                    <div className="delete-color">
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            onClick={() => deleteColor(index)}
                        />
                    </div>
                </div>
            ))}
            <div className="add-color-button" onClick={() => addColor()}>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    );
};
export default ColorsSettings;
