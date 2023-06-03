import { AccountBalanceWallet, Dashboard, LocalPizza } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";

interface props {
    icon: string
}

export default function DrawerIcon({icon}: props){
    const props: DefaultComponentProps<SvgIconTypeMap> ={
        color: "info"
    }
    switch (icon) {
        case "stock":
            return <LocalPizza {...props}/>
        case "order":
            return <AccountBalanceWallet {...props}/>
        case "dashboard":
            return <Dashboard {...props}/>
        default:
            return <></>
    }
}