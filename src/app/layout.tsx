import type { Metadata } from 'next';
import { Quicksand, Noto_Sans_SC } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zomergroup.com'),
  title: '中梦集团 ZOMER - 中国人才全周期服务引领者',
  description: '中梦集团，中国人才全周期服务引领者。起于2008年，运营30000+套人才公寓，服务100000+人才，覆盖皖浙8城。',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: '中梦集团 ZOMER - 中国人才全周期服务引领者',
    description: '中梦集团，中国人才全周期服务引领者。起于2008年，运营30000+套人才公寓，服务100000+人才，覆盖皖浙8城。',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中梦集团 ZOMER - 中国人才全周期服务引领者',
    description: '中梦集团，中国人才全周期服务引领者',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${quicksand.variable} ${notoSansSC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
