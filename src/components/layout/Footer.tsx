import Link from 'next/link';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Building2 className="h-6 w-6 text-gold" strokeWidth={2} />
                </div>
                <span className="text-xl font-bold text-white">中梦集团</span>
              </div>
            </Link>
            <p className="text-lg font-semibold text-gold">让人才，在城市生长</p>
            <p className="text-sm leading-relaxed text-white/60">中国人才全周期服务引领者，深耕人才安居18年</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">快速导航</h3>
            <ul className="space-y-2">
              {[{ label: '关于我们', href: '/about' }, { label: '在营项目', href: '/projects' }, { label: '新闻动态', href: '/news' }, { label: '联系我们', href: '/contact' }].map(l => (
                <li key={l.href}><Link href={l.href} className="text-sm text-white/60 hover:text-gold transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">业务板块</h3>
            <ul className="space-y-2">
              {['人才安居', '产业发展', '资产盘活', '综合服务', '未来布局'].map(s => (
                <li key={s}><Link href={s === '人才安居' ? '/talent-housing' : s === '产业发展' ? '/industry-park' : s === '资产盘活' ? '/asset-revitalization' : '/future-layout'} className="text-sm text-white/60 hover:text-gold transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" /><span>安徽省芜湖市弋江区高新技术产业开发区漳河路7号</span></li>
              <li className="flex items-start gap-3 text-sm text-white/60"><Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" /><a href="tel:0553-5916666" className="hover:text-gold">0553-5916666</a></li>
              <li className="flex items-start gap-3 text-sm text-white/60"><Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" /><a href="mailto:info@zomergroup.com" className="hover:text-gold">info@zomergroup.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-white/40 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} 安徽中梦人才服务集团有限公司. 保留所有权利。</p>
          <p className="italic text-gold/40">让人才，在城市生长</p>
        </div>
      </div>
    </footer>
  );
}
