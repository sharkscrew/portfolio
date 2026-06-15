import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Animated Background ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* ── Header ── */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform">
            DP
          </div>
          <span className="font-medium tracking-tight text-white/80 group-hover:text-white transition-colors">
            Portfolio
          </span>
        </Link>

        <nav className="flex gap-2">
          <Link
            href="/shark"
            className="px-5 py-2 rounded-lg text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
          >
            Shark
          </Link>
          <Link
            href="/wolf"
            className="px-5 py-2 rounded-lg text-sm font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/20 transition-all"
          >
            Wolf
          </Link>
        </nav>
      </header>

      {/* ── Hero ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-white/50 mb-8 font-mono tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Two Student Portfolios
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          Choose a Profile
        </h1>
        <p className="text-white/40 text-base mb-14 max-w-md">
          Explore the academic journey, skills, and projects of two Computer Science students.
        </p>

        {/* ── Profile Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
          {/* ── Shark ── */}
          <Link
            href="/shark"
            className="group relative p-8 rounded-2xl text-left transition-all duration-500 hover:scale-[1.02] hover:z-10"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.06), transparent 40%)",
              }}
            />
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-5 border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500">
                <Image
                  src="/shark.jpg"
                  alt="Shark"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                Ersyl Jay L. Bingco
              </h2>
              <p className="text-sm text-cyan-400/70 mb-1 font-mono">BS Computer Science</p>
              <p className="text-sm text-white/30">Roxas City, Capiz</p>

              <div className="mt-6">
                <span className="inline-block text-sm px-5 py-2.5 rounded-lg font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all">
                  View Portfolio →
                </span>
              </div>
            </div>
          </Link>

          {/* ── Wolf ── */}
          <Link
            href="/wolf"
            className="group relative p-8 rounded-2xl text-left transition-all duration-500 hover:scale-[1.02] hover:z-10"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(167,139,250,0.06), transparent 40%)",
              }}
            />
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-5 border-2 border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-500">
                <Image
                  src="/wolf.jpg"
                  alt="Wolf"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">
                John Vincent Giner
              </h2>
              <p className="text-sm text-violet-400/70 mb-1 font-mono">BS Computer Science</p>
              <p className="text-sm text-white/30">Roxas City, Capiz</p>

              <div className="mt-6">
                <span className="inline-block text-sm px-5 py-2.5 rounded-lg font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:bg-violet-500/20 transition-all">
                  View Portfolio →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="relative z-10 text-center py-6 text-xs text-white/20 border-t border-white/[0.04] font-mono">
        Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
