import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Lux Laundry | Lehigh Valley Laundry Service',
  description: 'Professional laundry service in Lehigh Valley. Wash, dry, fold, and delivery services available.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${robotoMono.variable}`}>{children}</body>
    </html>
  )
} 