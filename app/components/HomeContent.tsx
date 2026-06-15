import Link from "next/link";
import { Person } from "../data";

export default function HomeContent({ p }: { p: Person }) {
    const accent = p.accent;
    const accentBg = p.id === "1" ? "var(--p1-accent-bg)" : "var(--p2-accent-bg)";
    const accentBorder = p.id === "1" ? "var(--p1-accent-border)" : "var(--p2-accent-border)";
    const base = `/person${p.id}`;

    return (
        <div className="min-h-screen flex items-center justify-center pt-14 px-6">
            <div className="max-w-2xl w-full">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
                        style={{ background: accentBg, border: `2px solid ${accentBorder}`, color: accent }}>
                        {p.initials}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: accent }} />
                        <span style={{ color: "var(--text-muted)" }} className="text-xs font-mono tracking-wider uppercase">
                            Available for opportunities
                        </span>
                    </div>
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
                    {p.name}
                </h1>
                <p className="text-xl font-mono mb-6" style={{ color: accent }}>{p.role}</p>
                <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>📍 {p.location}</p>
                <p className="text-base leading-relaxed mb-10 mt-4" style={{ color: "var(--text-secondary)", maxWidth: "520px" }}>
                    {p.bio}
                </p>

                <div className="flex flex-wrap gap-3">
                    <Link href={`${base}/projects`}
                        className="px-5 py-2.5 rounded text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                        style={{ background: accent, color: "#0d1117" }}>
                        View Projects
                    </Link>
                    <Link href={`${base}/contact`}
                        className="px-5 py-2.5 rounded text-sm font-semibold transition-all hover:bg-white/5"
                        style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                        Get in Touch
                    </Link>
                </div>

                <div className="mt-16 pt-10 grid grid-cols-3 gap-6" style={{ borderTop: "1px solid var(--border)" }}>
                    {[
                        { value: `${p.projects.length}`, label: "Projects" },
                        { value: `${p.skillGroups.reduce((a, g) => a + g.skills.length, 0)}+`, label: "Technologies" },
                        { value: "2026", label: "Expected Grad" },
                    ].map((s) => (
                        <div key={s.label}>
                            <p className="text-2xl font-bold font-mono" style={{ color: accent }}>{s.value}</p>
                            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}