import React, { useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import './quantity-settings.css';
import Slider from 'rc-slider';
import { debounce } from 'lodash';

const { createSliderWithTooltip } = Slider;
const SliderToolTip = createSliderWithTooltip(Slider);
const updateNumLights = debounce((evt, setNumLights) => {
    setNumLights(evt);
}, 500);

const QuantitySettings = ({ numLights, setNumLights }) => {
    const [value, setValue] = useState(numLights);
    useEffect(() => {
        if (numLights != value) setValue(numLights);
    }, [numLights]);
    return (
        <div className="quantity-settings">
            <SliderToolTip
                min={0}
                max={250}
                marks={{
                    0: '0',
                    [numLights]: {
                        style: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            textShadow: '0px 0px 3px rgba(0, 0, 0, 0.3)'
                        },
                        label: `${numLights}`
                    },
                    250: '250'
                }}
                value={value}
                defaultValue={numLights}
                onChange={evt => {
                    setValue(evt);
                }}
                onAfterChange={evt => {
                    updateNumLights(evt, setNumLights);
                }}
            />
        </div>
    );
};
export default QuantitySettings;
