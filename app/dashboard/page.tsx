export default function DashboardPage() {
  const reports = [
    { name: 'Sales Q1', rows: 1240, updated: '2 min ago' },
    { name: 'Marketing Leads', rows: 860, updated: '10 min ago' },
    { name: 'Revenue Forecast', rows: 430, updated: '1 hour ago' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <aside className="w-72 min-h-screen border-r border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <h1 className="text-2xl font-bold">Graphify</h1>
          <p className="text-sm text-slate-400 mt-1">Authenticated Dashboard</p>

          <nav className="mt-10 space-y-3">
            <a href="/dashboard" className="block rounded-xl bg-white/10 px-4 py-3">Overview</a>
            <a href="/upload" className="block rounded-xl px-4 py-3 hover:bg-white/5">Upload CSV</a>
            <a href="/charts" className="block rounded-xl px-4 py-3 hover:bg-white/5">Charts</a>
            <a href="/reports" className="block rounded-xl px-4 py-3 hover:bg-white/5">Saved Reports</a>
            <a href="/settings" className="block rounded-xl px-4 py-3 hover:bg-white/5">Settings</a>
          </nav>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Signed in as</p>
            <p className="font-semibold mt-1">julian@graphify.app</p>
          </div>
        </aside>

        <section className="flex-1 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold">Welcome back, Julian 👋</h2>
              <p className="text-slate-400 mt-2">Your saved dashboards and analytics workspace</p>
            </div>
            <a href="/upload" className="rounded-2xl bg-white text-slate-900 px-6 py-3 font-semibold">
              + New Upload
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-400">Total Dashboards</p>
              <p className="text-4xl font-bold mt-2">12</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-400">CSV Files</p>
              <p className="text-4xl font-bold mt-2">38</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-400">Storage Used</p>
              <p className="text-4xl font-bold mt-2">1.8GB</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold mb-6">Recent Reports</h3>
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                >
                  <div>
                    <p className="font-semibold">{report.name}</p>
                    <p className="text-sm text-slate-400">{report.rows} rows</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Updated</p>
                    <p>{report.updated}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
