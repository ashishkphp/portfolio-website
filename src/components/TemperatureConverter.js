// src/components/TemperatureConverter.js

import React, { useState} from 'react';

const TemperatureConverter = () => {

	const [celsius, setCelsius] = useState('');
	const [fahrenheit, setFahrenheit] = useState('');

	const handleCelsiusChange = (e) => {

		const value = e.target.value;
		setCelsius(value);
		setFahrenheit((value * 9/5 + 32).toFixed(2));

	};

	return(

		<div>
			<input 
				type="number"
				placeholder="Celsius"
				value={celsius}
				onChange={handleCelsiusChange} />
				<p>{celsius}°C =  {fahrenheit}°F</p>
		</div>

	);

};

export default TemperatureConverter;