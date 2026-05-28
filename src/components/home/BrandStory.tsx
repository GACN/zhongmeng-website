"use client";

import { Lightbulb, Target, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const VALUES = [
  { Icon: Lightbulb, title: "想", desc: "真正想——敢于梦想，敢于规划，用前瞻视野定义城市人才服务新标准", color: "text-amber-500 bg-amber-50" },
  { Icon: Target, title: "信", desc: "真正信——坚定信念，相信人才的力量，相信长期主义的价值", color: "text-brand bg-bg-sky" },
  { Icon: Rocket, title: "做", desc: "真正做——脚踏实地，从第一间公寓到三万套，用行动兑现每一个承诺", color: "text-emerald-500 bg-emerald-50" },
];

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand">
      <div className="relative min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-white/20" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-white/10" />
        </div>
        <div className="relative z-10 py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-5xl rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur-md md:p-12 lg:p-16">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <ScrollReveal direction="left">
                  <div className="flex flex-col items-center gap-6">
                    <h3 className="text-xl font-bold text-brown">中梦信条</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {VALUES.map((v, i) => {
                        const Icon = v.Icon;
                        return (
                          <div key={i} className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-brand text-white md:h-32 md:w-32 transition-transform hover:scale-105">
                            <Icon className="mb-1 h-5 w-5" />
                            <span className="text-center text-sm font-semibold leading-tight px-2">{v.title}</span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-sm text-brown/60">指引中梦人前行的力量</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.2}>
                  <div>
                    <h2 className="text-3xl font-bold text-brown md:text-4xl">关于中梦</h2>
                    <div className="mt-2 h-1 w-16 rounded-full bg-gold" />
                    <p className="mt-6 text-base leading-relaxed text-brown/80 md:text-lg">
                      中梦集团始创于2008年，从校园创业起步，历经文化传媒、影院连锁、数字科技、人才公寓运营，逐步成长为城市人才综合服务运营商。集团以「让人才，在城市生长」为核心理念，累计运营房源超30000套，服务人才超100000人。
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-3 md:mt-16">
                {VALUES.map((v, i) => {
                  const Icon = v.Icon;
                  return (
                    <ScrollReveal key={i} delay={0.15 * (i + 1)}>
                      <div className="group flex flex-col items-center rounded-2xl bg-bg-sky/60 p-6 text-center transition-all duration-300 hover:bg-bg-sky hover:shadow-lg md:p-8">
                        <div className={cn("flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110", v.color)}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-brown">{v.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-brown/70">{v.desc}</p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
