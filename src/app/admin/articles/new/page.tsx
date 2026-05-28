"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewArticlePage() {
  return <ArticleEditor />;
}

function ArticleEditor({ initial }: { initial?: any }) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title || "");
  const [category, setCategory] = useState(initial?.category || "集团新闻");
  const [date, setDate] = useState(initial?.date || new Date().toISOString().slice(0, 10));
  const [summary, setSummary] = useState(initial?.summary || "");
  const [content, setContent] = useState(initial?.content || "");
  const [cover, setCover] = useState(initial?.cover || "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: form });
    const data = await res.json();
    if (data.ok) setCover(data.url);
    setUploading(false);
  }

  async function handleSave(draft: boolean) {
    setSaving(true);
    const body = { title, category, date, summary, content, cover, published: !draft };
    const url = initial ? `/api/articles/${initial.id}` : "/api/articles";
    const method = initial ? "PUT" : "POST";
    await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    setSaving(false);
    router.push("/admin");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-brown mb-6">{initial ? "编辑文章" : "写文章"}</h1>
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-4 max-w-3xl">
        <div>
          <label className="block text-sm font-medium text-brown mb-1">标题</label>
          <input value={title} onChange={e => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:outline-none"
            placeholder="文章标题" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-brown mb-1">分类</label>
            <select value={category} onChange={e => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:outline-none">
              <option>集团新闻</option><option>项目动态</option><option>行业资讯</option><option>党建活动</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-brown mb-1">日期</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-brown mb-1">摘要</label>
          <textarea value={summary} onChange={e => setSummary(e.target.value)} rows={2}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:outline-none"
            placeholder="文章摘要（用于列表展示）" />
        </div>
        <div>
          <label className="block text-sm font-medium text-brown mb-1">正文</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} rows={12}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand focus:outline-none font-mono text-sm"
            placeholder="文章正文..." />
        </div>
        <div>
          <label className="block text-sm font-medium text-brown mb-1">封面图片</label>
          <div className="flex items-center gap-4">
            <input type="file" accept="image/*" onChange={handleUpload}
              className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-brand file:text-white hover:file:bg-brand-light" />
            {uploading && <span className="text-sm text-brown-light">上传中...</span>}
          </div>
          {cover && (
            <div className="mt-2 relative w-48 h-32 rounded-lg overflow-hidden border">
              <img src={cover} alt="封面" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        <div className="flex gap-3 pt-4">
          <button onClick={() => handleSave(false)} disabled={saving}
            className="px-6 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-light disabled:opacity-50">
            {saving ? "保存中..." : "发布"}
          </button>
          <button onClick={() => handleSave(true)} disabled={saving}
            className="px-6 py-2 bg-gray-200 text-brown rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50">
            存草稿
          </button>
        </div>
      </div>
    </div>
  );
}
