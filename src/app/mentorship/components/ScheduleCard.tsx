import { Calendar, Clock, User } from "lucide-react";

export default function ScheduleCard({ data }: any) {
  return (
    <div className="bg-white rounded-xl p-6 border shadow-sm space-y-3">
      <div className="flex items-center gap-3">
        <User className="h-6 w-6 text-gray-600" />
        <div>
          <h2 className="font-semibold text-lg">{data.mentor}</h2>
          <p className="text-sm text-gray-500">{data.topic}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-700">
        <Calendar className="h-4 w-4" />
        {new Date(data.date).toLocaleDateString("pt-BR")}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-700">
        <Clock className="h-4 w-4" />
        {data.time}
      </div>

      <div
        className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold ${
          data.status === "Concluído"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {data.status}
      </div>
    </div>
  );
}
