'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronDown, Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from '@/lib/constants';

const NAV: NavLink[] = [
  { tKey: "首页", href: "/" },
  { tKey: "关于我们", children: [
    { tKey: "集团概况", href: "/about" },
    { tKey: "发展历程", href: "/history" },
    { tKey: "荣誉资质", href: "/about#honors" },
    { tKey: "党建风采", href: "/party" },
  ]},
  { tKey: "家友服务", children: [
    { tKey: "服务项目", href: "/talent-housing" },
    { tKey: "智慧系统", href: "/smart-system" },
  ]},
  { tKey: "项目信息", children: [
    { tKey: "项目案例", href: "/projects" },
    { tKey: "业务板块", href: "/business" },
  ]},
  { tKey: "房源展示", children: [
    { tKey: "产品中心", href: "/projects" },
  ]},
  { tKey: "中梦资讯", children: [
    { tKey: "新闻中心", href: "/news" },
    { tKey: "明明很爱你", href: "/mingming-love" },
  ]},
  { tKey: "联系我们", children: [
    { tKey: "联系我们", href: "/contact" },
    { tKey: "人才招聘", href: "/jobs" },
  ]},
];

interface Props { isOpen: boolean; onClose: () => void; }

function MobileGroup({ item, pathname, onClose }: { item: NavLink; pathname: string; onClose: () => void }) {
  const childActive = (item.children ?? []).some((c) => c.href === pathname);
  const [open, setOpen] = useState(childActive);
  return (
    <div className="w-full">
      <button type="button" onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-lg font-medium transition-all duration-200
          ${childActive ? 'text-brand' : 'text-brown hover:bg-brand/5'}`} aria-expanded={open}>
        {item.tKey}<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && item.children && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            {item.children.map((c) => (
              <li key={c.href}><Link href={c.href!} onClick={onClose}
                className={`block rounded-xl py-3 pl-10 pr-4 text-base transition-colors duration-150
                  ${pathname === c.href ? 'text-brand font-semibold' : 'text-brown-light hover:text-brand'}`}>{c.tKey}</Link></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MobileNav({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 lg:hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 250 }} className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-brown/10 px-4 py-3">
                <Link href="/" onClick={onClose} className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand"><Building2 className="h-5 w-5 text-gold" strokeWidth={2} /></div>
                  <span className="text-lg font-bold text-brand">中梦集团</span>
                </Link>
                <button onClick={onClose} aria-label="关闭菜单" className="rounded-lg p-2 text-brown hover:bg-brown/5"><X className="h-5 w-5" /></button>
              </div>
              <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
                {NAV.map((item) => {
                  if (item.children) return <MobileGroup key={item.tKey} item={item} pathname={pathname} onClose={onClose} />;
                  const isActive = pathname === item.href;
                  return <Link key={item.tKey} href={item.href!} onClick={onClose}
                    className={`block rounded-xl px-4 py-3 text-lg font-medium transition-colors duration-150
                      ${isActive ? 'text-brand bg-brand/5' : 'text-brown hover:bg-brand/5 hover:text-brand'}`}>{item.tKey}</Link>;
                })}
              </nav>
              <div className="border-t border-brown/10 px-4 py-4">
                <Link href="/contact" onClick={onClose}
                  className="block w-full rounded-full bg-brand py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-light transition-colors">联系我们</Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
