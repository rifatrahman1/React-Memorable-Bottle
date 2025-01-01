import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, set_bottles] = useState([]);
    const [cart, set_cart] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => set_bottles(data))
    }, []);
    
    const handle_add_to_cart = (bottle) => {
        const new_cart = [...cart, bottle];
        set_cart(new_cart);
    }


    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="bottles">
            
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handle_add_to_cart={handle_add_to_cart}></Bottle>)
            }
        </div>
        </div>
    );
};

export default Bottles;