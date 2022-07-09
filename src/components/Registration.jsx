import React from 'react'
import { useState } from 'react';
import Login from './Login'
import { useNavigate } from 'react-router-dom';


const Registration = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true)
    const history =  useNavigate();

    // function navigateTo(){
    //     
    // }

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);
        }
        else {
            setFlag(false);
            let names = JSON.parse(localStorage.getItem('name')) || [];
            names.push(name);

            let emails = JSON.parse(localStorage.getItem('email')) || [] ;
            emails.push(email);

            let passwords = JSON.parse(localStorage.getItem('password')) || [];
            passwords.push(password);

            localStorage.setItem('name', JSON.stringify(names));
            localStorage.setItem('email', JSON.stringify(emails));
            localStorage.setItem('password', JSON.stringify(passwords));

            setLogin(false);
            history('/login');
        }
    }

    function handleClick(){
        history('/login')
    }

    return (
        <div>
        {login ? (
            <form onSubmit={handleSubmit} style={{marginTop:180}}>
                <div className="card py-3 p-5 mt-5" style={{ width: 600, height: 600, display: "flex", justifyContent: "center", margin: "auto", borderRadius:50, backgroundColor:"whitesmoke" }}>

                    <div className="card-body">
                        <h1 className="card-title" style={{textAlign:"center"}}>Do Registered!!</h1>
                    </div>
                    <ul className="list-group " style={{padding:10}}>
                        <li className="list-group-item" style={{borderRadius:50, margin:"10",padding:10}}>
                            <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)} placeholder='Enter your name' style={{width:450,height:50, border:"none", borderRadius:50, padding:10}}></input>
                        </li>
                        <li className="list-group-item" style={{borderRadius:50, margin:"10",padding:10,marginTop:20}}>
                            <input type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} placeholder='Enter your E-mail' style={{width:450,height:50, border:"none", borderRadius:50, padding:10}}></input>
                        </li>
                        <li className="list-group-item" style={{borderRadius:50, margin:"10",padding:10,marginTop:20}}>
                            <input type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)} placeholder='Enter your password' style={{width:450,height:50, border:"none", borderRadius:50, padding:10}}></input>
                        </li>
                    </ul>
                    <div className="card-body" style={{display:"flex",justifyContent:"center", alignItems:"center",textAlign:"center"}}>
                        <button type="submit"  className="btn btn-outline-dark">REGISTER</button>
                    </div>
                    <p onClick={handleClick} style={{display:"flex",justifyContent:"center", alignItems:"center",textAlign:"center"}}>Already Registred log in !!</p>
                </div>

                {flag && (
                    <div class="alert alert-warning" role="alert">
                        Please fill all the field's !!!
                    </div>
                )}

            </form>
        ):(null)}
        </div>
    )
}

export default Registration;