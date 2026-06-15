import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">

      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">

        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rounded">
            DP
          </div>
          <span className="font-semibold tracking-wide">Portfolio</span>
        </Link>

        <div className="flex gap-3">
          <Link
            href="/shark"
            className="px-4 py-2 rounded-md text-sm font-semibold bg-blue-500 text-black hover:opacity-90 transition"
          >
            Shark
          </Link>
          <Link
            href="/wolf"
            className="px-4 py-2 rounded-md text-sm font-semibold bg-purple-500 text-black hover:opacity-90 transition"
          >
            Wolf
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Choose a Portfolio
        </h1>
        <p className="text-gray-400 mb-12">
          Select a profile to view details
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">

          <Link
            href="/shark"
            className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-all hover:scale-[1.03]"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-blue-500">
              <Image
                src="/shark.jpg"
                alt="Shark"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold mb-1">
              Ersyl Jay L. Bingco
            </h2>

            <p className="text-sm text-blue-400 mb-2">
              BS Computer Science
            </p>

            <p className="text-sm text-gray-400">
              Roxas City, Capiz
            </p>

            <div className="mt-6">
              <span className="text-sm px-4 py-2 bg-blue-500 text-black rounded-lg font-semibold">
                View Portfolio →
              </span>
            </div>
          </Link>

          <Link
            href="/wolf"
            className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 transition-all hover:scale-[1.03]"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-purple-500">
              <Image
                src="/wolf.jpg"
                alt="Wolf"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold mb-1">
              John Vincent Giner
            </h2>

            <p className="text-sm text-purple-400 mb-2">
              BS Computer Science
            </p>

            <p className="text-sm text-gray-400">
              Roxas City, Capiz
            </p>

            <div className="mt-6">
              <span className="text-sm px-4 py-2 bg-purple-500 text-black rounded-lg font-semibold">
                View Portfolio →
              </span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}