// ToggleTheme.js

import React, { useState } from 'react';

const ToggleTheme = () => {
		const [darkMode, setDarkMode] = useState(false);

		const toggleTheme = () => setDarkMode(!darkMode);

		return (

			<div style={{
		      backgroundColor: darkMode ? '#333' : '#FFF',
		      color: darkMode ? '#FFF' : '#000',
		      height: '15vh',
		      textAlign: 'center',
		      padding: '20px'
		    }}>
		    <h2> { darkMode ? 'Dark Mode' : 'Light Mode' } </h2>
		    <button onClick={toggleTheme}> Switch to { darkMode ? 'Light' : 'Dark'} Mode </button>
		    </div>
	); 
};

export default ToggleTheme;