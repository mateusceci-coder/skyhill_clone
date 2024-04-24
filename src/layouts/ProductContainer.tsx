import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

interface ProductContainerProps {
  product: {
    id: number;
    type: string
    title: string;
    image: string;
    price: number;
    oldPrice?: number;
    installment?: string;
  }[];
}

export default function ProductContainer({ product }: ProductContainerProps) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {product.map((item) => (
        <Link to={`/${item.type}/${item.id}`}>
          <li key={item.id} className="flex flex-col items-center gap-1 mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="hover:cursor-pointer"
            />
            <Tooltip title={item.title} placement="top-end">
              <h1 className="truncate max-w-full hover:cursor-pointer hover:underline">
                {item.title}
              </h1>
            </Tooltip>
            <p className="text-center">
              {item.oldPrice ? (
                <>
                  R$
                  <span className="line-through">
                    {" "}
                    {item.oldPrice.toFixed(2)}
                  </span>{" "}
                  |<span className="font-bold">R$ {item.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-bold">R$ {item.price.toFixed(2)}</span>
              )}
            </p>
            {item.installment && (
              <p className="p-2 border">{item.installment}</p>
            )}
          </li>
        </Link>
      ))}
    </ul>
  );
}
