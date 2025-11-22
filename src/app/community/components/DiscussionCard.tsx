import { MessageSquare, Heart } from "lucide-react";

export default function DiscussionCard({ data }: any) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      {/* Info do autor */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold">
          {data.initials || "--"}
        </div>

        <div>
          <p className="font-medium">{data.author || "Autor"}</p>
          <p className="text-xs text-gray-400">{data.time || ""}</p>
        </div>
      </div>

      {/* Título */}
      <h2 className="mt-3 text-lg font-semibold">{data.title || ""}</h2>

      {/* Corpo */}
      <p className="text-gray-600 text-sm mt-1">{data.message || ""}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {(data.tags || []).map((tag: string, i: number) => (
          <span
            key={i}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Estatísticas */}
      <div className="flex items-center gap-6 text-sm text-gray-600 mt-4">
        <span className="flex items-center gap-1">
          <Heart className="h-4 w-4" /> {data.likes || 0}
        </span>

        <span className="flex items-center gap-1">
          <MessageSquare className="h-4 w-4" /> {data.replies || 0} respostas
        </span>

        <button className="ml-auto bg-black text-white px-4 py-2 rounded-lg text-sm">
          Responder
        </button>
      </div>
    </div>
  );
}
