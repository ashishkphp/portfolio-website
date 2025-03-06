// ToggleText.js

import React, { useState } from 'react';

const ToggleText = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (

		<div>
			<button onClick={ () => setIsVisible(!isVisible)}> { isVisible ? 'Hide' : 'Show'} Text </button>
			{ isVisible && <p> Hello, this is some toggle text!</p> }
		</div>

	);
};

export default ToggleText;