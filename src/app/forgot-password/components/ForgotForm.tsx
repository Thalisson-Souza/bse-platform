import Link from "next/link";

export default function ForgotForm() {
  return (
    <div className="space-y-3 text-left">
      <div>
        <label
          htmlFor="email"
          className="block font-mono text-sm text-black font-extrabold"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="seu@exemplo.com"
          className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
        />
      </div>

      <button className="w-full rounded-lg p-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-all">
        Solicitar Redefinição
      </button>

      <div className="text-center pt-2">
        <Link
          href="/login"
          className="text-blue-500 hover:text-blue-600 font-semibold"
        >
          Voltar ao Login
        </Link>
      </div>
    </div>
  );
}
