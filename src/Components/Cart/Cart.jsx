import './Cart.css'
import PropTypes from 'prop-types';

const Cart = ({cart, handle_remove_cart}) => {
    return (
        <div>
             <h3>Cart: {cart.length}</h3>
            <div className="cart">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img  src={bottle.img}></img>
                        <button onClick={() => handle_remove_cart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart:PropTypes.array.isRequired,
    handle_remove_cart: PropTypes.func.isRequired
}

export default Cart;