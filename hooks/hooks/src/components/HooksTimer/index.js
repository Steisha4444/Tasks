import React, { useState, useRef } from 'react';
import { ThemeButton } from '../ThemeButton';
const HooksTimer = () => {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000)
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current)
    }

    return (
        <div className='timer'>
            <h3>We spend {timer} seconds on our todo</h3>
            <ThemeButton onClick={startTimer} text={"Start Timer"}>Start Timer</ThemeButton>
            <ThemeButton onClick={stopTimer} text={"Stop Timer"}>Stop Timer</ThemeButton>
        </div>
    );
}

export default HooksTimer;