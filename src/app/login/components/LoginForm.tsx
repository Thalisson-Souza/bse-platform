import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="space-y-3 text-left">
      <div>
        <label
          htmlFor="cpf"
          className="block font-mono text-sm text-black font-extrabold"
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

      <div>
        <label
          htmlFor="email"
          className="block font-mono text-sm text-black font-extrabold"
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

      <div>
        <label
          htmlFor="password"
          className="block font-mono text-sm text-black font-extrabold"
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

      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition"
        >
          Esqueceu sua senha?
        </Link>
      </div>

      <button className="w-full rounded-lg p-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-all">
        Entrar
      </button>

      <p className="text-sm text-gray-500 font-mono text-center">
        Não tem uma conta?{" "}
        <Link
          href="/signup"
          className="text-blue-500 hover:text-blue-600 font-semibold"
        >
          Inscrever-se
        </Link>
      </p>
    </div>
  );
}
