import ProductsGrid from "../layouts/ProductContainer";
import Filter from "../components/Filter";
import FilterDrawer from "../components/FilterDrawer";
import { Link } from "react-router-dom";

interface ProductsListProps {
  product: {
    id: number;
    title: string;
    image: string;
    color: string;
    price: number;
    size: string[];
    oldPrice?: number;
    installment?: string;
  }[];
  name: string;
}

export default function ProductsList({product, name}: ProductsListProps) {
  const allColors = product.map(item => item.color); // Mapeia para obter as cores
  const colors = [...new Set(allColors)]; // Converte o array para um Set para remover duplicatas e volta para array

  const allSizes = product.flatMap(item => item.size); // Combina todos os arrays de tamanhos
  const sizes = [...new Set(allSizes)]; // Remove tamanhos duplicados

  return (
    <section className="my-10 flex flex-col max-w-5xl gap-4 mx-auto px-2">
      <div className="flex justify-between mb-8">
        <p className="text-lg">
          <Link to="/">
            <span className="hover:cursor-pointer hover:underline">Início</span>
          </Link>
          / <span className="font-bold">{name}</span>
        </p>
        <div className="flex items-center">
          <p className="text-sm">Ordernar por:</p>
          <select className="border ml-2 bg-white text-sm p-2">
            <option>A - Z</option>
            <option>Z - A</option>
            <option>Preço: Menor para Maior</option>
            <option>Preço: Maior para Menor</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <FilterDrawer />
      </div>
      <div className="flex gap-3">
        <Filter colors={colors} sizes={sizes} />
        <ProductsGrid product={product} />
      </div>
    </section>
  );
}
