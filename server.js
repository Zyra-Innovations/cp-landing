import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const mailTo = process.env.MAIL_TO || process.env.SMTP_USER

  if (!smtpHost || !smtpUser || !smtpPass || !mailTo) {
    return res.status(500).json({
      message: 'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and MAIL_TO in .env.',
    })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const subject = `New contact form message from ${name}`
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
  ].join('\n')

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: mailTo,
      replyTo: email,
      subject,
      text,
    })

    return res.json({ message: 'Message sent successfully.' })
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to send email via SMTP.',
    })
  }
})

app.listen(port, () => {
  console.log(`SMTP API listening on http://localhost:${port}`)
})
