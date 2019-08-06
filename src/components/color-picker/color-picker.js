import React, { useEffect, useState, useRef } from 'react';
import './color-picker.css';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ activeColor, onChange }) => {
    const [displayPicker, setDisplayPicker] = useState(false);
    const node = useRef();

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setDisplayPicker(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <div className="color-picker" ref={node}>
            <div
                className="color-picker-block"
                style={{ background: activeColor }}
                onClick={() => setDisplayPicker(!displayPicker)}
            />
            {displayPicker && (
                <div className="color-picker-container">
                    <ChromePicker
                        color={activeColor}
                        onChange={color => {
                            onChange(color.hex);
                        }}
                    />
                </div>
            )}
        </div>
    );
};
export default ColorPicker;
