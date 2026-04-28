import Link from "next/link";

export default function ProfileSelector() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center gap-16 px-4">
      <div className="text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#666] mb-2">AMW Sports HQ</p>
        <h1 className="text-2xl font-light tracking-widest text-white/80">
          Who are you watching?
        </h1>
      </div>

      <div className="flex gap-12 items-center flex-wrap justify-center">
        {/* Chelsea — active */}
        <Link href="/chelsea" className="group flex flex-col items-center gap-5 outline-none">
          <div className="relative w-44 h-44 rounded-full p-[3px] bg-gradient-to-br from-[#034694] to-[#021736] transition-all duration-300 group-hover:shadow-[0_0_40px_8px_rgba(3,70,148,0.6)] group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-[#021736] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/chelsea.svg"
                alt="Chelsea FC"
                className="w-28 h-28 object-contain drop-shadow-lg"
              />
            </div>
          </div>
          <span className="text-sm tracking-widest uppercase text-white/60 group-hover:text-white/90 transition-colors duration-200">
            Chelsea FC
          </span>
        </Link>

        {/* SA Spurs — coming soon */}
        <div className="flex flex-col items-center gap-5 cursor-not-allowed">
          <div className="relative w-44 h-44 rounded-full p-[3px] bg-gradient-to-br from-[#444] to-[#222] opacity-40">
            <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/spurs.svg"
                alt="San Antonio Spurs"
                className="w-28 h-28 object-contain"
              />
            </div>
            <div className="absolute inset-0 rounded-full flex items-end justify-center pb-6">
              <span className="bg-black/70 text-[#aaa] text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
          </div>
          <span className="text-sm tracking-widest uppercase text-white/25">
            SA Spurs
          </span>
        </div>
      </div>
    </main>
  );
}
