import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-xl relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Buscar por título, autor ou tags..."
        className="w-full border bg-gray-100 rounded-lg py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-black transition"
      />
    </div>
  );
}
