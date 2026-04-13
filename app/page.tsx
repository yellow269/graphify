export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-4">Graphify</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Turn CSV files into
              <span className="block text-slate-300">beautiful dashboards</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Upload spreadsheet data, generate instant charts, and save dashboards to Supabase.
              Built for fast business insights with a clean SaaS workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/upload"
                className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold shadow-2xl hover:scale-105 transition"
              >
                Upload CSV
              </a>
              <a
                href="/charts"
                className="px-6 py-3 rounded-2xl border border-slate-600 hover:bg-slate-800 transition"
              >
                View Charts
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-2xl font-bold">1-click</p>
                <p className="text-sm text-slate-400">CSV upload</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-2xl font-bold">Live</p>
                <p className="text-sm text-slate-400">Supabase sync</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-2xl font-bold">Fast</p>
                <p className="text-sm text-slate-400">Chart rendering</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 rounded-2xl bg-slate-700/60 p-4 flex items-end">
                <div className="w-full flex items-end gap-2 h-full">
                  <div className="w-1/4 h-16 bg-white rounded-t-lg" />
                  <div className="w-1/4 h-24 bg-white rounded-t-lg" />
                  <div className="w-1/4 h-32 bg-white rounded-t-lg" />
                  <div className="w-1/4 h-20 bg-white rounded-t-lg" />
                </div>
              </div>
              <div className="h-40 rounded-2xl bg-slate-700/60 p-4">
                <div className="w-28 h-28 mx-auto mt-2 rounded-full border-8 border-white border-t-slate-500" />
              </div>
              <div className="col-span-2 h-48 rounded-2xl bg-slate-700/60 p-4">
                <div className="h-full flex items-end gap-3">
                  <div className="flex-1 h-20 bg-white/80 rounded-xl" />
                  <div className="flex-1 h-28 bg-white/80 rounded-xl" />
                  <div className="flex-1 h-36 bg-white/80 rounded-xl" />
                  <div className="flex-1 h-24 bg-white/80 rounded-xl" />
                  <div className="flex-1 h-40 bg-white/80 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
