'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function UploadPage() {
  const router = useRouter()
  const supabase = createClient()

  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setLoading(true)
    setFileName(file.name)

    const { data } = await supabase.auth.getUser()

    if (!data.user) {
      router.push('/login')
      setLoading(false)
      return
    }

    // TODO: later parse CSV + save to Supabase
    alert(`CSV selected: ${file.name}`)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-5xl font-bold mb-8">Upload CSV</h1>

      <input
        type="file"
        accept=".csv"
        onChange={handleUpload}
        className="mb-4"
      />

      {fileName && (
        <p className="text-lg">Selected file: {fileName}</p>
      )}

      {loading && (
        <p className="text-sm text-gray-500 mt-2">Checking login...</p>
      )}
    </main>
  )
}