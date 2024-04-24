import { Rating } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PaymentIcon from "@mui/icons-material/Payment";
import AddIcon from "@mui/icons-material/Add";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {}

export default function ProductItem({ product }) {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateProducts = () => {
    navigate(-1);
  };

  return (
    <section>
      {product.banner && (
        <img
          src={`"/grips/banner-grip-${product.name}.jpg"`}
          alt="banner"
          className="w-full h-auto max-h-112 mb-10"
        />
      )}
      <div className="flex flex-col max-w-5xl mx-auto">
        <p className="text-lg mb-2">
          <span
            onClick={navigateHome}
            className="hover:cursor-pointer hover:underline"
          >
            Início
          </span>{" "}
          /
          <span
            onClick={navigateProducts}
            className="hover:cursor-pointer hover:underline"
          >
            CROSS TRAINING
          </span>{" "}
          /<span className="font-bold">{product.title}</span>
        </p>
        <Grid container spacing={1}>
          <Grid xs={2}>
            <div className="flex flex-col gap-4">
              <img src={`/${product.type}/${(product.type).slice(0,-1)}1-sm-${product.name}.webp`} alt={`${product.type}-1`} />
              <img src={`/${product.type}/${(product.type).slice(0,-1)}2-sm-${product.name}.webp`} alt={`${product.type}-2`} />
              <img src={`/${product.type}/${(product.type).slice(0,-1)}3-sm-${product.name}.webp`} alt={`${product.type}-3`} />
            </div>
          </Grid>
          <Grid xs={6}>
            <img src={`/${product.type}/${(product.type).slice(0,-1)}-lg-${product.name}.webp`} alt="${product.type}-lg" />
          </Grid>
          <Grid xs={4}>
            <div className="border-b">
              <p className="text-xl">{}</p>
              <div className="flex items-center mb-4">
                <Rating name="read-only" value={5} readOnly />
                <span>(18)</span>
              </div>
              <p className="mb-2">
                <span className="text-gray-500 line-through">
                  {product.oldPrice && <span>R${(product.oldPrice).toFixed(2)}</span>}
                </span>
                <span className="text-2xl font-bold">R${(product.price).toFixed(2)}</span>
              </p>
              <p className="text-center p-1 border w-3/4">
                {product.installment}
              </p>
              <div className="flex gap-1 my-3">
                <img
                  src="/cartoes/visa.png"
                  alt="visa"
                  className=" border"
                  width={40}
                />
                <img
                  src="/cartoes/mastercard.png"
                  alt="visa"
                  className="border"
                  width={40}
                />
                <PaymentIcon fontSize="large" />
                <AddIcon fontSize="large" />
              </div>
              <p>
                <b>5% de desconto</b> pagando com PagarMe
              </p>
              <p className="my-3 text-gray-400 hover:cursor-pointer hover:underline">
                VER MEIOS DE PAGAMENTO
              </p>
            </div>
            <div className="flex flex-col my-4">
              <div className="flex justify-between">
                <p>
                  TAMANHO: <b>P</b>
                </p>
                <div className="flex items-center gap-1">
                  <StraightenOutlinedIcon />
                  <span className="hover:text-gray-400 hover:underline hover:cursor-pointer">
                    GUIA DE MEDIDAS
                  </span>
                </div>
              </div>
            </div>
            <div>
              <ul className="flex gap-2">
                {product.size.map((size) => (
                  <li className="border-2 px-2 hover:cursor-pointer">{size}</li>
                ))}
              </ul>
            </div>
            <div className="my-6">
              <p>QUANTIDADE</p>
              <input type="number" className="border w-20 p-1" min={1} />
            </div>

            <button className="bg-black text-white p-2 w-full hover:bg-slate-900">
              COMPRAR
            </button>
          </Grid>
        </Grid>
        <div className="flex justify-center gap-8 my-20">
          <FacebookIcon fontSize="large" className="hover:cursor-pointer" />
          <TwitterIcon fontSize="large" className="hover:cursor-pointer" />
          <PinterestIcon fontSize="large" className="hover:cursor-pointer" />
        </div>
        <Grid container>
          <Grid xs={8}>
            <h2 className="font-bold">Quem usa Skyhill</h2>
            <p>
              Usado pelos melhores atletas e celebridades do mundo Fitness, o
              Hand Grip Competition 2.0 é assinado por Rafael Kilipper
              (@rafakilipper), que ministra cursos de ginástica pelo Brasil (IRC
              Gymnastics).
            </p>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
