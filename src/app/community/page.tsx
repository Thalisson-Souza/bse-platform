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
  const categories: Category[] = [];
  const trendingTopics: Topic[] = [];
  const activeUsers: User[] = [];
  const discussions: Discussion[] = [];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex flex-col flex-1">
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
