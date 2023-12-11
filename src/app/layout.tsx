import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'NPP Ataskaita',
    description: 'Vyriausybės nacionalinio pažangos plano ataskaita',
}

export default function RootLayout({
                                       children,
                                   }: {

    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </body>
        </html>
    )
}
