import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const state = useSelector((state)=> state.handlerCart);
    const [login , isLogin] = useState(false)
    const history = useNavigate();

    function navigateToHome(){
        localStorage.setItem('currentName',false);
        localStorage.setItem('currentPassword',false)
        history('/products');
    }
   
    function navigateToLogin(){
        history('/login');
    }

    function navigateToRegister(){
        history('/register');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Gadget Store</NavLink>
                    <NavLink className="product" to="/products">Products</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                        
                        <form className="d-flex" role="search">
                                <div className="buttons">
                                 {localStorage.getItem('currentName') ? (  
                                
                                <button  className="btn btn-primary mx-3" onClick={navigateToHome}type="submit">Logout</button>
                                ):(
                                    <><button  className=" btn btn-primary  mx-3" onclick={navigateToLogin} type="submit">Sign-in</button>
                                    <button  className="btn btn-primary mx-3" onclick={navigateToRegister} type="submit">Sign-up</button></>
                                )}
                                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                    <i className="fa-solid fa-cart-shopping"></i>cart({state.length})
                                </NavLink>
                                </div>
                        </form>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;