"use client";

import { useState } from 'react';

export function ContactSection({ subject }: { subject?: string }) {
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          subject,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (e) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="text-gray-600">Have a question or want to book a test drive? Send us a message and we?ll get back to you shortly.</p>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>Phone: +91 98765 43210</li>
            <li>Email: hello@somucars.com</li>
            <li>Address: 12 Market Road, Chennai</li>
          </ul>
          {status === 'success' && (
            <div className="p-3 rounded border border-green-200 bg-green-50 text-green-700 text-sm">Thanks! We received your message.</div>
          )}
          {status === 'error' && (
            <div className="p-3 rounded border border-red-200 bg-red-50 text-red-700 text-sm">Something went wrong. Please try again.</div>
          )}
        </div>
        <form
          className="card p-6 space-y-4"
          action={async (fd) => {
            await onSubmit(fd);
          }}
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" required className="mt-1 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" required className="mt-1 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input name="phone" className="mt-1 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" required className="mt-1 w-full border rounded-md px-3 py-2" rows={4} />
          </div>
          <button disabled={loading} className="btn btn-primary">
            {loading ? 'Sending?' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
