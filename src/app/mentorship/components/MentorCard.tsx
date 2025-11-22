import { Calendar, MessageCircle, Star, Users } from "lucide-react";

export default function MentorCard({ data }: any) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      {/* header */}
      <div className="flex gap-3 items-center">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
          {data?.initials || "--"}
        </div>

        <div>
          <h2 className="font-semibold text-lg">{data?.name || "Mentor"}</h2>
          <p className="text-sm text-gray-500">
            {data?.area || "Área não informada"}
          </p>
        </div>
      </div>

      {/* bio */}
      <p className="mt-3 text-sm text-gray-600">
        {data?.bio || "Biografia não disponível."}
      </p>

      {/* rating */}
      <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
        <Star className="h-4 w-4 text-yellow-500" />
        {data?.rating ?? "--"}
        <Users className="h-4 w-4 ml-2 text-gray-600" />
        {data?.sessions ?? "--"} sessões
      </div>

      {/* tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {(data?.tags ?? []).map((tag: string, idx: number) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* info extra */}
      <div className="mt-4 text-xs text-gray-600 space-y-1">
        <p>
          <strong>Próximo disponível:</strong> {data?.nextAvailable || "--"}
        </p>
        <p>
          <strong>Preço:</strong> {data?.price || "--"}
        </p>
      </div>

      {/* botoes */}
      <div className="flex items-center gap-4 mt-4">
        <button className="flex-1 bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <Calendar className="h-4 w-4" />
          Agendar
        </button>

        <button className="flex items-center gap-2 border py-2 px-4 rounded-lg">
          <MessageCircle className="h-4 w-4" />
          Mensagem
        </button>
      </div>
    </div>
  );
}
