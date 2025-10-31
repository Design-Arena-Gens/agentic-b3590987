import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message, subject } = body || {};

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }

  // In real world, integrate with email provider/CRM here
  console.log('[CONTACT_FORM]', {
    receivedAt: new Date().toISOString(),
    name,
    email,
    phone,
    subject,
    message,
  });

  return NextResponse.json({ ok: true });
}
