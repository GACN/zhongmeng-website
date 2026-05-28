"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface Article {
  id: string; title: string; category: string; date: string;
  summary: string; content: string; cover: string;
}

export default function NewsDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/articles/${id}`)
      .then(r => r.json())
      .then(data => {
        setArticle(data.error ? null : data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-brown-light">加载中...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-brown">404</h1>
        <p className="text-brown-light">文章不存在或已删除</p>
        <Link href="/news" className="text-brand hover:underline">← 返回新闻列表</Link>
      </div>
    );
  }

  return (
    <>
      {article.cover ? (
        <div className="h-64 md:h-96 overflow-hidden relative">
          <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ) : (
        <section className="bg-gradient-to-br from-brand to-brand-dark py-14 md:py-18">
          <Container>
            <div className="text-center">
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/20 text-white mb-3">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{article.title}</h1>
              <p className="mt-3 text-white/70 text-sm">{article.date}</p>
            </div>
          </Container>
        </section>
      )}

      <Container>
        <Breadcrumb items={[
          { label: "首页", href: "/" },
          { label: "新闻动态", href: "/news" },
          { label: article.title },
        ]} />
      </Container>

      <section className="py-12 md:py-16">
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* 日期和分类 */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <span className="text-xs px-3 py-1 rounded-full bg-brand/10 text-brand font-medium">
                {article.category}
              </span>
              <span className="text-sm text-brown-light">{article.date}</span>
            </div>

            {/* 正文 */}
            <div className="prose prose-lg max-w-none
              prose-headings:text-brown prose-headings:font-bold
              prose-p:text-brown-light prose-p:leading-relaxed prose-p:my-4
              prose-strong:text-brown
              prose-a:text-brand hover:prose-a:text-brand-light
              prose-img:rounded-xl prose-img:shadow-md
              [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-base md:[&_p]:text-lg
              [&_hr]:my-10 [&_hr]:border-gray-100
              [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:bg-amber-50 [&_blockquote]:p-4 [&_blockquote]:rounded-r-lg
            "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* 底部导航 */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
              <Link href="/news" className="text-brand hover:text-brand-light text-sm font-medium transition-colors">
                ← 返回新闻列表
              </Link>
              <Link href="/" className="text-brown-light hover:text-brown text-sm transition-colors">
                返回首页
              </Link>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
