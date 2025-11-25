import { TrendingUp } from "lucide-react";

export default function TrendingTopics({ topics }: any) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
        <TrendingUp className="h-4 w-4" /> Tópicos em Alta
      </h3>

      {topics.length === 0 && (
        <p className="text-xs text-gray-400">Nenhum tópico carregado</p>
      )}

      <div className="space-y-2">
        {topics.map((t: any, i: number) => (
          <div
            key={i}
            className="flex justify-between items-center text-sm bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <span className="font-medium text-gray-700">{t.title}</span>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">
              {t.replies}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
