"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";

export function HeroSearch() {
  const router = useRouter();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(q ? `/fractions?q=${encodeURIComponent(q)}` : "/fractions");
  };

  return (
    <form
      onSubmit={submit}
      className="glass mt-stack-lg p-2 rounded-full flex items-center shadow-2xl w-full max-w-xl group focus-within:border-primary-fixed/40 focus-within:cyan-glow transition-all duration-300"
    >
      <Icon name="search" className="ml-4 text-outline" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="bg-transparent border-none focus:ring-0 focus:outline-none text-white placeholder-outline w-full font-body-md px-3"
        placeholder="Buscar destinos, propiedades o experiencias"
        type="text"
      />
      <button
        type="submit"
        className="bg-primary-fixed text-on-primary-fixed px-6 py-2 rounded-full font-label-md hover:scale-105 transition-transform whitespace-nowrap"
      >
        Explorar
      </button>
    </form>
  );
}
