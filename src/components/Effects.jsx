import React, { useState, useEffect } from 'react';

const Effects = () => {
    // console.log('Effects körs (komponenten)');

    const [count, setCount] = useState(10);
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och varje gång komponenten uppdateras
        console.log('useEffect körs');
        document.title = 'Running useEffect...';
    })

    useEffect(() => {
        // Körs bara när komponenten renderats första gången
        // Här passar det bra att starta AJAX
        console.log('useEffect körs []');
    }, [])

    useEffect(() => {
        console.log('useEffect körs - count har ändrats', count);
    }, [count])

    useEffect(() => {
        console.log('useEffect körs - hasData har ändrats', hasData);
    }, [hasData])

    return (
        <div>
            <h3>Effects demo.</h3>
            <div>
                <button onClick={() => setCount(count + 1)}>Click to update!</button> ({count})
            </div>
            <div>
                <button onClick={() => setHasData(true)}>Simulate get data from API</button>
            </div>
        </div>
    )
}

export default Effects;
