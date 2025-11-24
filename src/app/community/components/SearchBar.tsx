"use client";

import React from "react";

type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Buscar discussões, usuários ou tópicos...",
  className = "",
}: Props) {
  return (
    <div className={`relative w-full max-w-2xl ${className}`}>
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border bg-gray-100 rounded-lg py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-black transition text-sm"
        aria-label="Buscar discussões"
      />
    </div>
  );
}
