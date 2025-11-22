import { Bell } from "lucide-react";

interface Opportunity {
  title: string;
  type: string;
  deadline: number;
}

interface OpportunitiesProps {
  items: Opportunity[];
}

export default function Opportunities({ items = [] }: OpportunitiesProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {/* Título */}
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Bell className="h-5 w-5 text-gray-700" />
        <span className="text-gray-700">Oportunidades</span>
      </h2>

      {/* Lista */}
      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-sm text-gray-500">
            Nenhuma oportunidade disponível.
          </p>
        ) : (
          items.map((op, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-medium text-gray-900">{op.title}</p>
                <p className="text-xs text-gray-500">
                  Prazo: {op.deadline} dias
                </p>
              </div>

              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full capitalize">
                {op.type}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Botão */}
      <button className="w-full mt-6 text-sm font-medium text-gray-700 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
        Ver Mais Oportunidades
      </button>
    </div>
  );
}
