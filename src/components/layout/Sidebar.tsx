"use client";

import {
  BookOpenText,
  Footprints,
  House,
  LibraryBig,
  LogOut,
  MessageCircle,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`flex flex-col bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      {/* Logo e botão de toggle */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <BookOpenText className="h-6 w-6 text-blue-500" />
            <h1 className="font-mono font-bold text-lg text-blue-500">
              EduPlatform
            </h1>
          </div>
        )}
        
        {isCollapsed && (
          <div className="flex justify-center w-full">
            <BookOpenText className="h-6 w-6 text-blue-500" />
          </div>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-600" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <House className="h-5 w-5" />
          {!isCollapsed && <span>Dashboard</span>}
        </Link>

        <Link
          href="/digital-library"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <LibraryBig className="h-5 w-5" />
          {!isCollapsed && <span>Biblioteca Digital</span>}
        </Link>

        <Link
          href="/study-tracks"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <Footprints className="h-5 w-5" />
          {!isCollapsed && <span>Trilhas de Estudo</span>}
        </Link>

        <Link
          href="/mentorship"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <Users className="h-5 w-5" />
          {!isCollapsed && <span>Mentorias</span>}
        </Link>

        <Link
          href="/community"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <MessageCircle className="h-5 w-5" />
          {!isCollapsed && <span>Comunidade</span>}
        </Link>
      </nav>

      {/* Rodapé */}
      <div className="p-4 border-t border-gray-100">
        <button className={`flex items-center gap-2 w-full px-3 py-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition ${
          isCollapsed ? 'justify-center' : ''
        }`}>
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}