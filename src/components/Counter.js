//Counter.js

import React, { useState } from 'react';

const Counter = () => {
	const [count, serCount] = useState(0);

	const increment = () => {
		serCount(count+1);
	};

	const decrement = () => {
		serCount(count-1);
	};

	const reset = () => {
		serCount(0);
	};

	return (
		<div style={{ textalign: 'center', padding: '20px'}}>
			<h2>Counter: {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement} disabled={count === 0 }>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Counter;