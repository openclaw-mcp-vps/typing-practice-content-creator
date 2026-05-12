import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Typing Practice Content Creator — Turn any text into structured typing lessons',
  description: 'Upload PDFs, articles, or books and automatically generate progressive typing lessons with difficulty curves and WPM tracking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="000310dd-9b53-42f3-bf47-14104e8c1b5c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
