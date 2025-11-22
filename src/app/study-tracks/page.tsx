"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import TrackCard from "./components/TrackCard";
import NextLessons from "./components/NextLessons";

export default function StudyTracksPage() {
  // 👉 Dados virão do backend futuramente
  const tracks: any[] = [];
  const nextLessons: any[] = [];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-8 space-y-6">
          {/* Título */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Trilhas de Estudo
            </h1>
            <p className="text-gray-500">
              Acompanhe seu progresso e descubra novos caminhos de aprendizagem
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">
              Minhas Trilhas
            </button>
            <button className="px-4 py-2 bg-gray-100 text-sm rounded-lg">
              Recomendadas
            </button>
            <button className="px-4 py-2 bg-gray-100 text-sm rounded-lg">
              Todas as Trilhas
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Cards das Trilhas */}
            <div className="xl:col-span-2 space-y-6">
              {tracks.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  Nenhuma trilha disponível.
                </p>
              ) : (
                tracks.map((t, i) => <TrackCard key={i} data={t} />)
              )}
            </div>

            {/* Próximas aulas */}
            <NextLessons lessons={nextLessons} />
          </div>
        </main>
      </div>
    </div>
  );
}
