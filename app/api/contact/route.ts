import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const TO = process.env.CLIENT_EMAIL || 'zac@zcubed.digital'

export async function POST(req: NextRequest) {
  let body: { name?: string; phone?: string; message?: string; source?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const name = (body.name || '').toString().trim().slice(0, 120)
  const phone = (body.phone || '').toString().trim().slice(0, 40)
  const message = (body.message || '').toString().trim().slice(0, 2000)
  const source = (body.source || 'contact').toString().slice(0, 24)

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: 'Name and phone required' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY missing — logging only', { name, phone, source })
    return NextResponse.json({ ok: true, note: 'logged' })
  }

  const resend = new Resend(apiKey)
  try {
    await resend.emails.send({
      from: 'Bee Clean Website <hello@zcubed.digital>',
      to: [TO],
      subject: `New enquiry — ${name} (${source})`,
      text: [
        `Source: ${source}`,
        `Name:    ${name}`,
        `Phone:   ${phone}`,
        '',
        'Message:',
        message || '(no message)',
      ].join('\n'),
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] send failed', err)
    return NextResponse.json({ ok: false, error: 'Send failed' }, { status: 500 })
  }
}
