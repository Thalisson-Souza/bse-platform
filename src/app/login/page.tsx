import { BookOpenText, BadgeQuestionMark } from "lucide-react";

export default function Login() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full rounded-2xl max-w-md p-8 bg-white p-8 shadow-2xl border border-blue-100">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-blue-100 p-4 shadow-inner">
            <BookOpenText className="h-10 w-10 text-blue-300" />
          </div>

          <h1 className="text-3xl font-bold text-blue-500 font-mono">
            EduPlatform
          </h1>

          <p className="text-gray-500 text-center font-">
            Faça login para acessar sua jornada de aprendizado
          </p>
        </div>

        <div className="my-6 border-t border-blue-200"></div>

        <div className="space-y-4 text-left">
          <div>
            <label
              htmlFor="cpf"
              className="block font-mono text-sm text-black font-extrabold "
            >
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              placeholder="000.000.000-00"
              className="mt-1 w-full rounded-lg p-3 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
            />
          </div>

          <div className="mt-4 text-left">
            <label
              htmlFor="email"
              className="block font-mono text-sm text-black font-extrabold "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="seu@exemplo.com"
              className="mt-1 w-full rounded-lg p-3 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
            />
          </div>

          <div className="mt-4 text-left">
            <label
              htmlFor="password"
              className="block font-mono text-sm text-black font-extrabold "
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="mt-1 w-full rounded-lg p-3 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
            />
          </div>
        </div>

        <div className="mt-5">
          <button className="w-full rounded-lg p-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-all">
            Entrar
          </button>
        </div>
      </div>

      <BadgeQuestionMark className="absolute bottom-6 right-6 h-8 w-8 cursor-pointer text-blue-500 hover:text-blue-600 transition-all" />
    </div>
  );
}
