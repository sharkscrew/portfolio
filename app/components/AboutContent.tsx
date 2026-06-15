import { Person } from "../data";

export default function AboutContent({ p }: { p: Person }) {
    const accent = p.accent;
    const sections = [
        { icon: "👤", title: "Personal Background", content: p.about.personal },
        { icon: "🎓", title: "Educational Background", content: p.about.education },
        { icon: "🎯", title: "Career Goals", content: p.about.goals },
        { icon: "🎮", title: "Interests & Hobbies", content: p.about.interests },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-2xl mx-auto">
                <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: accent }}>About</p>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>{p.name}</h2>
                <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>{p.role}</p>

                <div className="space-y-5">
                    {sections.map((s) => (
                        <div key={s.title} className="p-6 rounded-lg"
                            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-xl">{s.icon}</span>
                                <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}