import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Lux Laundry | Lehigh Valley Laundry Service',
  description: 'Professional laundry service in Lehigh Valley. Expert wash, dry, fold, and delivery services available.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
} 