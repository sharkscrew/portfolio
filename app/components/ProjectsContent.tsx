import { Person } from "../data";

export default function ProjectsContent({ p }: { p: Person }) {
    const accent = p.accent;

    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-2xl mx-auto">
                <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: accent }}>Projects</p>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Things I&apos;ve built</h2>
                <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>A selection of academic and personal projects.</p>

                <div className="space-y-5">
                    {p.projects.map((project) => (
                        <div key={project.title} className="rounded-lg overflow-hidden"
                            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                            <div className="h-36 flex items-center justify-center text-5xl"
                                style={{
                                    background: p.id === "1" ? "var(--p1-accent-bg)" : "var(--p2-accent-bg)",
                                    borderBottom: "1px solid var(--border)"
                                }}>
                                {project.emoji}
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                                    <span className="shrink-0 px-2 py-0.5 rounded text-xs font-medium"
                                        style={{
                                            background: project.status === "Completed" ? "rgba(74,222,128,0.12)" : "rgba(251,191,36,0.12)",
                                            color: project.status === "Completed" ? "#4ade80" : "#fbbf24",
                                            border: `1px solid ${project.status === "Completed" ? "rgba(74,222,128,0.25)" : "rgba(251,191,36,0.25)"}`,
                                        }}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-0.5 rounded text-xs font-mono"
                                            style={{ background: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}