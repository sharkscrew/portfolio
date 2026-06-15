import { Person } from "../data";

const EmailIcon = () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);
const PhoneIcon = () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);
const GithubIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);
const LinkedinIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);
const FacebookIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

export default function ContactContent({ p }: { p: Person }) {
    const accent = p.accent;
    const accentBg = p.id === "1" ? "var(--p1-accent-bg)" : "var(--p2-accent-bg)";
    const accentBorder = p.id === "1" ? "var(--p1-accent-border)" : "var(--p2-accent-border)";

    const contacts = [
        { label: "Email", value: p.email, href: `mailto:${p.email}`, icon: <EmailIcon /> },
        { label: "Mobile", value: p.phone, href: `tel:${p.phone.replace(/\s/g, "")}`, icon: <PhoneIcon /> },
        { label: "GitHub", value: p.github, href: `https://${p.github}`, icon: <GithubIcon /> },
        { label: "LinkedIn", value: p.linkedin, href: `https://${p.linkedin}`, icon: <LinkedinIcon /> },
        { label: "Facebook", value: p.facebook, href: `https://${p.facebook}`, icon: <FacebookIcon /> },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-2xl mx-auto">
                <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: accent }}>Contact</p>
                <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Let&apos;s connect</h2>
                <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
                    Feel free to reach out — always open to opportunities and collaborations.
                </p>

                <div className="space-y-3">
                    {contacts.map((c) => (
                        <a key={c.label} href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg transition-colors group"
                            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                            <span className="p-2 rounded" style={{ background: accentBg, color: accent, border: `1px solid ${accentBorder}` }}>
                                {c.icon}
                            </span>
                            <div>
                                <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{c.label}</p>
                                <p className="text-sm font-medium group-hover:underline" style={{ color: "var(--text-primary)" }}>{c.value}</p>
                            </div>
                            <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14"
                                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: accent }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}