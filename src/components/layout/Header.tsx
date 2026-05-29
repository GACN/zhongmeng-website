'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown, Building2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import type { NavLink } from '@/lib/constants';

const NAV: NavLink[] = [
  { tKey: "首页", href: "/" },
  {
    tKey: "关于我们",
    children: [
      { tKey: "集团概况", href: "/about" },
      { tKey: "发展历程", href: "/history" },
      { tKey: "荣誉资质", href: "/about#honors" },
      { tKey: "党建风采", href: "/party" },
    ],
  },
  {
    tKey: "家友服务",
    children: [
      { tKey: "服务项目", href: "/talent-housing" },
      { tKey: "智慧系统", href: "/smart-system" },
    ],
  },
  {
    tKey: "项目信息",
    children: [
      { tKey: "项目案例", href: "/projects" },
      { tKey: "业务板块", href: "/business" },
    ],
  },
  {
    tKey: "房源展示",
    children: [
      { tKey: "产品中心", href: "/projects" },
    ],
  },
  {
    tKey: "中梦资讯",
    children: [
      { tKey: "新闻中心", href: "/news" },
      { tKey: "明明很爱你", href: "/mingming-love" },
    ],
  },
  {
    tKey: "联系我们",
    children: [
      { tKey: "联系我们", href: "/contact" },
      { tKey: "人才招聘", href: "/jobs" },
    ],
  },
];

function NavDropdown({ item, pathname }: { item: NavLink; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  const childActive = (item.children ?? []).some((c) => c.href === pathname);

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`group relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200
          ${childActive ? 'text-brand' : 'text-brown hover:text-brand'}`}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {item.tKey}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-gold transition-all duration-300 ease-out
          ${childActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </button>
      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-40 mt-1 w-36 -translate-x-1/2"
            role="menu"
          >
            <div className="overflow-hidden rounded-2xl border border-brown/10 bg-white shadow-lg">
              <ul className="py-2">
                {item.children.map((c) => {
                  const isActive = pathname === c.href;
                  return (
                    <li key={c.href}>
                      <Link href={c.href!}
                        className={`block px-4 py-2 text-sm transition-colors duration-150
                          ${isActive ? 'bg-brand/10 text-brand font-semibold' : 'text-brown hover:bg-gold/10 hover:text-brand'}`}>
                        {c.tKey}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    function handleScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileNavOpen(false); }, [pathname]);

  return (
    <>
      <header className={`sticky top-0 z-30 w-full transition-all duration-300 backdrop-blur-md bg-white/80
        ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                <Building2 className="h-5 w-5 text-gold" strokeWidth={2} />
              </div>
              <span className="text-lg font-bold text-brand hidden sm:block">中梦集团</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              if (item.children) return <NavDropdown key={item.tKey} item={item} pathname={pathname} />;
              const isActive = pathname === item.href;
              return (
                <Link key={item.tKey} href={item.href!}
                  className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200
                    ${isActive ? 'text-brand' : 'text-brown hover:text-brand'}`}>
                  {item.tKey}
                  <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-gold transition-all duration-300 ease-out
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact"
              className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-light hover:shadow-md sm:inline-flex">
              联系我们
            </Link>
            <button onClick={() => setMobileNavOpen(true)} aria-label="Open menu"
              className="rounded-lg p-2 text-brown transition-colors hover:bg-brown/5 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
