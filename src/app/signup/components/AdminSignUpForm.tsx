"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdminSignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-3 text-left">
      <p className="text-center text-sm font-mono text-purple-600 font-bold mb-3">
        Cadastro de Admin
      </p>

      {/* algo que referencia que é admin, este é provisório até ver oque colocar */}
      <div>
        <label
          htmlFor="accessCode"
          className="block font-mono text-sm text-purple-700 font-extrabold"
        >
          Código de Acesso (Admin)
        </label>
        <input
          type="text"
          id="accessCode"
          placeholder="Código fornecido pela instituição"
          className="mt-1 w-full rounded-lg p-2.5 text-black bg-purple-50 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
        />
      </div>

      {/* forms igual ao estudante aqui abaixo */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="text-left">
          <label
            htmlFor="firstName"
            className="block font-mono text-sm text-black font-extrabold"
          >
            Primeiro Nome
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Primeiro Nome"
            className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
          />
        </div>

        <div className="text-left">
          <label
            htmlFor="lastName"
            className="block font-mono text-sm text-black font-extrabold"
          >
            Sobrenome
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Último nome"
            className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
          />
        </div>
      </div>

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
          className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
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
          className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block font-mono text-sm text-black font-extrabold"
        >
          Telefone
        </label>
        <input
          type="text"
          id="phone"
          placeholder="(55) 9999-9999"
          className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
        />
      </div>

      <div>
        <label
          htmlFor="birthDay"
          className="block font-mono text-sm text-black font-extrabold"
        >
          Data de nascimento
        </label>
        <input
          type="text"
          id="birthDay"
          placeholder="01/10/2000"
          className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="text-left">
          <label
            htmlFor="password"
            className="block font-mono text-sm text-black font-extrabold"
          >
            Senha
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Digite sua senha"
              className="mt-1 w-full rounded-lg p-2.5 pr-10 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
            />
            <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
              {showPassword ? (
                <Eye
                  className="h-5 w-5 text-gray-400"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeOff
                  className="h-5 w-5 text-gray-400"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
        </div>

        <div className="text-left">
          <label
            htmlFor="confirmPassword"
            className="block font-mono text-sm text-black font-extrabold"
          >
            Confirmar Senha
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirme sua senha"
              className="mt-1 w-full rounded-lg p-2.5 pr-10 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
            />
            <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
              {showConfirmPassword ? (
                <Eye
                  className="h-5 w-5 text-gray-400"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <EyeOff
                  className="h-5 w-5 text-gray-400"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button className="w-full rounded-lg p-2 text-white font-bold bg-purple-600 hover:bg-purple-700 transition-all">
          Criar conta (Admin)
        </button>
      </div>

      <p className="text-sm text-gray-500 font-mono text-center">
        Já tem uma conta?{" "}
        <Link
          href="/login"
          className="text-purple-600 hover:text-purple-700 font-semibold"
        >
          Entrar
        </Link>
      </p>
    </div>
  );
}
