import Image from "next/image";
import nwlLogo from '../assets/nlw-spacetime-logo.svg';

export const Hero = () => {
  return (
    <div className="space-y-5">
      <Image src={nwlLogo} alt="NLW Spaceship logo" />

      <div className="max-w-[420px] space-y-4">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">Sua cápsula do tempo</h1>
        <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
      </div>

      <a href="#" className="inline-block rounded-full px-5 py-3 bg-green-500 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600">CADASTRAR LEMBRANÇA</a>
    </div>
  );
}