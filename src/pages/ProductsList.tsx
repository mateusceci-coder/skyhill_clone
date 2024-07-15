import ProductsGrid from "../layouts/ProductContainer";
import Filter from "../components/Filter";
import FilterDrawer from "../components/FilterDrawer";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsParams } from "../interfaces/productParams";

interface ProductsListProps {
  product: ProductsParams[];
  name: string;
}

export default function ProductsList({ product, name }: ProductsListProps) {
  const location = useLocation();

  const allColors = product.map((item) => item.color);
  const colors = [...new Set(allColors)];

  const allSizes = product.flatMap((item) => item.size);
  const sizes = [...new Set(allSizes)];

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("");

  const filteredProducts = product.filter((item) => {
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    const sizeMatch =
      selectedSizes.length === 0 ||
      item.size.some((size) => selectedSizes.includes(size));
    return colorMatch && sizeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "A - Z":
        return a.name.localeCompare(b.name);
      case "Z - A":
        return b.name.localeCompare(a.name);
      case "Preço: Menor para Maior":
        return a.price - b.price;
      case "Preço: Maior para Menor":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  useEffect(() => {
    setSelectedColors([]);
    setSelectedSizes([]);
  }, [location.pathname]);

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
          <select
            className="border ml-2 bg-white text-sm p-2"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>A - Z</option>
            <option>Z - A</option>
            <option>Preço: Menor para Maior</option>
            <option>Preço: Maior para Menor</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <FilterDrawer
          colors={colors}
          sizes={sizes}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
      </div>
      <div className="flex gap-3">
        <Filter
          colors={colors}
          sizes={sizes}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
        <ProductsGrid product={sortedProducts} />
      </div>
    </section>
  );
}
