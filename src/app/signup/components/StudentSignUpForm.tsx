"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function StudentSignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // estados para envio ao backend
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("As senhas não correspondem!");
      return;
    }

    const res = await fetch("http://localhost:3333/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error);
    } else {
      setMessage("Conta criada com sucesso!");
    }
  }

  return (
    <div className="space-y-3 text-left">
      <form onSubmit={handleSubmit}>
        <p className="text-center text-sm font-mono text-blue-500 font-bold mb-3">
          Cadastro de Estudante
        </p>

        {/* PRIMEIRO NOME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-left">
            <label className="block font-mono text-sm font-extrabold text-black">
              Primeiro Nome
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Primeiro Nome"
              className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100"
            />
          </div>

          <div className="text-left">
            <label className="block font-mono text-sm font-extrabold text-black">
              Sobrenome
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Último nome"
              className="mt-1 w-full rounded-lg p-2.5 text-black bg-slate-100"
            />
          </div>
        </div>

        {/* CPF */}
        <div>
          <label className="block font-mono text-sm font-extrabold text-black">
            CPF
          </label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="000.000.000-00"
            className="mt-1 w-full rounded-lg p-2.5 bg-slate-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-mono text-sm font-extrabold text-black">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@exemplo.com"
            className="mt-1 w-full rounded-lg p-2.5 bg-slate-100"
          />
        </div>

        {/* Senha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-sm font-extrabold text-black">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="mt-1 w-full rounded-lg p-2.5 pr-10 bg-slate-100"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {showPassword ? (
                  <Eye onClick={() => setShowPassword(false)} />
                ) : (
                  <EyeOff onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div>
          </div>

          {/* Confirmação */}
          <div>
            <label className="block font-mono text-sm font-extrabold text-black">
              Confirmar Senha
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme sua senha"
                className="mt-1 w-full rounded-lg p-2.5 pr-10 bg-slate-100"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {showConfirmPassword ? (
                  <Eye onClick={() => setShowConfirmPassword(false)} />
                ) : (
                  <EyeOff onClick={() => setShowConfirmPassword(true)} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Botão */}
        <button className="w-full mt-4 rounded-lg p-2 text-white font-bold bg-blue-500 hover:bg-blue-600 transition-all">
          Criar conta
        </button>

        {message && (
          <p className="text-center text-sm text-red-600 mt-3 font-mono">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
