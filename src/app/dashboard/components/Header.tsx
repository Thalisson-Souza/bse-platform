import { Bell, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>

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
