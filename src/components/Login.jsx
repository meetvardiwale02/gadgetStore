
import React from 'react'
import { useState } from 'react';
import Products from './Products';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const[emaillog , setEmailLog] = useState("");
    const[passwordlog , setPasswordLog] = useState("");
    const[flag, setFlag] = useState(false);
    const[home, setHome] = useState(true);
    const history = useNavigate();
    

    // function navigateTo(){
    //     
    // }

    function handleClick(e){
        e.preventDefault();
        const mail =JSON.parse(localStorage.getItem('email'));
        const password = JSON.parse(localStorage.getItem('password'));

        if(!emaillog || !passwordlog)
        {
            setFlag(true);
        }else if(passwordlog !== password || emaillog !== mail )
        {
            setFlag(true);
        }
        for(var i=0; i<mail.length; i++)
        {
                if(mail[i]=== emaillog && password[i]===passwordlog)
                {       
                        setFlag(false)
                        setHome(false);
                        history("/");
                        localStorage.setItem('isLogin', true);
                        localStorage.setItem('currentName', true);
                        localStorage.setItem('currentPassword', true);
                }
        }
        
    }

    return (
        <div>
            {home ? (
            <form onSubmit={handleClick} style={{marginTop:180}}>
                <div className="card py-3 p-5 mt-5" style={{ width: 600, height: 500, display: "flex", justifyContent: "center", margin: "auto", borderRadius:50, backgroundColor:"whitesmoke" }}>

                    <div className="card-body">
                        <h1 className="card-title" style={{textAlign:"center"}}>Do Login!!</h1>
                    </div>
                    <ul className="list-group " style={{padding:10}}>
                        
                        <li className="list-group-item" style={{borderRadius:50, margin:"10",padding:10}}>
                            <input type="email" name="email" id="email" onChange={(event) => setEmailLog(event.target.value)} placeholder='Enter your E-mail' style={{width:450,height:50, border:"none", borderRadius:50, padding:10}}></input>
                        </li>
                        <li className="list-group-item" style={{borderRadius:50, margin:"10",padding:10,marginTop:20}}>
                            <input type="password" name="password" id="password" onChange={(event) => setPasswordLog(event.target.value)} placeholder='Enter your password' style={{width:450,height:50, border:"none", borderRadius:50, padding:10}}></input>
                        </li>
                    </ul>
                    <div className="card-body" style={{display:"flex",justifyContent:"center", alignItems:"center",textAlign:"center"}}>
                        <button  type="submit"  className="btn btn-outline-dark" >LOGIN</button>
                    </div>
                    
                </div>

                {flag && (
                    <div class="alert alert-warning" role="alert">
                        Please fill correct Ifno !!!
                    </div>
                )}

            </form>
    ): (
        null
    )}
        </div>
    )
}

export default Login;