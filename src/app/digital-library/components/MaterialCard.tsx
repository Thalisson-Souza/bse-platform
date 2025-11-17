import { FileText, Video, Star, Download, ExternalLink } from "lucide-react";

export default function MaterialCard({ material }: any) {
  const Icon = material.type === "video" ? Video : FileText;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-start gap-3">
        <Icon className="h-6 w-6 text-red-400" />

        <div>
          <h4 className="font-semibold text-gray-900">{material.title}</h4>
          <p className="text-sm text-gray-500">{material.author}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600">{material.description}</p>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 text-yellow-400" />
        <span className="font-medium">{material.rating}</span>
        <span className="text-gray-400 text-sm">• {material.downloads}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {material.tags.map((t: string, i: number) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-4">
        <button className="flex items-center justify-center gap-2 flex-1 bg-black text-white py-2 rounded-lg">
          <Download className="h-4 w-4" />
          Baixar
        </button>

        <button className="flex items-center gap-2 border py-2 px-4 rounded-lg">
          <ExternalLink className="h-4 w-4" />
          Visualizar
        </button>
      </div>
    </div>
  );
}
