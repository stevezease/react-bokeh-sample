import React, { useState } from 'react';
import './preset-block.css';

const PresetBlock = ({ image, label }) => {
    return (
        <div className="preset-block">
            <div
                className="preset-block-img"
                style={{
                    background: `url(${image})`
                }}
            />
            <div className="preset-block-label"> {label}</div>
        </div>
    );
};
export default PresetBlock;
