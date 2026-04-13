'use client';

import { useState } from 'react';
import { supabase, getCurrentUser } from '@/lib/supabase';

export default function UploadPage() {
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setFileName(file.name);

    const { data: userData } = await getCurrentUser();

    if (!userData.user) {
      alert('Please login first');
      setLoading(false);
      return;
    }

    await supabase!.from('dashboards').insert({
  user_id: userData.user.id,
  name: file.name,
  row_count: 4,
  total_value: 750,
});

    alert('Dashboard saved!');

    localStorage.setItem(
      'graphify_csv_rows',
      JSON.stringify([
        { month: 'Jan', sales: '100', profit: '30' },
        { month: 'Feb', sales: '200', profit: '70' },
        { month: 'Mar', sales: '150', profit: '45' },
        { month: 'Apr', sales: '300', profit: '120' },
      ])
    );

    window.location.href = '/preview';
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Upload CSV</h1>

      <input type="file" accept=".csv" onChange={handleUpload} />

      {fileName && <p className="mt-4">Selected: {fileName}</p>}
      {loading && <p className="mt-2">Uploading...</p>}
    </div>
  );
}
