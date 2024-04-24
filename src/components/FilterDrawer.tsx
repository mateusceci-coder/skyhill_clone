import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Drawer } from "@mui/material";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from '@mui/icons-material/Close';

export default function FilterDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="md:hidden inline">
      <div
        onClick={toggleDrawer(true)}
        className="flex gap-2 hover:cursor-pointer p-2 border text-xl"
      >
        <p>FILTRAR</p>
        <ArrowForwardIosIcon />
      </div>
      <div className="min-w-full">
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          anchor="right"
          sx={{
            position: "fixed",
            zIndex: 100,
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <div className="min-w-[320px]">
            <div className="flex justify-end">
              <CloseIcon
                onClick={toggleDrawer(false)}
                className="hover:cursor-pointer"
                color="error"
              />
            </div>
            <section className="flex flex-col pb-4 border-b mt-4">
              <h1 className="ml-2 font-bold mb-4">Cor</h1>
              <ul className="flex flex-col">
                <li className="flex items-center">
                  <Checkbox /> Laranja
                </li>
                <li className="flex items-center">
                  <Checkbox /> Rosa
                </li>
                <li className="flex items-center">
                  <Checkbox /> Preto
                </li>
                <li className="flex items-center">
                  <Checkbox /> Vermelho
                </li>
              </ul>
            </section>
            <section className="flex flex-col pb-4 border-b mt-4">
              <h1 className="ml-2 font-bold mb-4">Tamanho</h1>
              <ul className="flex flex-col">
                <li className="flex items-center">
                  <Checkbox /> P
                </li>
                <li className="flex items-center">
                  <Checkbox /> M
                </li>
                <li className="flex items-center">
                  <Checkbox /> G
                </li>
                <li className="flex items-center">
                  <Checkbox /> GG
                </li>
              </ul>
            </section>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
