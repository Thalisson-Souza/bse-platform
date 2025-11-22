import { CheckCircle, PlayCircle } from "lucide-react";

interface Lesson {
  title: string;
  time: string;
  done: boolean;
}

interface NextLessonsProps {
  lessons: Lesson[];
  trackTitle?: string; // opcional — para mostrar o nome da trilha
}

export default function NextLessons({
  lessons = [],
  trackTitle,
}: NextLessonsProps) {
  return (
    <div className="p-6 bg-white border rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Próximas Aulas{trackTitle ? ` - ${trackTitle}` : ""}
      </h2>

      <div className="space-y-3">
        {lessons.length === 0 ? (
          <p className="text-gray-500 text-sm">Nenhuma aula disponível.</p>
        ) : (
          lessons.map((l, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-3 border rounded-lg ${
                l.done ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                {l.done ? (
                  <CheckCircle className="text-green-600" size={18} />
                ) : (
                  <PlayCircle className="text-gray-600" size={18} />
                )}

                <div>
                  <p className="text-sm font-medium">{l.title}</p>
                  <p className="text-xs text-gray-500">{l.time}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
