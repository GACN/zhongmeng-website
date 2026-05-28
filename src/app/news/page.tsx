"use client";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";

interface Article {
  id: string; title: string; category: string; date: string; summary: string; cover: string;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/api/articles").then(r => r.json()).then(data => {
      setArticles(data.filter((a: Article) => (a as any).published));
    });
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">新闻动态</h1><p className="mt-4 text-lg text-white/80">集团要闻与行业资讯</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "新闻动态" }]} /></Container>
      <section className="py-16 md:py-24">
        <Container>
          {articles.length === 0 ? (
            <div className="text-center py-16 text-brown-light">暂无文章</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {articles.map(a => (
                <Link key={a.id} href={`/news/${a.id}`}
                  className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                  {a.cover ? (
                    <div className="h-48 overflow-hidden"><img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-brand/10 to-gold/10 flex items-center justify-center">
                      <span className="text-4xl">📰</span>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand">{a.category}</span>
                      <span className="text-xs text-brown-light">{a.date}</span>
                    </div>
                    <h3 className="font-bold text-brown mb-2 group-hover:text-brand transition-colors line-clamp-2">{a.title}</h3>
                    <p className="text-sm text-brown-light line-clamp-2">{a.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
