import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import DrawerIcon from "./Icon";
import navigationItens from "./Item";
import { useNavigate } from "react-router-dom";
import theme from "../../../layout/layout";

export default function DrawerItens(){
    const navigate= useNavigate();
    return (
        <List sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
        {navigationItens.map(({icon,link}, index) => (
          <ListItem key={index} 
          className={window.location.pathname == link ? "selected" : ""}
          disablePadding 
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&.selected" : {
              backgroundColor: theme.palette.primary.main,
              borderRadius: "10px"
            }
          }}>
            <ListItemButton onClick={()=>{
                navigate(link)
            }}>
              <ListItemIcon sx={{
                minWidth: "unset"
              }}>
                <DrawerIcon icon={icon} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    )
}