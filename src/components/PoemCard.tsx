"use client";

import { useState } from "react";
import { Poem } from "@/types/poem";

export default function PoemCard({ poem }: { poem?: Poem }) {
  if (!poem) return null;

  const [lang, setLang] = useState<"en" | "hi" | "gu">("en");
  const [likes, setLikes] = useState(poem.likes ?? 0);

  const content =
    lang === "en"
      ? poem.content_en ?? "No English content"
      : lang === "hi"
      ? poem.content_hi ?? "No Hindi content"
      : poem.content_gu ?? "No Gujarati content";

  const likePoem = async () => {
    setLikes((l) => l + 1);

    try {
      await fetch(`/api/poems/${poem.id}/like`, {
        method: "POST",
      });
    } catch (err) {
      console.error("Like failed", err);
    }
  };

  return (
    <div className="p-6 border rounded-2xl shadow-lg space-y-4 bg-white">

      <h2 className="text-2xl font-bold text-orange-600">
        {poem.title}
      </h2>

      {/* LANGUAGE SWITCH */}
      <div className="flex gap-2">
        {["en", "hi", "gu"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l as any)}
            className={`px-3 py-1 rounded-full border ${
              lang === l ? "bg-orange-500 text-white" : ""
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <p className="text-gray-700 whitespace-pre-line">
        {content}
      </p>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-3 items-center">

        {poem.pdfUrl && (
          <a
            href={poem.pdfUrl}
            target="_blank"
            className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full"
          >
            📄 PDF
          </a>
        )}

        {poem.audioUrl && (
          <audio controls className="w-full">
            <source src={poem.audioUrl} />
          </audio>
        )}

        <button
          onClick={likePoem}
          className="px-4 py-2 bg-rose-100 text-rose-600 rounded-full"
        >
          ❤️ {likes}
        </button>

      </div>
    </div>
  );
}