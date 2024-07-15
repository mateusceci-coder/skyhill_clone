import { Badge, Drawer } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { ProductInCart } from "../interfaces/productInCart";

export default function ShoppingCart() {
  const [openCart, setOpenCart] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenCart(newOpen);
  };
  const dispatch = useDispatch();
  const products = useSelector(
    (state: { cart: { items: ProductInCart[] } }) => state.cart.items
  );

  const totalAmount = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const handleDecrease = (id: number, size: string) => {
    dispatch(decreaseQuantity({ id, size }));
  };

  const handleIncrease = (id: number, size: string) => {
    dispatch(increaseQuantity({ id, size }));
  };

  const handleDeleteProduct = (id: number, size: string) => {
    dispatch(removeFromCart({ id, size }));
  };


  return (
    <div>
      <Badge
        badgeContent={products.length}
        onClick={toggleDrawer(true)}
        color="primary"
      >
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
            <>
              <ul className="flex justify-between">
                <div className="flex flex-col gap-2 py-2">
                  {products.map((product) => (
                    <li key={product.id} className="flex gap-2">
                      <img src={product.image} alt={product.name} width={80} />
                      <div className="w-full">
                        <div className="flex flex-col gap-2">
                          <p>
                            {product.name} ({product.size})
                          </p>
                          <p>R$ {product.price.toFixed(2)}</p>
                          <div className="flex">
                            <span
                              onClick={() =>
                                handleDecrease(product.id, product.size)
                              }
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
                              onClick={() =>
                                handleIncrease(product.id, product.size)
                              }
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
                        <div
                          onClick={() =>
                            handleDeleteProduct(product.id, product.size)
                          }
                        >
                          <DeleteOutlineOutlinedIcon className="hover:cursor-pointer" />
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
              <div className="font-bold text-xl flex justify-between">
                <p>TOTAL</p>
                <p>R$ {totalAmount.toFixed(2)}</p>
              </div>
            </>
          )}
          {products.length === 0 && (
            <p className="text-red-500">O CARRINHO DE COMPRAS ESTÁ VAZIO.</p>
          )}
        </div>
      </Drawer>
    </div>
  );
}
