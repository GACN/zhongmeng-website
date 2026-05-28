"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    if (pathname === "/admin/login") {
      setAuthed(null);
      return;
    }
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthed(true);
    }
  }, [mounted, pathname]);

  // Login page: render immediately, no auth check needed
  if (pathname === "/admin/login") return <>{children}</>;

  // Other pages: show loading only briefly during auth check
  if (!mounted) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <p className="text-brown-light">加载中...</p>
  </div>;
  if (!authed) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <p className="text-brown-light">验证中，请稍候...</p>
  </div>;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-56 bg-brand-dark text-white p-4 flex flex-col shrink-0">
        <Link href="/admin" className="text-xl font-bold text-gold mb-8">中梦后台</Link>
        <nav className="flex-1 space-y-1">
          <Link href="/admin" className="block px-3 py-2 rounded-lg hover:bg-white/10 text-sm">文章管理</Link>
          <Link href="/admin/articles/new" className="block px-3 py-2 rounded-lg hover:bg-white/10 text-sm">写文章</Link>
          <Link href="/admin/settings" className="block px-3 py-2 rounded-lg hover:bg-white/10 text-sm">网站设置</Link>
        </nav>
        <button onClick={() => { localStorage.removeItem("admin_token"); router.push("/admin/login"); }}
          className="text-sm text-white/50 hover:text-white mt-4 text-left">退出登录</button>
      </aside>
      <main className="flex-1 p-6 max-h-screen overflow-auto">{children}</main>
    </div>
  );
}
