import { BookOpen, Award, Clock, TrendingUp } from "lucide-react";

export default function UserInfoCard({
  initials,
  name,
  course,
  completedCourses,
  studiedHours,
  level,
}: {
  initials?: string;
  name?: string;
  course?: string;
  completedCourses?: number | string;
  studiedHours?: string;
  level?: string;
}) {
  return (
    <div className="w-full rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
          {initials || "--"}
        </div>

        <h3 className="text-lg font-semibold text-gray-800">
          {name ? `Bem-vindo(a), ${name}!` : "Bem-vindo(a)!"}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-gray-600" />
          <div>
            <p className="text-gray-400 text-xs">Curso</p>
            <p className="font-medium text-gray-700">{course || "--"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-gray-600" />
          <div>
            <p className="text-gray-400 text-xs">Cursos Concluídos</p>
            <p className="font-medium text-gray-700">
              {completedCourses || "--"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-gray-600" />
          <div>
            <p className="text-gray-400 text-xs">Horas Estudadas</p>
            <p className="font-medium text-gray-700">{studiedHours || "--"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TrendingUp className="h-5 w-5 text-gray-600" />
          <div>
            <p className="text-gray-400 text-xs">Nível</p>
            <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {level || "--"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
