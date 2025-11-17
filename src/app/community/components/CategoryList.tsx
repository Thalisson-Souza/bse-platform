export default function CategoryList({ categories }: any) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h3 className="text-sm font-semibold mb-4">Categorias</h3>

      <div className="space-y-2">
        {categories.length === 0 && (
          <p className="text-xs text-gray-400">Nenhuma categoria carregada</p>
        )}

        {categories.map((cat: any, i: number) => (
          <button
            key={i}
            className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
          >
            <span>{cat.name}</span>
            <span className="text-xs bg-gray-200 px-2 rounded">
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
