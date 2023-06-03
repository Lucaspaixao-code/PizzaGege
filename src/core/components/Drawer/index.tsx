import { Drawer, Stack } from "@mui/material"
import DrawerItens from "./components/Items"

export default function DrawerLeft(){
    return (
  <Drawer
    sx={{
      width: 55,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 55,
        boxSizing: 'border-box',
        background: "linear-gradient(180deg, #2E0606 0%, #5C0B0B 100%)",
      },
    }}
    variant="permanent"
    anchor="left"
  > 
        <Stack height={"100%"} width={"100%"} sx={{
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden"
        }}>
        <DrawerItens/>
        </Stack>
  </Drawer>
    )
}