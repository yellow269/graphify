'use client'

export default function BillingPage() {
  async function subscribe() {
    const res = await fetch('/api/payfast/subscribe', {
      method: 'POST',
    })

    const data = await res.json()
    window.location.href = data.url
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Upgrade to Pro</h1>
        <p className="text-slate-400 mb-6">
          Unlimited uploads, saved dashboards, AI insights, and premium exports.
        </p>

        <button
          onClick={subscribe}
          className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90"
        >
          Subscribe R799/mo
        </button>
      </div>
    </div>
  )
}