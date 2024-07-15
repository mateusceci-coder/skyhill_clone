import { Tooltip } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const linksSmall = [
    {href: "/acessorios", src: "/home/fitness-home.webp", alt: "fitness", title: "Fitness"},
    {href: "/acessorios", src: "/home/cross-training-home.webp", alt: "cross-training", title: "Cross Training"},
    {href: "/running", src: "/home/running-home.webp", alt: "running", title: "Running"},
  ]

  const linksBig = [
    {href: "/grips", src: "/home/hand-grip-home.jpg", alt: "hand-grip", title: "Hand Grips", subtitle: "Os mais amados do país"},
    {href: "/munhequeiras", src: "/home/munhequeiras-home.webp", alt: "munhequeiras", title: "Munhequeiras", subtitle: "Suporte para estender seus limites"},
    {href: "/kits", src: "/home/kits-home.webp", alt: "kits", title: "Kits", subtitle: "Produtos combinados com até 15% OFF"},
    {href: "/kits", src: "/home/acessorios-home.webp", alt: "acessorios", title: "Kits", subtitle: "Camisetas, garrafas, bags e muito mais"},
  ]

  return (
    <main>
      <Slider {...settings}>
        <div>
          <img
            src="/home/banner1-home.webp"
            alt="banner 1"
            className="max-h-152 w-full cursor-pointer"
          />
        </div>
        <div>
          <img
            src="/home/banner2-home.webp"
            alt="banner 2"
            className="max-h-152 w-full cursor-pointer"
          />
        </div>
        <div>
          <img
            src="/home/banner3-home.webp"
            alt="banner 3"
            className="max-h-152 w-full cursor-pointer"
          />
        </div>
      </Slider>
      <section className="flex flex-col items-center gap-8 my-16">
        <h1 className="text-2xl font-bold max-w-5xl text-center">
          LINHA DE ACESSÓRIOS PARA SUAS CORRIDAS, TREINOS E WODS NAS RUAS, EM
          CASA, NA ACADEMIA, BOX OU ONDE ESTIVER
        </h1>
        <h3>SKYHILL</h3>
      </section>
      <section className="mb-16">
        <h1 className="text-2xl font-bold text-center mb-4">LANÇAMENTOS</h1>
        <ul className="grid grid-cols-3 mx-auto max-w-5xl gap-6">
          <li className="flex flex-col items-center gap-1 mb-4">
            <img
              src="/cintos/cinto-home.webp"
              alt="grip1 home"
              className="hover:cursor-pointer"
            />
            <Tooltip title="CINTO LOMBAR PARA LPO ORBIT" placement="top-end">
              <h1 className="truncate max-w-full hover:cursor-pointer hover:underline">
                CINTO LOMBAR PARA LPO ORBIT
              </h1>
            </Tooltip>
            <div>
              <span className="line-through">R$399,90</span> |
              <span className="font-bold">R$379,90</span>
            </div>
            <p className="p-2 border">
              <b>5</b>x de <b>R$75,98</b> sem juros{" "}
            </p>
          </li>
          <li className="flex flex-col items-center gap-1 mb-4">
            <img
              src="/grips/grip-inspiration.webp"
              alt="grip1 home"
              className="hover:cursor-pointer"
            />
            <Tooltip
              title="Hand Grip Competition 2.0 Ed. Wodapalooza"
              placement="top-end"
            >
              <h1 className="truncate max-w-full hover:cursor-pointer hover:underline">
                Hand GRIP INSPIRATION 2.4
              </h1>
            </Tooltip>
            <div>
              <span className="line-through">399,90</span> |
              <span className="font-bold">R$ 359,90</span>
            </div>
            <p className="p-2 border">
              <b>5</b>x de <b>R$71,98</b> sem juros{" "}
            </p>
          </li>
          <li className="flex flex-col items-center gap-1 mb-4">
            <img
              src="/grips/grip-wodapalooza.webp"
              alt="grip1 home"
              className="hover:cursor-pointer"
            />
            <Tooltip
              title="HAND GRIP COMPETITION 2.0 ED. WODAPALOOZA"
              placement="top-end"
            >
              <h1 className="truncate max-w-full hover:cursor-pointer hover:underline">
                HAND GRIP COMPETITION 2.0 ED. WODAPALOOZA
              </h1>
            </Tooltip>
            <span className="font-bold">R$ 299,90</span>
            <p className="p-2 border">
              <b>4</b>x de <b>R$74,98</b> sem juros{" "}
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <ul className="mx-auto grid md:grid-cols-3 gap-6 max-w-5xl mb-6">
          {linksSmall.map((link) => (
            <Link to={link.href} key={link.href}>
              <li className="relative hover:cursor-pointer overflow-hidden group">
                <img
                  src={link.src}
                  alt={link.alt}
                  className="transition-all duration-500 ease-in-out transform group-hover:scale-105 w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-opacity-50">
                  <p className="text-white font-bold text-3xl">{link.title}</p>
                </div>
              </li>
            </Link>
          ))}

        </ul>
        <ul className="mx-auto grid md:grid-cols-2 gap-6 max-w-5xl mb-6">
          {linksBig.map((link) => (
            <Link to={link.href} key={link.href}>
              <li className="relative hover:cursor-pointer overflow-hidden group">
                <img
                  src={link.src}
                  alt={link.alt}
                  className="transition-all duration-500 ease-in-out transform group-hover:scale-105 max-h-120 w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-opacity-50">
                  <p className="text-white font-bold text-3xl mb-4">{link.title}</p>
                  <p className="text-white text-lg">{link.subtitle}</p>
                </div>
              </li>
            </Link>
          ))}

        </ul>
      </section>
      <section className="flex justify-center items-center gap-2">
        <InstagramIcon />
        <h1 className="text-2xl font-bold hover:underline">@SKYHILL_BR</h1>
      </section>
    </main>
  );
}
