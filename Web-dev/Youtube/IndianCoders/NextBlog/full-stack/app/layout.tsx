import './globals.css'

export const metadata = {
  title: 'Blog Application',
  description: 'This is a blog application created by Mr Nishanth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
