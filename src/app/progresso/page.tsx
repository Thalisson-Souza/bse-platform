export default function ProgressoPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Seu Progresso</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Progresso Geral */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Progresso Geral
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600">Cursos Concluídos: 0 / 10</p>
            <p className="text-gray-600">Horas Estudadas: 0h</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: "20%" }}
              />
            </div>
          </div>
        </div>

        {/* Progresso por Trilha */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Progresso por Trilha
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-gray-600">Algoritmos</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: "35%" }}
                />
              </div>
            </div>

            <div>
              <p className="text-gray-600">Estruturas de Dados</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
            </div>

            <div>
              <p className="text-gray-600">JavaScript Avançado</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: "10%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
