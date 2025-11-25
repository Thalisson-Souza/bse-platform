"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AdminSignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ESTADOS
  const [accessCode, setAccessCode] = useState("");
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

    // Validação básica
    if (accessCode !== "ADMIN123") {
      setMessage("Código de acesso inválido!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não correspondem!");
      return;
    }

    // Enviar para o backend
    const res = await fetch("http://localhost:3333/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        password,
        role: "ADMIN", // se quiser criar no backend no futuro
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Erro ao criar conta!");
    } else {
      setMessage("Admin registrado com sucesso!");
    }
  }

  return (
    <div className="space-y-3 text-left">
      <form onSubmit={handleSubmit}>
        <p className="text-center text-sm font-mono text-purple-600 font-bold mb-3">
          Cadastro de Admin
        </p>

        {/* CÓDIGO DE ACESSO */}
        <div>
          <label className="block font-mono text-sm text-purple-700 font-extrabold">
            Código de Acesso (Admin)
          </label>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Código fornecido pela instituição"
            className="mt-1 w-full rounded-lg p-2.5 text-black bg-purple-50 outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
          />
        </div>

        {/* NOME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-sm text-black font-extrabold">
              Primeiro Nome
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Primeiro Nome"
              className="mt-1 w-full rounded-lg p-2.5 bg-slate-100"
            />
          </div>

          <div>
            <label className="block font-mono text-sm text-black font-extrabold">
              Sobrenome
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Último Nome"
              className="mt-1 w-full rounded-lg p-2.5 bg-slate-100"
            />
          </div>
        </div>

        {/* CPF */}
        <div>
          <label className="block font-mono text-sm text-black font-extrabold">
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

        {/* EMAIL */}
        <div>
          <label className="block font-mono text-sm text-black font-extrabold">
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

        {/* TELEFONE */}
        <div>
          <label className="block font-mono text-sm text-black font-extrabold">
            Telefone
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(55) 9999-9999"
            className="mt-1 w-full rounded-lg p-2.5 bg-slate-100"
          />
        </div>

        {/* NASCIMENTO */}
        <div>
          <label className="block font-mono text-sm text-black font-extrabold">
            Data de nascimento
          </label>
          <input
            type="text"
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
            placeholder="01/10/2000"
            className="mt-1 w-full rounded-lg p-2.5 bg-slate-100"
          />
        </div>

        {/* SENHAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Senha */}
          <div>
            <label className="block font-mono text-sm text-black font-extrabold">
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

          {/* Confirmar */}
          <div>
            <label className="block font-mono text-sm text-black font-extrabold">
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

        {/* BOTÃO */}
        <button className="w-full mt-4 rounded-lg p-2 text-white font-bold bg-purple-600 hover:bg-purple-700 transition-all">
          Criar conta (Admin)
        </button>

        {/* MENSAGEM */}
        {message && (
          <p className="text-center text-sm text-red-600 mt-3 font-mono">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
