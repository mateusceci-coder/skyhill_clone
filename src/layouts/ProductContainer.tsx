import { Tooltip } from "@mui/material";


export default function ProductContainer({product}) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {product.map((item) => (
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
        ))}
      </ul>
  )
}
