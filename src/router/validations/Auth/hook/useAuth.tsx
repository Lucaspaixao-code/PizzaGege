import { useContext } from "react";
import {AuthContext} from "../context/Auth-context";

export default function useAuth(){
    const value = useContext(AuthContext)
    return value;
}
