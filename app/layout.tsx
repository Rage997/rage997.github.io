import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Niccolò's Website",
  description: 'Personal website of Niccolò Zuppichini - Computer Scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,200,200italic,300,300italic,700,700italic"
          rel="stylesheet" type="text/css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}