import Image from "next/image";
import { Person } from "../data";

export default function AboutContent({ p }: { p: Person }) {
  const isShark = p.id === "1";
  const accentColor = isShark ? "#22d3ee" : "#a78bfa";
  const accentBg = isShark
    ? "rgba(34, 211, 238, 0.08)"
    : "rgba(167, 139, 250, 0.08)";
  const accentBorder = isShark
    ? "rgba(34, 211, 238, 0.2)"
    : "rgba(167, 139, 250, 0.2)";

  const sections = [
    { icon: "👤", title: "Personal Background", content: p.about.personal },
    { icon: "🎓", title: "Educational Background", content: p.about.education },
    { icon: "🎯", title: "Career Goals", content: p.about.goals },
    { icon: "🎮", title: "Interests & Hobbies", content: p.about.interests },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: isShark ? "rgba(34,211,238,0.06)" : "rgba(167,139,250,0.06)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: accentColor }}
          >
            About
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left column - name & intro */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-3">
                {p.name}
              </h2>
              <p className="text-base text-white/40 mb-2">{p.role}</p>
              <p className="text-sm text-white/30 mb-6">📍 {p.location}</p>
              <p className="text-sm leading-relaxed text-white/50">{p.bio}</p>
            </div>
            {/* Right column - headshot mask */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden border-2"
                style={{ borderColor: accentBorder }}
              >
                <Image
                  src={`/${p.photo}`}
                  alt={p.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg"
                  style={{
                    background: "rgba(10,10,10,0.8)",
                    border: `1px solid ${accentBorder}`,
                    color: accentColor,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {p.initials}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{
                    background: accentBg,
                    border: `1px solid ${accentBorder}`,
                  }}
                >
                  {s.icon}
                </span>
                <h3
                  className="font-semibold text-sm text-white"
                >
                  {s.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/50">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
