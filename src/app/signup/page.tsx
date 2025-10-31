"use client";
import { BookOpenText, BadgeQuestionMark, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full rounded-2xl max-w-lg p-8 bg-white shadow-2xl border border-blue-100">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-blue-100 p-4 shadow-inner">
            <BookOpenText className="h-10 w-10 text-blue-300" />
          </div>

          <h1 className="text-3xl font-bold text-blue-500 font-mono">
            EduPlatform
          </h1>

          <p className="text-gray-500 text-center font-sans">
            Crie sua conta para iniciar sua jornada de aprendizado
          </p>
        </div>

        <div className="my-5 border-t border-blue-200"></div>

        <div className="space-y-3 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-left">
              <label
                htmlFor="firstName"
                className="block font-mono text-sm text-black font-extrabold "
              >
                Primeiro Nome
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Primeiro Nome"
                className="mt-1 w-full rounded-lg p-2.5 
                text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="lastName"
                className="block font-mono text-sm text-black font-extrabold "
              >
                Sobrenome
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Último nome"
                className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
              />
            </div>
          </div>

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
              className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
            />
          </div>

          <div>
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
              className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-mono text-sm text-black font-extrabold "
            >
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="(55) 9999-9999"
              className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
            />
          </div>

          <div>
            <label
              htmlFor="birthDay"
              className="block font-mono text-sm text-black font-extrabold "
            >
              Data de nascimento
            </label>
            <input
              type="text"
              id="birthDay"
              placeholder="01/10/2000"
              className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-left">
              <label
                htmlFor="password"
                className="block font-mono text-sm text-black font-extrabold "
              >
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Digite sua senha"
                  className="mt-1 w-full rounded-lg p-2.5 pr-10 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
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
                className="block font-mono text-sm text-black font-extrabold "
              >
                Confirmar Senha
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  className="mt-1 w-full rounded-lg p-2.5 pr-10 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
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
            <button className="w-full rounded-lg p-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-all">
              Criar conta
            </button>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-mono text-center">
              Já tem uma conta?{" "}
              <Link
                href={"/login"}
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </div>

      <BadgeQuestionMark className="absolute bottom-6 right-6 h-8 w-8 cursor-pointer text-blue-500 hover:text-blue-600 transition-all" />
    </div>
  );
}
