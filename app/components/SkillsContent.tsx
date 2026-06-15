import { Person } from "../data";

export default function SkillsContent({ p }: { p: Person }) {
    const accent = p.accent;
    const accentBg = p.id === "1" ? "var(--p1-accent-bg)" : "var(--p2-accent-bg)";
    const accentBorder = p.id === "1" ? "var(--p1-accent-border)" : "var(--p2-accent-border)";

    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-2xl mx-auto">
                <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: accent }}>Skills</p>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Technologies I work with</h2>
                <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
                    A snapshot of tools and technologies picked up through coursework and projects.
                </p>

                <div className="space-y-5">
                    {p.skillGroups.map((group) => (
                        <div key={group.category} className="p-6 rounded-lg"
                            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-lg">{group.icon}</span>
                                <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{group.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded text-xs font-mono font-medium"
                                        style={{ background: accentBg, color: accent, border: `1px solid ${accentBorder}` }}>
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