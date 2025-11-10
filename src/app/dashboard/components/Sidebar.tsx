import { BookOpenText, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 bg-white shadow-lg border-r border-gray-200">
      {/* logo */}
      <div className="flex items-center gap-2 p-6 border-b border-gray-100">
        <BookOpenText className="h-6 w-6 text-blue-500" />
        <h1 className="font-mono font-bold text-lg text-blue-500">
          EduPlatform
        </h1>
      </div>

      {/* menu */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition"
        >
          <LayoutDashboard className="h-5 w-5" />
          Início
        </Link>
      </nav>

      {/* rodapé */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition">
          <LogOut className="h-5 w-5" />
          Sair
        </button>
      </div>
    </aside>
  );
}
