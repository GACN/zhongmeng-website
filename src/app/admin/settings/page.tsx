"use client";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/settings").then(r => r.json()).then(setSettings);
  }, []);

  async function save() {
    setSaving(true);
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setMsg("保存成功！");
    setTimeout(() => setMsg(""), 2000);
  }

  if (!settings) return <div className="p-8">加载中...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-brown">网站设置</h1>
        <button onClick={save} disabled={saving}
          className="px-4 py-2 bg-brand text-white rounded-lg text-sm hover:bg-brand-light disabled:opacity-50">
          {saving ? "保存中..." : "保存设置"}
        </button>
      </div>
      {msg && <p className="mb-4 text-green-600 text-sm">{msg}</p>}
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 max-w-2xl">
        <div>
          <h2 className="text-lg font-semibold text-brown mb-3">联系方式</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(settings.contact || {}).map(([k, v]) => (
              <div key={k}>
                <label className="block text-xs text-brown-light mb-1">{k}</label>
                <input value={v as string} onChange={e => setSettings({ ...settings, contact: { ...settings.contact, [k]: e.target.value } })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand focus:outline-none" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-brown mb-3">网站信息</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(settings.site || {}).map(([k, v]) => (
              <div key={k} className="col-span-2">
                <label className="block text-xs text-brown-light mb-1">{k}</label>
                <input value={v as string} onChange={e => setSettings({ ...settings, site: { ...settings.site, [k]: e.target.value } })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-brand focus:outline-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
