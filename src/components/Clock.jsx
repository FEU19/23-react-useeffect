import React, { useState, useEffect } from 'react';

/* addEventListener är en sorts prenumeration, precis som setInterval
window.addEventListener('load', () => {
    // Detta körs bara en gång

    document.querySelector('#button1').addEventListener('click', () => {
        // Detta körs många gånger
        console.log('Detta kommer köras varje gång vi klickar på knappen');
    })
}) */

const Clock = () => {
    const [time, setTime] = useState(null);

    // Körs en gång, när komponenten blir renderad (mounted)
    useEffect(() => {
        // starta prenumeration: hämta aktuell tid varje sekund
        let intervalId = setInterval(() => {
            let newTime = getTime();
            console.log('The time is ', newTime);
            setTime(newTime);
        }, 1000);  // 1000 millisekunder

        // returnera en funktion som kan avsluta prenumerationen
        return () => {
            clearInterval(intervalId);
            console.log('The clock has stopped ticking');
        };
    }, [])

    return (
        <div>What time is it? {time}</div>
    )
}

// Oberoende av komponenten Clock, så den behöver inte ligga inuti Clock
function getTime() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // return '15:09:30';
}

export default Clock;
