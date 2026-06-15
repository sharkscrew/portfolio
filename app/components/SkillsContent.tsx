import { Person } from "../data";

export default function SkillsContent({ p }: { p: Person }) {
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
          className="absolute top-1/2 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: isShark ? "rgba(34,211,238,0.06)" : "rgba(167,139,250,0.06)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <p
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: accentColor }}
        >
          Skills
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-white mb-3">
          Technologies I work with
        </h2>
        <p className="text-sm text-white/40 mb-12 max-w-lg">
          A snapshot of tools and technologies picked up through coursework and projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {p.skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{
                    background: accentBg,
                    border: `1px solid ${accentBorder}`,
                  }}
                >
                  {group.icon}
                </span>
                <h3
                  className="font-semibold text-sm text-white"
                >
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all hover:scale-105"
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
          ))}
        </div>
      </div>
    </div>
  );
}
