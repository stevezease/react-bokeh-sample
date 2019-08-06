import React, { useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import './size-settings.css';
import Slider from 'rc-slider';
import { debounce } from 'lodash';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const updateSize = debounce((evt, setMinSize, setMaxSize) => {
    setMinSize(evt[0]);
    setMaxSize(evt[1]);
}, 500);

const SizeSettings = ({ minSize, setMinSize, maxSize, setMaxSize }) => {
    const [minValue, setMinValue] = useState(minSize);
    const [maxValue, setMaxValue] = useState(maxSize);
    useEffect(() => {
        if (minSize != minValue) {
            setMinValue(minSize);
        }
        if (maxSize != maxValue) {
            setMaxValue(maxSize);
        }
    }, [minSize, maxSize]);
    return (
        <div className="size-settings">
            <Range
                min={1}
                max={500}
                marks={{
                    1: {
                        style: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            textShadow: '0px 0px 3px rgba(0, 0, 0, 0.3)',
                            fontSize: '10px'
                        },
                        label: '1px'
                    },
                    [minSize]: {
                        style: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            textShadow: '0px 0px 3px rgba(0, 0, 0, 0.3)',
                            fontSize: '10px'
                        },
                        label: `${minSize}px`
                    },
                    [maxSize]: {
                        style: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            textShadow: '0px 0px 3px rgba(0, 0, 0, 0.3)',
                            fontSize: '10px'
                        },
                        label: `${maxSize}px`
                    },
                    500: {
                        style: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            textShadow: '0px 0px 3px rgba(0, 0, 0, 0.3)',
                            fontSize: '10px'
                        },
                        label: '500px'
                    }
                }}
                defaultValue={[minSize, maxSize]}
                value={[minValue, maxValue]}
                onChange={evt => {
                    setMinValue(evt[0]);
                    setMaxValue(evt[1]);
                }}
                onAfterChange={evt => {
                    updateSize(evt, setMinSize, setMaxSize);
                }}
            />
        </div>
    );
};
export default SizeSettings;
