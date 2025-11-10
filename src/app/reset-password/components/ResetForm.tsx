"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResetForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-3 text-left">
      <div>
        <label
          htmlFor="password"
          className="block font-mono text-sm text-black font-extrabold"
        >
          Nova senha*
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
          />
          <div
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye className="h-5 w-5 text-gray-400" />
            ) : (
              <EyeOff className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block font-mono text-sm text-black font-extrabold"
        >
          Confirmar nova senha*
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
          />
          <div
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <Eye className="h-5 w-5 text-gray-400" />
            ) : (
              <EyeOff className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      <button className="w-full rounded-lg p-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-all">
        Redefinir senha
      </button>

      <div className="text-center pt-2">
        <Link
          href="/login"
          className="text-blue-500 hover:text-blue-600 font-semibold"
        >
          Cancelar Redefinição
        </Link>
      </div>
    </div>
  );
}
