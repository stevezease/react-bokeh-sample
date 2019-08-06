import React, { useState } from 'react';
import './presets.css';
import ColorPicker from '../../color-picker/color-picker';
import PresetBlock from './preset-block';

const presetList = [
    {
        label: 'NYC Night',
        settings: {
            colors: ['#ff9900', '#1a1b37', '#b6080b', '#6a4260'],
            minSize: 50,
            maxSize: 300,
            numLights: 40
        },
        image: 'https://i.imgur.com/vazIqCa.jpg'
    },
    {
        label: 'Fireflies',
        settings: {
            colors: ['#D7FF00'],
            minSize: 3,
            maxSize: 15,
            numLights: 100
        },
        image: 'https://i.imgur.com/fcolup0.jpg'
    },
    {
        label: 'Candle Vigil',
        settings: {
            colors: ['orange'],
            minSize: 20,
            maxSize: 40,
            numLights: 100
        },
        image: 'https://i.imgur.com/qfuBCju.jpg'
    },
    {
        label: 'Tropical Ocean',
        settings: {
            colors: ['#70EBA9', '#FFFF00', '#00A5FF'],
            minSize: 20,
            maxSize: 200,
            numLights: 50
        },
        image: 'https://i.imgur.com/KZYp9rH.jpg'
    }
];
const Presets = ({ setColors, setMinSize, setMaxSize, setNumLights }) => {
    const setPreset = ({ colors, minSize, maxSize, numLights }) => {
        console.log('hi');
        setColors(colors);
        setMinSize(minSize);
        setMaxSize(maxSize);
        setNumLights(numLights);
    };
    return (
        <div className="preset">
            {presetList.map(({ settings, label, image }) => (
                <div
                    className="preset-shell"
                    onClick={() => {
                        setPreset(settings);
                    }}
                >
                    <PresetBlock label={label} image={image} />
                </div>
            ))}
        </div>
    );
};
export default Presets;
