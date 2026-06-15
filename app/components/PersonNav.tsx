"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PersonNav({ person }: { person: "1" | "2" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const routeMap: Record<"1" | "2", string> = { "1": "/shark", "2": "/wolf" };
  const base = routeMap[person];
  const isShark = person === "1";
  const accent = isShark ? "#22d3ee" : "#a78bfa";
  const accentBg = isShark
    ? "rgba(34, 211, 238, 0.08)"
    : "rgba(167, 139, 250, 0.08)";

  const links = [
    { href: base, label: "Home" },
    { href: `${base}/about`, label: "About" },
    { href: `${base}/skills`, label: "Skills" },
    { href: `${base}/projects`, label: "Projects" },
    { href: `${base}/contact`, label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-white/40 hover:text-white/80 transition-colors font-mono"
          >
            ← Home
          </Link>
          <span className="text-white/10">/</span>
          <span
            className="font-semibold text-sm tracking-tight"
            style={{ color: accent }}
          >
            {isShark ? "Shark" : "Wolf"}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: active ? accent : "rgba(255, 255, 255, 0.5)",
                  background: active ? accentBg : "transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href={isShark ? "/wolf" : "/shark"}
            className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{
              background: isShark
                ? "rgba(167, 139, 250, 0.12)"
                : "rgba(34, 211, 238, 0.12)",
              color: isShark ? "#a78bfa" : "#22d3ee",
              border: `1px solid ${
                isShark
                  ? "rgba(167, 139, 250, 0.2)"
                  : "rgba(34, 211, 238, 0.2)"
              }`,
            }}
          >
            Switch →
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden p-2 text-white/50 hover:text-white/80 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="sm:hidden px-6 py-4 flex flex-col gap-1"
          style={{
            background: "rgba(10, 10, 10, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium transition-colors"
              style={{
                color: pathname === l.href ? accent : "rgba(255, 255, 255, 0.5)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={isShark ? "/wolf" : "/shark"}
            onClick={() => setOpen(false)}
            className="py-3 text-sm font-semibold mt-2"
            style={{
              color: isShark ? "#a78bfa" : "#22d3ee",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            Switch portfolio →
          </Link>
        </div>
      )}
    </nav>
  );
}
