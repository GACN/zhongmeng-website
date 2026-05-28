"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Article {
  id: string; title: string; category: string; date: string; published: boolean;
}

export default function AdminDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/api/articles").then(r => r.json()).then(setArticles);
  }, []);

  async function togglePublish(article: Article) {
    await fetch(`/api/articles/${article.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !article.published }),
    });
    setArticles(prev => prev.map(a => a.id === article.id ? { ...a, published: !a.published } : a));
  }

  async function del(id: string) {
    if (!confirm("确定删除？")) return;
    await fetch(`/api/articles/${id}`, { method: "DELETE" });
    setArticles(prev => prev.filter(a => a.id !== id));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brown">文章管理</h1>
        <Link href="/admin/articles/new" className="px-4 py-2 bg-brand text-white rounded-lg text-sm hover:bg-brand-light">
          + 写文章
        </Link>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr><th className="p-4">标题</th><th className="p-4">分类</th><th className="p-4">日期</th><th className="p-4">状态</th><th className="p-4">操作</th></tr>
          </thead>
          <tbody>
            {articles.map(a => (
              <tr key={a.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{a.title}</td>
                <td className="p-4 text-brown-light">{a.category}</td>
                <td className="p-4 text-brown-light">{a.date}</td>
                <td className="p-4">
                  <button onClick={() => togglePublish(a)}
                    className={`px-2 py-1 rounded text-xs ${a.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {a.published ? "已发布" : "草稿"}
                  </button>
                </td>
                <td className="p-4 space-x-2">
                  <Link href={`/admin/articles/${a.id}/edit`} className="text-brand hover:underline">编辑</Link>
                  <button onClick={() => del(a.id)} className="text-red-500 hover:underline">删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
