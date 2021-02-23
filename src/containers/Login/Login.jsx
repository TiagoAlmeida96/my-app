import React, {useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom';
import {BrowserRouter as Router,Route, Switch, Link, Redirect} from "react-router-dom";


function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const history = useHistory();
  useEffect(()=> {
    if (localStorage.getItem('user-info')){
      history.push("/add")
    }
  }, [])
  async function login()
  {
    console.warn(email,password);
    let item={email,password};
    try{
    const result = await fetch("http://cv-local.decode.localhost/api/dna/user/get", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hbmFnZXJAZGVjb2RlLnB0IiwianRpIjoiOGYwMDhiMTk5ZDk2NGIwYTgyZTg3OTJjZGNhY2ZmZTAiLCJlbWFpbCI6Im1hbmFnZXJAZGVjb2RlLnB0Iiwicm9sZSI6Ik1hbmFnZXIiLCJuYmYiOjE2MTQwMDM1MzksImV4cCI6MTYxNDAxNDMzOSwiaWF0IjoxNjE0MDAzNTM5LCJpc3MiOiJETkFJc3N1ZXIiLCJhdWQiOiJETkFBdWRpZW5jZSJ9.gWwqJaOiLw9VUhNVblHQUAg2TKxBCKsRmRQA0cmUGHI'
      },
      mode: 'cors',
      cache: 'default'
    })
    const data = await result.json();
    console.log(data)
    history.push('/Users')
  }catch(err){
    return err;
  }
    
     
    
    
        
  }
  return (
    <div className="wrp-login" align="center">
      <div className="container" align="center">
      <h1 color="white">Login Page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input type ="text" placeholder="email"
        onChange={(e)=>setEmail(e.target.value)}
        className="input-wrapper"/>
        <br />
        <input type ="password" placeholder="password"
        onChange={(e)=>setPassword(e.target.value)}
        className="input-wrapper"/>
        <br />
        
        <button onClick={(login)}  className= "button">Login</button>
        
      </div>
    </div>
    </div>
  )
}
export default Login
