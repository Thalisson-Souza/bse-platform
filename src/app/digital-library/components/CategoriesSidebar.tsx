interface Category {
  name: string;
  count: number;
}

export default function CategoriesSidebar({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Categorias</h3>

      <ul className="space-y-2">
        {categories.map((cat, i) => (
          <li
            key={i}
            className={`flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
              i === 0 ? "bg-black text-white" : "bg-transparent text-gray-700"
            }`}
          >
            <span>{cat.name}</span>
            <span>{cat.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
