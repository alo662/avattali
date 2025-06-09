import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avattali',
  description: 'Created with v0',
  generator: 'v0.dev',
    icons: {
    icon: 'public/placeholder-logo.png',        // ← nombre del archivo dentro de /public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
