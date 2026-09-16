"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Poems", href: "/poems" },
  { name: "Achievements", href: "/achievements" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "px-3 pt-3 sm:px-5 lg:px-8"
            : "px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-7xl rounded-2xl border border-black/10 bg-white/90 shadow-lg backdrop-blur-xl"
              : "w-full bg-white"
          }`}
        >
          <nav className="flex h-[68px] items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-[76px] lg:px-8">
            
            {/* LOGO */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
              {/* Logo mark */}
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8f1239] to-[#b7791f] shadow-md sm:h-11 sm:w-11">
                <span className="font-serif text-xl font-bold italic text-white sm:text-2xl">
                  P
                </span>

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#d6a23a] ring-2 ring-white" />
              </div>

              {/* Brand text */}
              <div className="min-w-0">
                <div className="truncate text-[15px] font-bold tracking-tight text-gray-900 sm:text-[17px] lg:text-[18px]">
                  Pingalshinh Bapu
                </div>

                <div className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-[#8f1239]/70 sm:block lg:text-[10px]">
                  Poet • Writer • Performer
                </div>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-[#8f1239]/5 hover:text-[#8f1239]"
                >
                  {item.name}

                  <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#8f1239] transition-all duration-300 group-hover:w-5" />
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* LANGUAGE - TABLET/DESKTOP */}
              <div className="relative hidden md:block">
                <button
                  type="button"
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-[#8f1239]/30 hover:text-[#8f1239]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8f1239] text-[9px] font-bold text-white">
                    HI
                  </span>

                  <span className="hidden xl:inline">
                    हिन्दी
                  </span>

                  <span
                    className={`text-xs transition-transform ${
                      languageOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {languageOpen && (
                  <div className="absolute right-0 mt-3 w-40 overflow-hidden rounded-2xl border border-black/10 bg-white p-1.5 shadow-xl">
                    <button
                      type="button"
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm hover:bg-[#8f1239]/5"
                    >
                      <b>EN</b>
                      <span>English</span>
                    </button>

                    <button
                      type="button"
                      className="flex w-full items-center gap-3 rounded-xl bg-[#8f1239]/5 px-3 py-2.5 text-left text-sm text-[#8f1239]"
                    >
                      <b>HI</b>
                      <span>हिन्दी</span>
                    </button>

                    <button
                      type="button"
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm hover:bg-[#8f1239]/5"
                    >
                      <b>GU</b>
                      <span>ગુજરાતી</span>
                    </button>
                  </div>
                )}
              </div>

              {/* CTA - DESKTOP */}
              <Link
                href="/poems"
                className="hidden rounded-full bg-[#8f1239] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#8f1239]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#74102f] hover:shadow-lg xl:flex"
              >
                Explore Poetry
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-[#8f1239] transition hover:bg-[#8f1239]/5 sm:h-11 sm:w-11 lg:hidden"
              >
                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen
                      ? "rotate-45"
                      : "-translate-y-[6px]"
                  }`}
                />

                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen
                      ? "-rotate-45"
                      : "translate-y-[6px]"
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          menuOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[390px] flex-col bg-[#fffaf5] px-5 pt-24 shadow-2xl transition-transform duration-500 sm:px-7 ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="border-b border-black/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#8f1239] to-[#b7791f] text-xl font-bold italic text-white">
                P
              </div>

              <div>
                <div className="font-bold text-gray-900">
                  Pingalshinh Bapu
                </div>

                <div className="text-xs text-gray-500">
                  Poet • Writer • Performer
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 text-base font-semibold text-gray-800 transition hover:border-[#8f1239]/10 hover:bg-[#8f1239]/5 hover:text-[#8f1239]"
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                <span>{item.name}</span>

                <span className="text-lg text-[#8f1239]/40">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Language
            </p>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="rounded-xl border border-black/10 bg-white py-3 text-sm font-semibold"
              >
                EN
              </button>

              <button
                type="button"
                className="rounded-xl bg-[#8f1239] py-3 text-sm font-semibold text-white shadow-md"
              >
                HI
              </button>

              <button
                type="button"
                className="rounded-xl border border-black/10 bg-white py-3 text-sm font-semibold"
              >
                GU
              </button>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/poems"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center rounded-2xl bg-[#8f1239] px-5 py-4 font-semibold text-white shadow-lg shadow-[#8f1239]/20"
          >
            Explore Poems
          </Link>

          {/* Quote */}
          <div className="mt-auto mb-8 rounded-2xl border border-[#8f1239]/10 bg-white/70 p-5">
            <div className="mb-1 font-serif text-3xl leading-none text-[#8f1239]">
              “
            </div>

            <p className="font-serif text-sm italic leading-6 text-gray-600">
              શબ્દ મારી ઓળખાણ,
              <br />
              કવિતા મારી જાન.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}