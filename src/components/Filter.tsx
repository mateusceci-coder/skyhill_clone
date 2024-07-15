import { Checkbox } from "@mui/material";
import { FilterParams } from "../interfaces/filter";


export default function Filter({
  colors,
  sizes,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
}: FilterParams) {
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
    <div className="hidden md:flex flex-col">
      <h1 className="font-bold my-8 text-xl">Filtros</h1>
      <div className="pb-8 mb-2 border-b">
        <h2 className="mb-2 font-bold text-lg">Cor</h2>
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
      </div>
      <div>
        <h2 className="mb-2 font-bold text-lg">Tamanho</h2>
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
      </div>
    </div>
  );
}
