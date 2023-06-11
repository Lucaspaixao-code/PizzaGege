import { useState } from 'react';
import { Button, TextField } from "@mui/material";
import useAuth from "../../router/validations/Auth/hook/useAuth";
import { useNavigate } from "react-router-dom";
import './index.css'
import LogoSvg from "../../assets/logo.svg"

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
    <form id="login-form"> 
    <img src={LogoSvg} alt="logo" width={"50%"} className='logo'/>

        <TextField
            className='login-element custom-textfield'
            sx={{
                margin: '10px',
            }}
            type='text'
            id="usernameId"
            label="Nome do Usuário"
            value={username}
            onChange={(event) => {setUsername(event.target.value)}}    
        /> 
        <TextField
            className='login-element custom-textfield'
            sx={{
                margin: '10px',
            }}            
            type='password'
            id="passwordId"
            label="Senha do Usuário"
            value={password}
            onChange={(event) => {setPassword(event.target.value)}}    
        />        
        <Button color="primary"
        className='login-element' 
        sx={{
            padding:'15px',
            width:'85%',
            marginTop:'10px'
        }}
        variant="contained" 
        onClick={()=> handleLoginInButton()} >Entrar</Button>
        
    </form>
    
    </>
}