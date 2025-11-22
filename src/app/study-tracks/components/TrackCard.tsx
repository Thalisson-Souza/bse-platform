import { Play } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function TrackCard({ data }: any) {
  return (
    <div className="p-6 bg-white border rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {data.level}
        </span>
      </div>

      <p className="text-gray-500 text-sm">{data.description}</p>

      <p className="text-sm mt-4 font-medium">Progresso: {data.current}</p>

      {/* Barra de progresso */}
      <div className="mt-2">
        <Progress value={data.progress} className="h-2" />

        <p className="text-xs text-gray-600 mt-1">{data.progress}% concluído</p>
      </div>

      {/* Infos */}
      <div className="flex gap-4 text-xs text-gray-600 mt-3">
        <p>📘 {data.hours} horas</p>
        <p>🏷 {data.category}</p>
      </div>

      {/* Botão */}
      <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg mt-4">
        <Play size={16} />
        Continuar Estudo
      </button>
    </div>
  );
}
