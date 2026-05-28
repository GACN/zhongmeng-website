"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pwd }),
    });
    const data = await res.json();
    if (data.ok) {
      localStorage.setItem("admin_token", data.token);
      router.push("/admin");
    } else {
      setErr(data.error || "登录失败");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand to-brand-dark">
      <form onSubmit={login} className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-brand mb-6">中梦集团 · 管理后台</h1>
        <input type="password" value={pwd} onChange={e => setPwd(e.target.value)}
          placeholder="请输入管理密码" className="w-full px-4 py-3 rounded-xl border border-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-brand"
          autoFocus />
        {err && <p className="text-red-500 text-sm mb-3">{err}</p>}
        <button type="submit" className="w-full py-3 bg-brand text-white rounded-xl font-semibold hover:bg-brand-light transition-colors">
          登录
        </button>
      </form>
    </div>
  );
}
