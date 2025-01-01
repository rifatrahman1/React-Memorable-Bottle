import './Bottle.css'

const Bottle = ({bottle, handle_add_to_cart}) => {
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h2>{name}</h2>
            <br />
            <img src={img} alt="" />
            <br />
            <h2>Price: {price}</h2>
            <br />
            <button onClick={() => handle_add_to_cart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;