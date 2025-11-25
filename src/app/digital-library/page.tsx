"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import CategoriesSidebar from "./components/CategoriesSidebar";
import MaterialCard from "./components/MaterialCard";
import SearchBar from "./components/SearchBar";

import { Funnel } from "lucide-react";

export default function DigitalLibraryPage() {
  // 👉 Dados virão do backend futuramente
  const categories = [
    { name: "Algoritmos", count: 6 },
    { name: "Estruturas de Dados", count: 5 },
    { name: "JavaScript", count: 8 },
    { name: "Banco de Dados", count: 4 },
    { name: "Node.js", count: 3 },
    { name: "Engenharia de Software", count: 5 },
    { name: "Arquitetura de Software", count: 2 },
    { name: "Python", count: 4 },
    { name: "Machine Learning", count: 3 },
  ];

  const materials = [
    {
      title: "Guia Completo de Algoritmos e Complexidade",
      author: "Fabio Gagliardi Cozman",
      description:
        "Material detalhado cobrindo análise de algoritmos, notação Big-O e técnicas fundamentais.",
      rating: 4.8,
      downloads: 325,
      tags: ["algoritmos", "big-o", "complexidade"],
      type: "pdf",
      fileUrl: "/library/algoritmosEcomlexidade.pdf",
    },
    {
      title: "Listas, Pilhas e Filas — Estruturas Essenciais",
      author: "Mariana Freitas",
      description:
        "Apostila visual explicando estruturas de dados clássicas com exemplos ilustrados.",
      rating: 4.6,
      downloads: 210,
      tags: ["estruturas", "list", "queue", "stack"],
      type: "pdf",
    },
    {
      title: "Curso Prático de JavaScript ES6+",
      author: "Lucas Andrade",
      description:
        "Vídeo-aula cobrindo recursos modernos do JavaScript com aplicações reais.",
      rating: 4.9,
      downloads: 540,
      tags: ["javascript", "es6", "funções"],
      type: "video",
    },
    {
      title: "Introdução ao SQL — Consultas e Modelagem",
      author: "Ana Ribeiro",
      description:
        "PDF completo sobre modelagem relacional, consultas SQL e boas práticas.",
      rating: 4.7,
      downloads: 420,
      tags: ["sql", "banco de dados", "relacional"],
      type: "pdf",
    },
    {
      title: "API REST com Node.js — Guia Definitivo",
      author: "Pedro Martins",
      description:
        "Aprenda na prática como construir APIs profissionais com Express e arquitetura limpa.",
      rating: 4.9,
      downloads: 310,
      tags: ["node", "api", "rest"],
      type: "pdf",
    },
    {
      title: "Fundamentos de Machine Learning",
      author: "Camila Rocha",
      description:
        "Material introdutório para estudantes iniciando no mundo de ML.",
      rating: 4.5,
      downloads: 160,
      tags: ["machine learning", "ml", "inteligência artificial"],
      type: "video",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* sidebar */}
      <Sidebar />

      {/* conteúdo principal */}
      <div className="flex flex-col flex-1 ml-64 h-screen overflow-y-scroll p-8">
        <Header />

        <main className="p-8 space-y-8">
          {/* título */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Biblioteca Digital
            </h1>
            <p className="text-gray-500">
              Acesse materiais de estudo organizados por categoria
            </p>
          </div>

          {/* barra de busca */}
          <div className="flex justify-between items-center">
            <SearchBar />
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
              <Funnel className="h-4 w-4" />
              Filtros Avançados
            </button>
          </div>

          {/* principal */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* sidebar de categorias */}
            <div className="md:col-span-1">
              <CategoriesSidebar categories={categories} />
            </div>

            {/* cards de materiais */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {materials.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  Nenhum material encontrado.
                </p>
              ) : (
                materials.map((m, i) => <MaterialCard key={i} material={m} />)
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
