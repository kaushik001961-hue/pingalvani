"use client";

import { useState } from "react";

type Poem = {
  id: string;
  title: string;
  slug?: string | null;
  content_gu?: string | null;
  content_hi?: string | null;
  content_en?: string | null;
  likes?: number | null;
  featured?: boolean;
};

type PoemCardProps = {
  poem?: Poem;
  featured?: boolean;
};

export default function PoemCard({
  poem,
  featured = false,
}: PoemCardProps) {
  const [likes, setLikes] = useState(poem?.likes ?? 0);
  const [liking, setLiking] = useState(false);

  async function handleLike() {
    if (!poem?.id || liking) return;

    setLiking(true);
    setLikes((value) => value + 1);

    try {
      const response = await fetch(`/api/poems/${poem.id}/like`, {
        method: "POST",
      });

      if (!response.ok) {
        setLikes((value) => Math.max(0, value - 1));
      }
    } catch {
      setLikes((value) => Math.max(0, value - 1));
    } finally {
      setLiking(false);
    }
  }

  if (!poem) {
    return null;
  }

  return (
    <article className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-xl font-bold text-[#171315]">
            {poem.title}
          </h3>

          {(featured || poem.featured) && (
            <span className="mt-2 inline-flex rounded-full bg-[#f5e9ed] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8f1239]">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 line-clamp-5 whitespace-pre-line text-sm leading-7 text-black/65">
        {poem.content_gu ||
          poem.content_hi ||
          poem.content_en ||
          "Poem content"}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
        <button
          type="button"
          onClick={handleLike}
          disabled={liking}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#8f1239] transition hover:bg-[#f5e9ed] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span aria-hidden="true">♥</span>
          <span>{likes}</span>
        </button>

        {poem.slug && (
          <a
            href={`/poems/${poem.slug}`}
            className="text-sm font-semibold text-[#8f1239] hover:underline"
          >
            Read poem →
          </a>
        )}
      </div>
    </article>
  );
}