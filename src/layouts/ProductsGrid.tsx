import { Tooltip } from "@mui/material";
import { Grips } from "../data/CrossTraining";


export default function ProductsGrid() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Grips.map((grip) => (
          <li key={grip.id} className="flex flex-col items-center gap-1 mb-4">
            <img
              src={grip.image}
              alt={grip.title}
              className="hover:cursor-pointer"
            />
            <Tooltip title={grip.title} placement="top-end">
              <h1 className="truncate max-w-full hover:cursor-pointer hover:underline">
                {grip.title}
              </h1>
            </Tooltip>
            <p className="text-center">
              {grip.oldPrice ? (
                <>
                  R$
                  <span className="line-through">
                    {" "}
                    {grip.oldPrice.toFixed(2)}
                  </span>{" "}
                  |<span className="font-bold">R$ {grip.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-bold">R$ {grip.price.toFixed(2)}</span>
              )}
            </p>
            {grip.installment && (
              <p className="p-2 border">{grip.installment}</p>
            )}
          </li>
        ))}
      </ul>
  )
}
