import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import useAuth from "../../router/validations/Auth/hook/useAuth";
import { useNavigate } from "react-router-dom";
import './index.css'

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {handleLogin} = useAuth()
    const navigate = useNavigate()
    function handleLoginInButton(){
        handleLogin("Vitor","batatinha")
        navigate("/")
    }
    return <>
    <h1>ISSO È UM TESTE :D</h1>
    <form id="login-form">    
        <TextField
            className='login-element'
            type='text'
            id="usernameId"
            label="Nome do Usuário"
            value={username}
            onChange={(event) => {setUsername(event.target.value)}}    
        /> 
        <TextField
            className='login-element'
            type='text'
            id="passwordId"
            label="Senha do Usuário"
            value={password}
            onChange={(event) => {setPassword(event.target.value)}}    
        />        
        <Button color="secondary"
        className='login-element' variant="contained" onClick={()=> handleLoginInButton()} >Entrar</Button>
        
    </form>
    
    </>
}