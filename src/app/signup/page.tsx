"use client";
import { BookOpenText, BadgeQuestionMark, User, Shield } from "lucide-react";
import { useState } from "react";
import AdminSignUpForm from "./components/AdminSignUpForm";
import StudentSignUpForm from "./components/StudentSignUpForm";

export default function SignUp() {
  const [type, setType] = useState<"student" | "admin" | null>(null);

  return (
    <div className="relative flex min-h-screen items-center p-4 justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full rounded-2xl max-w-lg p-8 bg-white shadow-2xl border border-blue-100">
        {/* Header */}
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

        {/* SELEÇÃO DE TIPO */}
        {!type && (
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 text-center mb-2 font-mono font-bold">
              Escolhar como deseja se cadastrar:
            </p>

            <button
              onClick={() => setType("student")}
              className="flex items-center gap-3 w-full p-3 rounded-xl border border-blue-300 hover:bg-blue-50 transition"
            >
              <User className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-blue-600">Sou Estudante</span>
            </button>

            <button
              onClick={() => setType("admin")}
              className="flex items-center gap-3 w-full p-3 rounded-xl border border-purple-300 hover:bg-purple-50 transition"
            >
              <Shield className="w-6 h-6 text-purple-600" />
              <span className="font-bold text-purple-700">Sou Admin</span>
            </button>
          </div>
        )}

        {/* FORMULÁRIO DO ESTUDANTE */}
        {type === "student" && (
          <>
            <button
              onClick={() => setType(null)}
              className="text-sm text-blue-500 hover:text-blue-700 font-mono mb-4"
            >
              ← Voltar
            </button>

            <StudentSignUpForm />
          </>
        )}

        {/* FORMULÁRIO DO ADMIN */}
        {type === "admin" && (
          <>
            <button
              onClick={() => setType(null)}
              className="text-sm text-blue-500 hover:text-blue-700 font-mono mb-4"
            >
              ← Voltar
            </button>

            <AdminSignUpForm />
          </>
        )}
      </div>

      <BadgeQuestionMark className="absolute bottom-6 right-6 h-8 w-8 cursor-pointer text-blue-500 hover:text-blue-600 transition-all" />
    </div>
  );
}
