"use client";
import { Person } from "../data";

export default function ProjectsContent({ p }: { p: Person }) {
  const isShark = p.id === "1";
  const accentColor = isShark ? "#22d3ee" : "#a78bfa";
  const accentBg = isShark
    ? "rgba(34, 211, 238, 0.08)"
    : "rgba(167, 139, 250, 0.08)";
  const accentBorder = isShark
    ? "rgba(34, 211, 238, 0.2)"
    : "rgba(167, 139, 250, 0.2)";

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ background: isShark ? "rgba(34,211,238,0.06)" : "rgba(167,139,250,0.06)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <p
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: accentColor }}
        >
          Projects
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-white mb-3">
          Things I&apos;ve built
        </h2>
        <p className="text-sm text-white/40 mb-12 max-w-lg">
          A selection of academic and personal projects.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto">
          {p.projects.map((project, i) => {
            // Create varied sizes: first project = large (span 4 cols + 2 rows),
            // second = medium (span 2 cols + 2 rows), third = small (span 3 cols, centered)
            const isLarge = i === 0;
            const isMedium = i === 1;

            return (
              <div
                key={project.title}
                className={`group rounded-xl overflow-hidden transition-all duration-500 ${
                  isLarge ? "md:col-span-4 md:row-span-2" : ""
                } ${isMedium ? "md:col-span-2 md:row-span-2" : ""} ${
                  !isLarge && !isMedium ? "md:col-span-3 md:col-start-2" : ""
                }`}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = isShark
                    ? "rgba(34, 211, 238, 0.3)"
                    : "rgba(167, 139, 250, 0.3)";
                  el.style.boxShadow = isShark
                    ? "0 0 25px rgba(34, 211, 238, 0.1), 0 0 50px rgba(34, 211, 238, 0.05)"
                    : "0 0 25px rgba(167, 139, 250, 0.1), 0 0 50px rgba(167, 139, 250, 0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255, 255, 255, 0.04)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Emoji Banner */}
                <div
                  className={`flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${
                    isLarge ? "h-48 md:h-56" : "h-32"
                  }`}
                  style={{
                    background: accentBg,
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span className={`${isLarge ? "text-7xl" : "text-4xl"} transition-transform duration-500 group-hover:scale-110`}>
                    {project.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className={`font-semibold text-white ${isLarge ? "text-lg" : "text-base"}`}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="shrink-0 px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background:
                          project.status === "Completed"
                            ? "rgba(74,222,128,0.1)"
                            : "rgba(251,191,36,0.1)",
                        color:
                          project.status === "Completed" ? "#4ade80" : "#fbbf24",
                        border: `1px solid ${
                          project.status === "Completed"
                            ? "rgba(74,222,128,0.2)"
                            : "rgba(251,191,36,0.2)"
                        }`,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          color: "rgba(255,255,255,0.4)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
