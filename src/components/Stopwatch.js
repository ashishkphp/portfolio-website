// src/components/Stopwatch.js
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
	const [time, setTime] = useState(0); // time in seconds
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval = null;

		if (isActive) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else if (!isActive && time !== 0) {
			clearInterval(interval);
		}

		// Stop at 9 hours (32400 seconds)
		if (time >= 32400) {
			clearInterval(interval);
			setIsActive(false);
		}

		return () => clearInterval(interval);
	}, [isActive, time]);

	const formatTime = (time) => {
		const getSeconds = `0${time % 60}`.slice(-2);
		const minutes = Math.floor(time / 60);
		const getMinutes = `0${minutes % 60}`.slice(-2);
		const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
		return `${getHours}:${getMinutes}:${getSeconds}`;
	};

	return (
		<div>
			<h2>Stopwatch</h2>
			<p style={{ fontSize: '24px' }}>{formatTime(time)}</p>
			<div>
				<button onClick={() => setIsActive(true)}>Start</button>
				<button onClick={() => setIsActive(false)}>Pause</button>
				<button onClick={() => { setTime(0); setIsActive(false); }}>Reset</button>
			</div>
		</div>
	);
};

export default Stopwatch;


/*import React, { useState, useRef } from 'react';

const Stopwatch = () => {

	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);
	const timeRef = useRef(null);

	const start = () => {
		if(!running){
			setRunning(true);
			timeRef.current = setInterval( () => setTime((prev) => prev + 1 ), 1000);
		}
	};

	const stop = () => {
		setRunning(false);
		clearInterval( timeRef.current);
	};

	const reset = () => {
		setRunning(false);
		clearInterval( timeRef.current);
		setTime(0);
	};

	return(
		<div>
			<h3>Stopwatch: {time}s</h3>
			<button onClick={start} disabled={running}>Start</button>
			<button onClick={stop} disabled={!running}>Stop</button>
			<button onClick={reset} >Reset</button>
		</div>
	);
};

export default Stopwatch;*/