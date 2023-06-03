import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hook/useAuth";

export default function AuthValidation(){
    const {isAuthenticated} = useAuth()

    return isAuthenticated ? <Outlet/> : <Navigate to={"/login"} />
}