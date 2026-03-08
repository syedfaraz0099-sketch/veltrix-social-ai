import "./globals.css"

export const metadata = {
  title: "Veltrix Social AI",
  description: "AI Powered Social Media Automation Platform"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
