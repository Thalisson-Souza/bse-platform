"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();

    const res = await fetch("http://localhost:3333/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Erro ao fazer login");
      return;
    }

    localStorage.setItem("userId", data.user.id);

    // ✔ Redirecionamento REAL no Next.js
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleLogin} className="space-y-3 text-left">
      <div>
        <label className="block font-mono text-sm text-black font-extrabold">
          Email
        </label>
        <input
          type="email"
          placeholder="seu@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg p-3 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
        />
      </div>

      <div>
        <label className="block font-mono text-sm text-black font-extrabold">
          Senha
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-lg p-3 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
        />
      </div>

      <button className="w-full rounded-lg p-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-all">
        Entrar
      </button>

      {message && (
        <p className="text-sm text-center font-mono mt-2 text-red-600">
          {message}
        </p>
      )}

      <p className="text-sm text-gray-500 font-mono text-center">
        Não tem uma conta?{" "}
        <Link
          href="/signup"
          className="text-blue-500 hover:text-blue-600 font-semibold"
        >
          Inscrever-se
        </Link>
      </p>
    </form>
  );
}
