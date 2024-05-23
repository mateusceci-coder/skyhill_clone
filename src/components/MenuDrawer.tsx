import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MenuDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex md:hidden items-center">
      <div onClick={toggleDrawer(true)}>
        <MenuIcon className="hover:cursor-pointer" />
      </div>
      <p className="hover:cursor-pointer" onClick={toggleDrawer(true)}>MENU</p>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        className="absolute"
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-grow">
            <div className="flex p-2 justify-end border-b">
              <CloseIcon
                onClick={toggleDrawer(false)}
                className="hover:cursor-pointer"
              />
            </div>
            <ul>
              <li className=" border-b">
                <Accordion sx={{ boxShadow: "none", border: "none" }}>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>CROSS TRAINING</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="flex flex-col">
                      
                      <li className="bg-gray-300 p-3 border-b">GRIPS</li>
                      <li className="bg-gray-300 p-3 border-b">JOELHEIRAS</li>
                      <li className="bg-gray-300 p-3 border-b">CORDAS</li>
                      <li className="bg-gray-300 p-3 border-b">
                        CINTOS P/ LPO
                      </li>
                      <li className="bg-gray-300 p-3">+ ACESSÓRIOS</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className="p-3 border-b">RUNNING</li>
              <li className="p-3 border-b">KITS</li>
              <li className="p-3">SKYHILL CARE</li>
            </ul>
          </div>
          <div className="flex items-center gap-1 p-3 relative bottom-0 border-t mt-auto">
            <AccountCircleIcon fontSize="large" />
            <p>Cadastre-se</p> | <p>Iniciar sessão</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
