import { getUser } from "@/lib/auth";
import Image from "next/image";
import { LogOut } from 'lucide-react';
import Link from "next/link";

export const Profile = () => {
  const {
    name,
    avatarUrl
  } = getUser();

  return (
    <div
      className="flex items-center gap-3 text-left group transition-colors"
    >
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="text-sm leading-snug max-w-[140px] select-none">
        {name}
        <Link
          href="/api/auth/logout"
          className="flex items-center gap-1 text-red-400 hover:text-red-300 group"
        >
          Quero sair
          <LogOut
            className="duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)] group-hover:translate-x-1"
            width={15}
            height={15}
          />
        </Link>
      </p>
    </div>
  );
}