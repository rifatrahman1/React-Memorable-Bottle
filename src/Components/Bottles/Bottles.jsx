import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { add_to_LS, get_stored_cart } from "../../Utilities/local_storage";

const Bottles = () => {
    const [bottles, set_bottles] = useState([]);
    const [cart, set_cart] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => set_bottles(data))
    }, []);

    useEffect(() => {
        if (bottles.length > 0) {
            const stored_cart = get_stored_cart();
            console.log(stored_cart, bottles);
            const saved_cart = [];
            
            for (const id of stored_cart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saved_cart.push(bottle)
                }
            }
            console.log('save cart', saved_cart);
            set_cart(saved_cart);
        }
    }, [bottles])

    const handle_add_to_cart = (bottle) => {
        const new_cart = [...cart, bottle];
        set_cart(new_cart);
        add_to_LS(bottle.id)
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