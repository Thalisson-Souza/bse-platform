"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import MentorCard from "./components/MentorCard";
import ScheduleForm from "./components/ScheduleForm";
import ScheduleCard from "./components/ScheduleCard";

export default function MentorshipPage() {
  const [activeTab, setActiveTab] = useState("mentores");

  const mentors = [
    {
      initials: "AB",
      name: "Prof. Augusto Cezar Backes",
      area: "Tutor do PET-CC • Algoritmos • Programação Competitiva",
      bio: "Doutor em Computação pela UFSM, tutor do PET-CC e pesquisador nas áreas de ensino de computação, algoritmos e avaliação educacional. Coordena atividades de monitoria, extensão e preparação para maratonas de programação.",
      rating: 4.9,
      sessions: 3,
      tags: ["algoritmos", "c", "programação competitiva", "ensino"],
      nextAvailable: "Terça • 14h",
      price: "Gratuito (PET-CC)",
    },
    {
      initials: "LF",
      name: "Lucas Ferreira",
      area: "Petiano • Monitor de Estruturas de Dados",
      bio: "Acadêmico da Ciência da Computação na UFSM, integrante ativo do PET-CC. Atua em monitorias, oficinas, organização de eventos e apoio em projetos web. Experiência forte em C, estruturas de dados e Python.",
      rating: 4.8,
      sessions: 5,
      tags: ["estruturas de dados", "python", "c avançado", "monitoria"],
      nextAvailable: "Quarta • 16h",
      price: "Gratuito (PET-CC)",
    },
    {
      initials: "MB",
      name: "Mariana Becker",
      area: "PET Web Team • Desenvolvimento Front-end",
      bio: "Integrante do PET-CC responsável por projetos web institucionais, incluindo sites de divulgação, landing pages e sistemas internos. Experiência em React, UI/UX e acessibilidade digital.",
      rating: 4.7,
      sessions: 10,
      tags: ["react", "javascript", "acessibilidade", "ux/ui"],
      nextAvailable: "Quinta • 17h",
      price: "Gratuito (PET-CC)",
    },
    {
      initials: "RS",
      name: "Rafael Schneider",
      area: "Petiano • Backend & APIs • Pesquisa",
      bio: "Petiano dedicado ao desenvolvimento backend com Node.js, Express e bancos de dados. Participa de projetos de pesquisa envolvendo computação distribuída e desenvolvimento de APIs educacionais.",
      rating: 4.8,
      sessions: 6,
      tags: ["node.js", "apis rest", "sql", "arquitetura"],
      nextAvailable: "Segunda • 20h",
      price: "Gratuito (PET-CC)",
    },
    {
      initials: "CM",
      name: "Caroline Martins",
      area: "PET-CC • Redes e Segurança",
      bio: "Estudante da UFSM com foco em segurança da informação, Linux e redes de computadores. Participa de minicursos e oficinas promovidas pelo PET-CC sobre análise de vulnerabilidades.",
      rating: 4.9,
      sessions: 13,
      tags: ["segurança", "linux", "redes", "pentest"],
      nextAvailable: "Sexta • 16h",
      price: "Gratuito (PET-CC)",
    },
    {
      initials: "PP",
      name: "Prof. Paulo Henrique Palma",
      area: "Docente UFSM • Sistemas Distribuídos",
      bio: "Professor e pesquisador da UFSM na área de sistemas distribuídos, redes e processamento paralelo. Orienta trabalhos de TCC, iniciação científica e projetos avançados em computação.",
      rating: 5.0,
      sessions: 3,
      tags: ["sistemas distribuídos", "java", "arquitetura", "paralelismo"],
      nextAvailable: "Quinta • 09h",
      price: "Mentoria Acadêmica (Gratuita)",
    },
  ];

  const sessions = [
    {
      mentor: "Lucas Ferreira (PET-CC)",
      topic: "Estruturas de Dados — Listas Ligadas",
      date: "2025-02-14",
      time: "16:00",
      status: "Agendado",
    },
    {
      mentor: "Prof. Augusto Cezar Backes",
      topic: "Algoritmos — Recursão",
      date: "2025-02-10",
      time: "14:00",
      status: "Concluído",
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
            <h1 className="text-3xl font-semibold text-gray-900">Mentorias</h1>
            <p className="text-gray-500">
              Conecte-se com mentores especializados para acelerar seu
              aprendizado
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("mentores")}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeTab === "mentores"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Encontrar Mentores
            </button>

            <button
              onClick={() => setActiveTab("agendar")}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeTab === "agendar"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Agendar Sessão
            </button>

            <button
              onClick={() => setActiveTab("minhas")}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeTab === "minhas"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Minhas Sessões
            </button>
          </div>

          {/* Conteúdo das Tabs */}
          {activeTab === "mentores" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mentors.map((mentor, i) => (
                <MentorCard key={i} data={mentor} />
              ))}
            </div>
          )}

          {activeTab === "agendar" && <ScheduleForm mentors={mentors} />}

          {activeTab === "minhas" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sessions.map((s, i) => (
                <ScheduleCard key={i} data={s} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
