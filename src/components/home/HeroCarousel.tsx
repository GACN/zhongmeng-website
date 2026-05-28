"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SLIDES = [
  { title: "让人才，在城市生长", subtitle: "中国人才全周期服务引领者，深耕人才安居18年", cta: "了解中梦", href: "/about" },
  { title: "30000+套人才公寓", subtitle: "覆盖皖浙两省8城，从芜湖走向长三角", cta: "查看项目", href: "/projects" },
  { title: "五大业务板块协同", subtitle: "人才安居 · 产业发展 · 资产盘活 · 综合服务 · 未来布局", cta: "业务介绍", href: "/talent-housing" },
];

const AUTOPLAY_INTERVAL = 8000;
const GRADIENTS = ["from-brand via-brand-light to-brand-dark", "from-brand-dark via-brand to-brand-light", "from-brand-light via-brand to-brand-dark"];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % SLIDES.length), []);
  useEffect(() => { const t = setInterval(next, AUTOPLAY_INTERVAL); return () => clearInterval(t); }, [next, current]);

  const slide = SLIDES[current];
  const words = slide.title.split(/(\s+)/).filter(Boolean);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <h1 className="sr-only">中梦集团｜中国人才全周期服务引领者</h1>
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[current]}`}>
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="flex max-w-4xl flex-col items-center text-center"
            initial="hidden" animate="visible" exit="exit">
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
              {words.map((word, i) => (
                <motion.span key={`${current}-${i}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: i * 0.12, ease: "easeOut" }}
                  className="inline-block whitespace-pre">{word}</motion.span>
              ))}
            </h2>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, delay: words.length * 0.12 + 0.3, ease: "easeOut" }}
              className="mt-4 text-lg text-white/80 md:mt-6 md:text-xl" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
              {slide.subtitle}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, delay: words.length * 0.12 + 0.5, ease: "easeOut" }} className="mt-6 md:mt-8">
              <Button href={slide.href} size="lg" variant="primary">{slide.cta}</Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-24">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`第${i + 1}张`}
            className={cn("h-2 rounded-full transition-all duration-500 cursor-pointer",
              i === current ? "w-8 bg-gold" : "w-2 bg-white/50 hover:bg-white/80")} />
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 md:bottom-10" style={{ animation: "bounce-down 2s ease-in-out infinite" }}>
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
}
