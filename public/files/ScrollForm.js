
import { useState } from 'react';

export default function ScrollForm() {
  const [form, setForm] = useState({ title: '', text: '', image: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/scrolls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setStatus(data.message);
    setForm({ title: '', text: '', image: '' });
  };

  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-2xl text-yellow-400 mb-4">Submit a Scroll</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Scroll Title"
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <textarea
          name="text"
          value={form.text}
          onChange={handleChange}
          placeholder="Scroll Text"
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <button type="submit" className="bg-yellow-400 text-black py-2 px-4 rounded-full hover:bg-yellow-500">
          Send Scroll
        </button>
        {status && <p className="text-sm text-green-400 mt-2">{status}</p>}
      </form>
    </section>
  );
}
