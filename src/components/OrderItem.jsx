import React, {useContext} from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext';
import closeIcon from '@icons/icon_close.png';

const OrderItem = (props) => {
	

	const { removeFromCart } = useContext(AppContext);
	const {product, indexValue} = props;

	const handleRemove = (index) => {
		removeFromCart(index);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={closeIcon} alt="close" onClick={() => handleRemove(indexValue)}/>
		</div>
	);
}

export default OrderItem;