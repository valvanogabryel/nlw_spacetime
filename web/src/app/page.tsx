import { User } from "lucide-react";
import Image from 'next/image';
import nwlLogo from '../assets/nlw-spacetime-logo.svg';

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />

        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        <a href="#" className="flex items-center gap-3 text-left group transition-colors hover:text-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 duration-700 ease-[cubic-bezier(.47,1.64,.41,.8)] group-hover:rotate-[360deg]">
            <User className="h-5 w-5 text-gray-500 duration-300  scale-100 group-hover:scale-110 group-hover:text-gray-200 group-hover:animate-pulse" />
          </div>

          <p className="text-sm leading-snug max-w-[140px]">
            <span className="underline">Crie sua conta</span> {''}
            e salve suas memórias!
          </p>
        </a>

        <div className="space-y-5">
          <Image src={nwlLogo} alt="NLW Spaceship logo" />

          <div className="max-w-[420px] space-y-4">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">Sua cápsula do tempo</h1>
            <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <a href="#" className="inline-block rounded-full px-5 py-3 bg-green-500 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600">CADASTRAR LEMBRANÇA</a>
        </div>

        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da {''}
          <a
            className="underline hover:text-gray-100"
            href="https://www.rocketseat.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Rocketseat
          </a>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">Você ainda não registrou nenhuma lembrança, comece a {''}
            <a
              href="#"
              className="underline hover:text-gray-50"
            >criar agora!</a>
          </p>
        </div>
      </div>
    </main>
  )
}
