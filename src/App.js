import React, { useState } from 'react';
import Bokeh from 'react-bokeh';
import './App.css';
import '../node_modules/react-bokeh/src/bokeh.css';
import ColorPicker from './components/color-picker/color-picker';
import SettingsForm from './components/settings-form/settings-form';
import Overlay from './components/overlay/overlay';

function App() {
    const [backgroundColor, setBackgroundColor] = useState('black');
    const [colors, setColors] = useState([
        '#ff9900',
        '#1a1b37',
        '#b6080b',
        '#6a4260'
    ]);

    const [minSize, setMinSize] = useState(50);
    const [maxSize, setMaxSize] = useState(300);
    const [numLights, setNumLights] = useState(20);
    return (
        <div
            className="App"
            style={{
                backgroundColor
            }}
        >
            <Bokeh
                randomGenerateSettings={{
                    colors,
                    numLights,
                    minSize,
                    maxSize
                }}
            />
            <Overlay
                colors={colors}
                setColors={setColors}
                minSize={minSize}
                setMinSize={setMinSize}
                maxSize={maxSize}
                setMaxSize={setMaxSize}
                numLights={numLights}
                setNumLights={setNumLights}
            />
        </div>
    );
}

export default App;
