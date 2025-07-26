import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avattali',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: 'public/placeholder-logo.png',        // ← nombre del archivo dentro de /public
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}
