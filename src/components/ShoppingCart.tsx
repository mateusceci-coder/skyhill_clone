import { Badge, Drawer } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from "react";

export default function ShoppingCart() {
  const [openCart, setOpenCart] = useState(false);
  const [increase, setIncrease] = useState(1);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenCart(newOpen);
  };

  const handleDecrease = () => {
    if (increase <= 1) return;
    setIncrease((increase) => increase - 1)
  };

  const handleIncrease = () => {
    setIncrease((increase) => increase + 1)
  }

  return (
    <div>
      <Badge badgeContent={1} onClick={toggleDrawer(true)} color="primary">
        <ShoppingCartOutlinedIcon className="hover:cursor-pointer" />
      </Badge>
      <Drawer
        open={openCart}
        onClose={toggleDrawer(false)}
        anchor="right"
      >
        <div className="w-[320px] md:w-112 flex flex-col p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl py-4">CARRINHO DE COMPRAS</h1>
            <div onClick={toggleDrawer(false)}>
              <CloseIcon className="hover:cursor-pointer" color="error" />
            </div>
          </div>
          <div className="border-y py-2 flex justify-between">
            <p className="text-lg">PRODUTO</p>
            <p className="text-lg mr-8">SUBTOTAL</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 py-2">
              <img src="/grips/grip-black.webp" alt="grip-black" width={80} />
              <div className="flex flex-col gap-2">
                <p>Hand Grip Black (P)</p>
                <p>R$ 299,90</p>
                <div className="flex">
                    <span onClick={handleDecrease} className="border py-1 px-2 text-xl border-black font-bold hover:cursor-pointer hover:text-gray-500">-</span>
                    <input type="text" value={increase} className="border p-2 border-black w-14" />
                    <span onClick={handleIncrease} className="border py-1 px-2 text-xl border-black font-bold hover:cursor-pointer hover:text-gray-500">+</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mr-3 py-2">
              <span>R$ 299,90</span>
              <DeleteOutlineOutlinedIcon className="hover:cursor-pointer" />
            </div>
            {/* <p className="text-red-500">O CARRINHO DE COMPRAS ESTÁ VAZIO.</p> */}
          </div>
        </div>
      </Drawer>
    </div>
  );
}
