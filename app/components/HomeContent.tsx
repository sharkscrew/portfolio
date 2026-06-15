import Link from "next/link";
import { Person } from "../data";

export default function HomeContent({ p }: { p: Person }) {
  const isShark = p.id === "1";
  const accentColor = isShark ? "#22d3ee" : "#a78bfa";
  const accentBg = isShark
    ? "rgba(34, 211, 238, 0.08)"
    : "rgba(167, 139, 250, 0.08)";
  const accentBorder = isShark
    ? "rgba(34, 211, 238, 0.2)"
    : "rgba(167, 139, 250, 0.2)";
  const routeMap: Record<"1" | "2", string> = { "1": "/shark", "2": "/wolf" };
  const base = routeMap[p.id];

  const allSkills = p.skillGroups.flatMap((g) => g.skills);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* ── Animated Background ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: isShark
              ? "rgba(34, 211, 238, 0.08)"
              : "rgba(167, 139, 250, 0.08)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: isShark
              ? "rgba(34, 211, 238, 0.05)"
              : "rgba(167, 139, 250, 0.05)",
          }}
        />
      </div>

      {/* ── Hero ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white/50 mb-8 font-mono tracking-wider uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: accentColor }}
            />
            {p.location}
          </div>

          {/* Name & Role */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-white leading-[1.05]"
          >
            {p.name.split(" ")[0]}
            <br />
            <span style={{ color: accentColor }}>{p.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p
            className="text-lg sm:text-xl font-mono mb-3"
            style={{ color: accentColor }}
          >
            {p.role}
          </p>
          <p className="text-base leading-relaxed text-white/40 max-w-xl mb-10">
            {p.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`${base}/projects`}
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                background: accentColor,
                color: "#0a0a0a",
              }}
            >
              View Projects
            </Link>
            <Link
              href={`${base}/contact`}
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                border: `1px solid rgba(255,255,255,0.1)`,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* ── Skills Marquee ── */}
          <div className="mt-16 pt-10 border-t border-white/[0.04]">
            <div className="marquee-track overflow-hidden">
              <div className="marquee-animate flex gap-4" style={{ width: "max-content" }}>
                {[...allSkills, ...allSkills].map((skill, i) => (
                  <span
                    key={`${skill}-${i}`}
                    className="shrink-0 px-4 py-2 rounded-lg text-sm font-mono"
                    style={{
                      background: accentBg,
                      color: accentColor,
                      border: `1px solid ${accentBorder}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: `${p.projects.length}`, label: "Projects" },
              {
                value: `${p.skillGroups.reduce((a, g) => a + g.skills.length, 0)}+`,
                label: "Technologies",
              },
              { value: "2026", label: "Expected Grad" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-bold font-mono"
                  style={{ color: accentColor }}
                >
                  {s.value}
                </p>
                <p className="text-xs mt-1 text-white/30">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
