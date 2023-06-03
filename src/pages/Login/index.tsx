import { Button } from "@mui/material";
import useAuth from "../../router/validations/Auth/hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const {handleLogin} = useAuth()
    const navigate = useNavigate()
    function handleLoginInButton(){
        handleLogin("Vitor","batatinha")
        navigate("/")
    }
    return <>
    <h1>ISSO È UM TESTE :D</h1>
    <Button color="secondary" variant="contained" onClick={()=> handleLoginInButton()} >Entrar</Button>
    </>
}