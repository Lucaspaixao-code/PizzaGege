import useTitle from "../../core/components/Header/hook/useTitle"

interface props {
    title: string
}
export default function TesteFilho({title}: props){
    const {defineTitle} = useTitle()
    defineTitle(title)
    return <>
    <h1>Deu boa chefe :D</h1>
    </>
}