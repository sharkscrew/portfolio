"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PersonNav({ person }: { person: "1" | "2" }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const base = `/person${person}`;
    const accent = person === "1" ? "var(--p1-accent)" : "var(--p2-accent)";
    const accentBg = person === "1" ? "var(--p1-accent-bg)" : "var(--p2-accent-bg)";

    const links = [
        { href: base, label: "Home" },
        { href: `${base}/about`, label: "About" },
        { href: `${base}/skills`, label: "Skills" },
        { href: `${base}/projects`, label: "Projects" },
        { href: `${base}/contact`, label: "Contact" },
    ];

    return (
        <nav style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}
            className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
                <div className="flex items-center gap-4">
                    <Link href="/" style={{ color: "var(--text-muted)" }}
                        className="text-xs font-mono hover:text-white transition-colors">
                        ← Home
                    </Link>
                    <span style={{ color: "var(--border)" }}>|</span>
                    <span className="font-mono font-bold text-sm" style={{ color: accent }}>
                        {person === "1" ? "Person 1" : "Person 2"}
                    </span>
                </div>

                <div className="hidden sm:flex items-center gap-1">
                    {links.map((l) => {
                        const active = pathname === l.href;
                        return (
                            <Link key={l.href} href={l.href}
                                style={{ color: active ? accent : "var(--text-secondary)", background: active ? accentBg : "transparent" }}
                                className="px-3 py-1.5 rounded text-sm font-medium transition-colors hover:text-white">
                                {l.label}
                            </Link>
                        );
                    })}
                    <Link href={person === "1" ? "/wolf" : "/shark"}
                        className="ml-3 px-3 py-1.5 rounded text-sm font-semibold"
                        style={{ background: person === "1" ? "var(--p2-accent)" : "var(--p1-accent)", color: "#0d1117" }}>
                        Switch →
                    </Link>
                </div>

                <button className="sm:hidden p-2" style={{ color: "var(--text-secondary)" }} onClick={() => setOpen(!open)}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {open
                            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                    </svg>
                </button>
            </div>

            {open && (
                <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}
                    className="sm:hidden px-6 py-3 flex flex-col gap-1">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                            style={{ color: pathname === l.href ? accent : "var(--text-secondary)" }}
                            className="py-2 text-sm font-medium">
                            {l.label}
                        </Link>
                    ))}
                    <Link href={person === "1" ? "/wolf" : "/shark"} onClick={() => setOpen(false)}
                        className="py-2 text-sm font-semibold mt-1"
                        style={{ color: person === "1" ? "var(--p2-accent)" : "var(--p1-accent)" }}>
                        Switch portfolio →
                    </Link>
                </div>
            )}
        </nav>
    );
}