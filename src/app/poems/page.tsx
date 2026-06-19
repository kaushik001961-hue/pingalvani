"use client";

import { useEffect, useState } from "react";
import PoemCard from "@/components/PoemCard";

export default function PoemsPage() {
  const [query, setQuery] = useState("");
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchPoems = async (value: string) => {
    setLoading(true);

    try {
      const res = await fetch(`/api/search?q=${value}`);
      const data = await res.json();
      setPoems(data || []);
    } catch {
      setPoems([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      searchPoems(query);
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">

      {/* 🔍 SEARCH BAR */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search emotions, poetry, words..."
        className="w-full border px-5 py-3 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {/* LOADING */}
      {loading && (
        <p className="text-gray-500">AI Searching...</p>
      )}

      {/* RESULTS */}
      {!loading && poems.length === 0 ? (
        <p className="text-gray-400">No poems found</p>
      ) : (
        poems.map((poem: any) => (
          <PoemCard key={poem.id} poem={poem} />
        ))
      )}
    </div>
  );
}