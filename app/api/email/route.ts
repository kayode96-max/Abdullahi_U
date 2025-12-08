import { NotionMagicLinkEmail } from '@/emails/notion-magic-link'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import { env } from '@/env.mjs'

const resend = env.RESEND_TOKEN ? new Resend(env.RESEND_TOKEN) : null

export async function POST() {
  if (!resend) {
    return Response.json({ error: 'Email service not configured' }, { status: 503 })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      html: render(NotionMagicLinkEmail({ loginCode: 'John' })),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
