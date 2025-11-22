import { Bell, PanelLeft, Search, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-2">
        <PanelLeft className="h-5 w-5 text-gray-700 cursor-pointer" />

        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar materiais, trilhas..."
              className="w-full rounded-lg p-2.5 pl-10 text-black bg-slate-100 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-full transition">
          <UserCircle className="h-7 w-7 text-blue-500" />
          <span className="font-medium text-gray-700">Usuário</span>
        </button>
      </div>
    </header>
  );
}
