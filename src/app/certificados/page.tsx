export default function CertificadosPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Seus Certificados
      </h1>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <p className="text-gray-600">
          Você ainda não possui certificados. Continue estudando para liberar
          novas conquistas!
        </p>

        <div className="mt-4 border-t pt-4">
          <p className="text-sm text-gray-500">
            Certificados serão exibidos aqui assim que você concluir cursos.
          </p>
        </div>
      </div>
    </div>
  );
}
