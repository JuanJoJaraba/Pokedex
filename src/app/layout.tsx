import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meigi',
  description: 'Quiero desarrollar una pagina de ventas, que tenga su respectivo login, en el que la persona pueda hacer su carrito de compras y el metodo de pago sea contraentrega o pago por pse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
