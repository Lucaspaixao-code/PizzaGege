import { useContext } from "react";
import { TitleContext } from "../context/TitleContext";

export default function useTitle(){
    const value = useContext(TitleContext)
    return value;
}
