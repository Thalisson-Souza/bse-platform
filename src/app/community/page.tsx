"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import CategoryList from "./components/CategoryList";
import TrendingTopics from "./components/TrendingTopics";
import ActiveUsers from "./components/ActiveUsers";
import DiscussionCard from "./components/DiscussionCard";
import SearchBar from "./components/SearchBar";

// Interfaces
interface Category {
  name: string;
  count: number;
}

interface Topic {
  title: string;
  replies: number;
}

interface User {
  name: string;
  role: string;
}

interface Discussion {
  title: string;
  author: string;
  replies: number;
  views: number;
}

export default function CommunityPage() {
  const categories: Category[] = [
    { name: "Algoritmos", count: 32 },
    { name: "Estruturas de Dados", count: 21 },
    { name: "Front-end", count: 19 },
    { name: "Back-end", count: 26 },
    { name: "Banco de Dados", count: 14 },
    { name: "Segurança", count: 7 },
    { name: "PET-CC", count: 12 },
  ];

  const trendingTopics: Topic[] = [
    { title: "Qual a diferença entre Queue e Stack?", replies: 14 },
    { title: "Por onde começar no React em 2025?", replies: 22 },
    {
      title: "Arquitetura limpa no Node.js: faz diferença mesmo?",
      replies: 13,
    },
    {
      title: "Como melhorar performance em consultas SQL grandes?",
      replies: 7,
    },
    { title: "Estudar algoritmos todo dia vale mesmo a pena?", replies: 19 },
  ];

  const activeUsers: User[] = [
    { name: "Lucas Ferreira", role: "Petiano - SD" },
    { name: "Mariana Becker", role: "PET Web" },
    { name: "Caroline Martins", role: "PET Segurança" },
    { name: "Rafael Schneider", role: "PET Backend" },
  ];

  const discussions: any[] = [
    {
      initials: "LF",
      author: "Lucas Ferreira",
      time: "Postado há 2h",
      title: "Como funciona exatamente uma Linked List?",
      message:
        "Estou revisando estruturas de dados e travei um pouco na lógica de ponteiros para listas encadeadas. Alguém teria um exemplo visual ou dica de implementação em C?",
      tags: ["estruturas", "ponteiros", "C"],
      likes: 12,
      replies: 8,
    },
    {
      initials: "MB",
      author: "Mariana Becker",
      time: "Ontem às 19h",
      title: "Qual a melhor forma de organizar componentes no React?",
      message:
        "Estou criando um projeto grande e tenho dúvidas sobre a melhor arquitetura para organizar componentes e hooks. Alguma recomendação de padrões?",
      tags: ["react", "arquitetura", "hooks"],
      likes: 25,
      replies: 14,
    },
    {
      initials: "RS",
      author: "Rafael Schneider",
      time: "Há 3 dias",
      title: "Vale a pena usar Prisma ao invés de Sequelize?",
      message:
        "Estou migrando um backend Node e estou testando Prisma. Parece muito bom, mas queria ouvir experiências de quem usa em produção.",
      tags: ["backend", "prisma", "nodejs"],
      likes: 19,
      replies: 11,
    },
    {
      initials: "CM",
      author: "Caroline Martins",
      time: "Há 5 dias",
      title: "Como começar em Segurança da Informação?",
      message:
        "Que materiais vocês recomendam para quem quer começar a estudar pentest de forma séria?",
      tags: ["segurança", "pentest", "linux"],
      likes: 34,
      replies: 22,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-64 h-screen overflow-y-scroll p-8">
        <Header />

        <main className="p-8 space-y-8">
          {/* Título da página */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Comunidade</h1>
            <p className="text-gray-500">
              Tire dúvidas, compartilhe conhecimento e conecte-se com outros
              estudantes
            </p>
          </div>

          {/* 🔎 SearchBar + Nova Discussão */}
          <div className="flex justify-between items-center w-full">
            <SearchBar className="max-w-3xl w-full" />

            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg ml-4">
              + Nova Discussão
            </button>
          </div>

          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar esquerda */}
            <div className="space-y-6 md:col-span-1">
              <CategoryList categories={categories} />
              <TrendingTopics topics={trendingTopics} />
              <ActiveUsers users={activeUsers} />
            </div>

            {/* Lista de discussões */}
            <div className="md:col-span-3 space-y-6">
              {discussions.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  Nenhuma discussão encontrada.
                </p>
              ) : (
                discussions.map((d, i) => <DiscussionCard key={i} data={d} />)
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
