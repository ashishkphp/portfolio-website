import React, { useState } from 'react';

const ProductCard = () => {
	const [qty, setQty] = useState(1);
	const price = 10.0;

	const increment = () => setQty(qty + 1);
	const decrement = () => setQty(qty > 1 ? qty - 1 : 1);

	return (
		<div>
			<h3>Product Name</h3>
			<p>Price: ${price.toFixed(2)}</p>
			
			<div>
				<button onClick={decrement}>-</button>
				<span style={{ margin: '0 10px' }}>{qty}</span>
				<button onClick={increment}>+</button>
			</div>
			
			<p>Total: ${ (price * qty).toFixed(2) }</p>
		</div>
	);
};

export default ProductCard;
