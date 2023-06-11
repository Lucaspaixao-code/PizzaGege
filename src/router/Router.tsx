import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/Login";
import AuthValidation from "./validations/Auth";
import TesteFilho from "../pages/Teste";
import Base from "../core/layout/Base";
import Order from "../pages/Order";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/login" element={<Login />} />
            <Route element={<AuthValidation />}>
                <Route element={<Base />} >
                    <Route path="/" element={<TesteFilho title="Estoque" />} />
                    <Route path="/order" element={<Order title="Pedido" />} />
                    <Route path="/dashboard" element={<TesteFilho title="Dashboard" />} />
                </Route>
            </Route>
        </Route>
    )
)

export default Router;