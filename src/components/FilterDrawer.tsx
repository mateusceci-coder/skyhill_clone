import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Drawer } from "@mui/material";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { FilterParams } from "../interfaces/filter";

export default function FilterDrawer({
  colors,
  sizes,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
}: FilterParams) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
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
                {colors.map((color) => (
                  <li className="flex items-center">
                    <Checkbox
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorChange(color)}
                    />
                    <span>{color}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col pb-4 border-b mt-4">
              <h1 className="ml-2 font-bold mb-4">Tamanho</h1>
              <ul className="flex flex-col">
                {sizes.map((size) => (
                  <li className="flex items-center">
                    <Checkbox
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    />
                    <span>{size}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
