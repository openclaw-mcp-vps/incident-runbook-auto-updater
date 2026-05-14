import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Runbook Auto-Updater — Keep runbooks accurate automatically',
  description: 'Tracks when runbook steps fail during incidents and suggests updates based on what actually worked. Built for SREs, DevOps engineers, and incident commanders.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f71892cb-1640-482f-87c8-b3e52e39b293"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
