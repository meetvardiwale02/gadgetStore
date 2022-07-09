import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addCart, clearCart, decItem, delCart, incItem } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



const Cart = () => {

    //Checkout page redirection
    const [login, isLogin] = useState(false);
    const history = useNavigate();

    // for displaying items in cart
    let state = useSelector((state) => state.handlerCart);
    const dispatch = useDispatch();

    // for deleting items in cart
    const handleBtn = (item) => {
        dispatch(delCart(item));
    }

    const handleDecBtn = (cartItem) => {
        dispatch(delCart(cartItem));
    }


    const handleIncBtn = (cartItem) => {
        dispatch(addCart(cartItem));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const [num, setNum] = useState(0);

    useEffect(() => {
        setNum(1);
    }, [])


    let handleChange = (e) => {
        setNum(e.target.value);
    }


    const empty = () => {
        return (
            <>
                <div className="container justify-content-center">
                    <h1>Your Cart Is Empty</h1>
                </div>
            </>
        );
    }

    const getTotal = () => {
        let total = 0;

        {
            state.map((x) => {

                total += (Math.floor(x.price * x.qty));


            })
        }

        
        return Math.floor(total);
    }

    function navigateTo(){
        if(!localStorage.getItem('isLogin'))
        {
            history('/login');
        }
        else{
            isLogin(true);
            history('/thankyou');
        }
    }

    return (
        <>
            <div>
                <Navbar/>
                <div className="container mt-5 scrollbar-primary" style={{ maxHeight: 700, overflowY: "scroll" }}>
                    {state.map((cartItem) => {
                        return (
                            <>
                                <div>
                                    <div className="container" >
                                        <div className="row mt-5 justify-content-center cart" key={cartItem.id}>

                                            <button onClick={() => handleBtn(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                                            <div className="col-md-4 ">
                                                <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                                            </div>
                                            <div className="col-md-4">
                                                <h2>{cartItem.title.substring(0, 15)}</h2>
                                                <p>Description:</p>
                                                <p>{cartItem.description}</p>
                                                <h2>${Math.floor(cartItem.price)}</h2>

                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <button onClick={() => handleDecBtn(cartItem)} className="btn btn-outline-dark">-</button>
                                                    </div>
                                                    <input disabled="true" onChange={handleChange} value={cartItem.qty} style={{ width: 45, margin: '5px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: "center", fontWeight: 'bold', }} type="text"></input>
                                                    

                                                    <div className="input-group-prepend">
                                                        <button onClick={() => handleIncBtn(cartItem)} className="btn btn-outline-dark">+</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <hr />

                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="col-md-4 d-flex justify-right">
                    <div className="card" style={{ backgroundColor: "gray", opacity: 1 }}>
                        <div className="card-body" style={{ color: "white" }}>
                            <h5 className="card-title" style={{ fontSize: 40 }}>Subtotal</h5>
                            <p className="card-text" style={{ fontSize: 30 }}> ${getTotal()}</p>
                            <button className="btn btn-danger me-3" onClick={() => handleClearCart()}>Clear Cart</button>
                            <button className="btn btn-primary me-3" onClick={navigateTo}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart;