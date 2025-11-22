"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import MentorCard from "./components/MentorCard";

export default function MentorshipPage() {
  // 👉 Dados virão do backend futuramente
  const mentors: any[] = [];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-8 space-y-6">
          {/* Título */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Mentorias</h1>
            <p className="text-gray-500">
              Conecte-se com mentores especializados para acelerar seu
              aprendizado
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">
              Encontrar Mentores
            </button>
            <button className="px-4 py-2 bg-gray-100 text-sm rounded-lg">
              Agendar Sessão
            </button>
            <button className="px-4 py-2 bg-gray-100 text-sm rounded-lg">
              Minhas Sessões
            </button>
          </div>

          {/* Lista de mentores */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mentors.length === 0 ? (
              <p className="text-sm text-gray-500">
                Nenhum mentor encontrado no momento.
              </p>
            ) : (
              mentors.map((mentor, i) => <MentorCard key={i} data={mentor} />)
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
