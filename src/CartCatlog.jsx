

function CartCatlog(props) {

    const cartItems = props.products;

    return(<>
        <div>
            <p>Name: {props.name}</p>
            <p>Product ID: {props.id}</p>
            <p>Price: {props.price}</p>
            <p>Product Details: {props.description}</p>

            <button>Add to Cart</button>

            <button>Remove from Cart</button>

            <p>Products Added to the Cart: </p>
        </div>
    </>);

}

export default CartCatlog