import PizzasOrderType from "./PizzasOrderType";

export default interface IOrderType {
    id: string,
    name: string,
    address: string,
    discount: number,
    pizzas: PizzasOrderType[]
}