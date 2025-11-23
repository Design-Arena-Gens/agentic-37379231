import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مدارج السالكين إلى الله',
  description: 'نصائح دينية فعالة لزيادة الوعي بوجوب العودة إلى الله في زمن الفتن',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
