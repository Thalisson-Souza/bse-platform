"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "./components/MainContent";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // 1️⃣ Só acessa localStorage no client
  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    setUserId(storedId);
  }, []);

  // 2️⃣ Carrega dashboard após obter userId
  useEffect(() => {
    if (!userId) return;

    async function loadDashboard() {
      const res = await fetch(`http://localhost:3333/dashboard/${userId}`);
      const json = await res.json();
      setData(json);
    }

    loadDashboard();
  }, [userId]);

  if (!data) {
    return <div className="p-6">Carregando...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64 h-screen overflow-y-scroll p-8">
        <Header />
        <MainContent data={data} />
      </div>
    </div>
  );
}
