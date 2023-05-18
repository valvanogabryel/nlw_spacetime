import { User } from "lucide-react";

const SignIn = () => {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center gap-3 text-left group transition-colors hover:text-gray-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 duration-700 ease-[cubic-bezier(.47,1.64,.41,.8)] group-hover:rotate-[360deg]">
        <User className="h-5 w-5 text-gray-500 duration-300  scale-100 group-hover:scale-110 group-hover:text-gray-200 group-hover:animate-pulse" />
      </div>

      <p className="text-sm leading-snug max-w-[140px]">
        <span className="underline">Crie sua conta</span> {''}
        e salve suas memórias!
      </p>
    </a>
  );
}

export default SignIn;