"use client";
import { BookOpenText, BadgeQuestionMark } from "lucide-react";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="w-full rounded-2xl max-w-md p-8 bg-white shadow-2xl border border-blue-100">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-blue-100 p-4 shadow-inner">
            <BookOpenText className="h-10 w-10 text-blue-300" />
          </div>

          <h1 className="text-3xl font-bold text-blue-500 font-mono">
            EduPlatform
          </h1>

          <p className="text-gray-500 text-center font-sans">
            Faça login para acessar sua jornada de aprendizado
          </p>
        </div>

        <div className="my-5 border-t border-blue-200"></div>

        <LoginForm />
      </div>

      <BadgeQuestionMark className="absolute bottom-6 right-6 h-8 w-8 cursor-pointer text-blue-500 hover:text-blue-600 transition-all" />
    </div>
  );
}
