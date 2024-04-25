import { Badge, Drawer } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Dispatch, SetStateAction, useState } from "react";
import { ProductInCart } from "../interfaces/productInCart";

interface ShoppingCartProps {
  products: ProductInCart[];
  setProducts: Dispatch<SetStateAction<ProductInCart[]>>;
}

export default function ShoppingCart({
  products,
  setProducts,
}: ShoppingCartProps) {
  const [openCart, setOpenCart] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenCart(newOpen);
  };

  const handleDecrease = (id: number) => {
    setProducts((products) =>
      products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: Math.max(product.quantity - 1, 0) };
        }
        return product;
      })
    );
  };

  const handleIncrease = (id: number) => {
    setProducts((product) =>
      product.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDeleteProduct = () => {
    setProducts((products) =>
      products.filter((product) => product.id !== product.id)
    );
  };

  return (
    <div>
      <Badge badgeContent={1} onClick={toggleDrawer(true)} color="primary">
        <ShoppingCartOutlinedIcon className="hover:cursor-pointer" />
      </Badge>
      <Drawer open={openCart} onClose={toggleDrawer(false)} anchor="right">
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

          {products.length > 0 && (
            <ul className="flex justify-between">
              <div className="flex flex-col gap-2 py-2">
                {products.map((product) => (
                  <li key={product.id} className="flex gap-2">
                    <img src={product.image} alt={product.name} width={80} />
                    <div>
                      <div className="flex flex-col gap-2">
                        <p>{product.name}</p>
                        <p>R$ {product.price.toFixed(2)}</p>
                        <div className="flex">
                          <span
                            onClick={() => handleDecrease(product.id)}
                            className="border py-1 px-2 text-xl border-black font-bold hover:cursor-pointer hover:text-gray-500"
                          >
                            -
                          </span>
                          <input
                            type="text"
                            value={product.quantity}
                            className="border p-2 border-black w-14"
                          />
                          <span
                            onClick={() => handleIncrease(product.id)}
                            className="border py-1 px-2 text-xl border-black font-bold hover:cursor-pointer hover:text-gray-500"
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mr-3 py-2">
                      <span>
                        R${(product.price * product.quantity).toFixed(2)}
                      </span>
                      <div onClick={handleDeleteProduct}>
                        <DeleteOutlineOutlinedIcon className="hover:cursor-pointer" />
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          )}
          {products.length === 0 && (
            <p className="text-red-500">O CARRINHO DE COMPRAS ESTÁ VAZIO.</p>
          )}
        </div>
      </Drawer>
    </div>
  );
}
