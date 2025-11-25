"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import TrackCard from "./components/TrackCard";
import NextLessons from "./components/NextLessons";

export default function StudyTracksPage() {
  // 👉 Dados virão do backend futuramente
  const tracks = [
    {
      title: "Algoritmos e Lógica de Programação",
      description:
        "Aprenda fundamentos de análise, criação e otimização de algoritmos.",
      progress: 60,
      lessons: 18,
      completed: 11,
      level: "Intermediário",
      tags: ["big-o", "recursão", "estratégias"],
    },
    {
      title: "Estruturas de Dados",
      description: "Domine listas, filas, pilhas, árvores, grafos e hashing.",
      progress: 40,
      lessons: 22,
      completed: 9,
      level: "Intermediário",
      tags: ["listas", "árvores", "grafos"],
    },
    {
      title: "JavaScript Moderno (ES6+)",
      description:
        "Pratique conceitos avançados do JavaScript moderno com projetos reais.",
      progress: 75,
      lessons: 30,
      completed: 22,
      level: "Avançado",
      tags: ["async", "promises", "map/filter", "modulos"],
    },
    {
      title: "Banco de Dados SQL e NoSQL",
      description: "Aprenda consultas, modelagem, normalização e NoSQL.",
      progress: 55,
      lessons: 16,
      completed: 9,
      level: "Intermediário",
      tags: ["sql", "joins", "indexação", "mongodb"],
    },
    {
      title: "Node.js — APIs e Backend Moderno",
      description:
        "Crie APIs profissionais com Express, autenticação e arquitetura limpa.",
      progress: 20,
      lessons: 25,
      completed: 5,
      level: "Intermediário",
      tags: ["express", "jwt", "arquitetura"],
    },
  ];

  const nextLessons = [
    {
      title: "Algoritmos — Busca Binária",
      track: "Algoritmos e Lógica",
      duration: "25 min",
    },
    {
      title: "Estruturas de Dados — Árvores AVL",
      track: "Estruturas de Dados",
      duration: "40 min",
    },
    {
      title: "JavaScript — Async/Await na prática",
      track: "JavaScript Moderno",
      duration: "30 min",
    },
    {
      title: "SQL Avançado — Indexação",
      track: "Banco de Dados SQL",
      duration: "20 min",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-64 h-screen overflow-y-scroll p-8">
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
