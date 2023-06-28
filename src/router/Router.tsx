import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard/Index.tsx";
import AuthValidation from "./validations/Auth";
import TesteFilho from "../pages/Teste";
import Base from "../core/layout/Base";
import OrderPage from "../pages/Order";
import StockPage from "../pages/Stock";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/login" element={<Login />} />
            <Route element={<AuthValidation />}>
                <Route element={<Base />} >
                    <Route path="/" element={<StockPage />} />
                    <Route path="/order" element={<OrderPage/>} />
                    <Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
                </Route>
            </Route>
        </Route>
    )
)

export default Router;