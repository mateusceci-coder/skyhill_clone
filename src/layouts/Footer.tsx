import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Footer() {
  return (
    <footer>
      <section className="flex flex-col md:flex-row justify-center items-center my-24 gap-4 max-w-5xl mx-auto">
        <div className="flex gap-4">
          <LocalShippingOutlinedIcon fontSize="large" />
          <div>
            <h1 className="text-lg font-bold">ENTREGA EM TODO O PAÍS</h1>
            <p>E primeira troca grátis</p>
          </div>
        </div>
        <div className="text-4xl">|</div>
        <div className="flex gap-4">
          <PaymentOutlinedIcon fontSize="large" />
          <div>
            <h1 className="text-lg font-bold">PAGAMENTO FACILITADO</h1>
            <p>Cartão de Crédito em até 6 vezes, Boleto, PIX, Transferência</p>
          </div>
        </div>
        <div className="text-4xl">|</div>
        <div className="flex gap-4">
          <LockOutlinedIcon fontSize="large" />
          <div>
            <div>
              <h1 className="text-lg font-bold">SITE SEGURO</h1>
              <p>Utilizamos Criptografia SSL</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between px-4 py-12 gap-4 items-center text-white bg-black">
        <div>
          <h1 className="font-bold">RECEBA NOVIDADES DA SKYHILL</h1>
          <div className="flex items-center">
            <input
              type="text"
              className="p-1 bg-black outline-white border border-white w-9/12"
            />

            <SendOutlinedIcon
              className="hover:cursor-pointer bg-white text-black"
              fontSize="large"
            />
          </div>
          <div className="mt-4">
            <h1 className="font-bold">REDES SOCIAIS</h1>
            <InstagramIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
            <YouTubeIcon fontSize="large" />
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-2">FORMAS DE PAGAMENTO</h1>
          <div className="flex gap-2 mb-4 flex-wrap">
            <img src="/cartoes/visa.png" alt="visa" width={40} />
            <img src="/cartoes/mastercard.png" alt="mastercard" width={40} />
            <img src="/cartoes/american.png" alt="american" width={40} />
            <img src="/cartoes/diners.png" alt="diners" width={40} />
            <img src="/cartoes/aura.png" alt="aura" width={40} />
            <img src="/cartoes/elo.png" alt="elo" width={40} />
            <img src="/cartoes/hipercard.png" alt="hipercard" width={40} />
            <img src="/cartoes/discover.png" alt="discover" width={40} />
            <img src="/cartoes/pix.png" alt="pix" width={40} />
            <img src="/cartoes/boleto.png" alt="boleto" width={40} />
          </div>
          <div>
            <h1 className="font-bold mb-2">FORMAS DE ENVIO</h1>
            <div className="flex gap-2">
              <img src="/cartoes/frenet.png" alt="frenet" width={50} />
              <img src="/cartoes/nuvem.png" alt="nuvem" width={50} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-2">NAVEGAÇÃO</h1>
          <ul className="flex flex-col">
            <li className="hover:cursor-pointer hover:underline">
              Sobre a Skyhill
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Personalização
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Representantes
            </li>
          </ul>
        </div>
        <div className="lg:mr-16">
          <h1 className="font-bold mb-2">ATENDIMENTO</h1>
          <ul className="flex flex-col">
            <li className="hover:cursor-pointer hover:underline">
              Central de Atendimento
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Segurança e Privacidade
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Como Comprar
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Pagamento e envio
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Trocas e Devoluções
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
