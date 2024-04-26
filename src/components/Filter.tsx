import { Checkbox, colors } from "@mui/material";

interface FilterParams {
  colors: string[];
  sizes: string[];
}

export default function Filter({colors, sizes}: FilterParams) {
  return (
    <div className="hidden md:flex flex-col">
        <h1 className="font-bold my-8 text-xl">Filtros</h1>
        <div className="pb-8 mb-2 border-b">
          <h2 className="mb-2 font-bold text-lg">Cor</h2>
          <ul className="flex flex-col">
            {colors.map((color) => (
              <li className="flex items-center">
                <Checkbox />
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
                <Checkbox />
                <span>{size}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}
