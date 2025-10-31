"use client";
import { LockKeyhole, BadgeQuestionMark, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full rounded-2xl max-w-md p-8 bg-white p-8 shadow-2xl border border-blue-100">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-blue-100 p-4 shadow-inner">
            <LockKeyhole className="h-10 w-10 text-blue-300" />
          </div>

          <h1 className="text-3xl font-bold text-blue-500 font-mono">
            EduPlatform
          </h1>

          <p className="text-gray-500 text-center font-sans">
            Defina uma nova senha para sua conta.
          </p>
        </div>

        <div className="my-5 border-t border-blue-200"></div>

        <div className="space-y-3 text-left">
          <div>
            <label
              htmlFor="password"
              className="block font-mono text-sm text-black font-extrabold "
            >
              Nova senha*
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
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

          <div>
            <label
              htmlFor="confirmPassword"
              className="block font-mono text-sm text-black font-extrabold "
            >
              Confirmar nova senha*
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
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

          <button className="w-full rounded-lg p-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-all">
            Redefinir senha
          </button>

          <div className="text-center pt-2">
            <Link
              href={"/login"}
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Cancelar Redefinição
            </Link>
          </div>
        </div>
      </div>

      <BadgeQuestionMark className="absolute bottom-6 right-6 h-8 w-8 cursor-pointer text-blue-500 hover:text-blue-600 transition-all" />
    </div>
  );
}
