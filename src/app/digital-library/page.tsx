"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import CategoriesSidebar from "./components/CategoriesSidebar";
import MaterialCard from "./components/MaterialCard";
import SearchBar from "./components/SearchBar";

import { Funnel } from "lucide-react";

export default function DigitalLibraryPage() {
  // 👉 Dados virão do backend futuramente
  const categories: any[] = [];
  const materials: any[] = [];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* sidebar */}
      <Sidebar />

      {/* conteúdo principal */}
      <div className="flex flex-col flex-1">
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
