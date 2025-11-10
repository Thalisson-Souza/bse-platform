export default function MainContent() {
  return (
    <main className="flex-1 p-6">
      <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Bem-vindo ao Dashboard
        </h3>
        <p className="text-gray-500 text-sm">
          Aqui você poderá visualizar suas informações, gerenciar dados e
          acompanhar o progresso dos usuários.
        </p>
      </div>
    </main>
  );
}
