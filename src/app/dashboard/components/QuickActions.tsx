"use client";

import { LayoutDashboard, Clock, TrendingUp, Award } from "lucide-react";
import { useRouter } from "next/navigation";

export default function QuickActions() {
  const router = useRouter();

  const actions = [
    { icon: LayoutDashboard, label: "Continuar Estudo", path: "/study-tracks" },
    { icon: Clock, label: "Agendar Mentoria", path: "/mentorship" },
    { icon: TrendingUp, label: "Ver Progresso", path: "/progresso" },
    { icon: Award, label: "Certificados", path: "/certificados" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Ações Rápidas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {actions.map((action, i) => {
          const Icon = action.icon;

          return (
            <button
              key={i}
              onClick={() => router.push(action.path)}
              className="w-full flex flex-col items-center justify-center gap-2 border rounded-xl py-6 hover:bg-gray-50 transition"
            >
              <Icon className="h-6 w-6 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
