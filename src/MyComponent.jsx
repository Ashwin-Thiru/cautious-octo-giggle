import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick Up");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p><hr/>

            <input value={quantity} onChange={handleQuantityChange} type="numbers"/>
            <p>Quantity: {quantity}</p><hr/>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Fuck You BISH !!' />
            <p>Comment: {comment}</p><hr/>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="CouponCard">CouponCard</option>
            </select>
            <p>Payment: {payment}</p><hr/>

            <label>
                <input type="radio" value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onClick={handleShippingChange}/>
                Pick Up
            </label><br/>
            
            <label>
                <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onClick={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping Mode: {shipping}</p>

        </div>
    );
}

export default MyComponent