import React, { useState } from 'react';
import './App.css';
import Effects from './components/Effects';
import Clock from './components/Clock';

function App() {
    const [showClock, setShowClock] = useState(true);

    let maybeClock = null;
    if( showClock ) {
        maybeClock = <Clock />;
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Effects demo</h1>
            </header>
            <main>
                <Effects />

                <button onClick={() => setShowClock(!showClock)}>Toggle clock</button>
                {maybeClock}
            </main>
        </div>
    );
}

export default App;
