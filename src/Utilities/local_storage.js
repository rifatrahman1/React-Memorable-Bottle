

const get_stored_cart = () => {
    const stored_cart = localStorage.getItem('cart');
    if (stored_cart) {
        return JSON.parse(stored_cart);
    }
    else {
        return [];
    }
}

const save_cart_LS = (cart) => {
    const cart_stringify = JSON.stringify(cart);
    localStorage.setItem('cart', cart_stringify)
}

const remove_form_LS = (id) => {
    const cart = get_stored_cart();
    const remaining = cart.filter(idx => idx !== id);
    save_cart_LS(remaining);
}

const add_to_LS = (id) => {
    const cart = get_stored_cart();
    cart.push(id);
    save_cart_LS(cart);
}

export {add_to_LS, get_stored_cart, remove_form_LS};