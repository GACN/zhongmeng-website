"use client";

import { Home, Maximize2, Users, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";

const ITEMS = [
  { icon: Home, title: "运营房源", desc: "累计运营人才公寓及保租房，覆盖8城16项目", number: 30000, suffix: "套+" },
  { icon: Maximize2, title: "运营面积", desc: "盘活闲置及不良资产，改造为高品质人才社区", number: 100, suffix: "万㎡+" },
  { icon: Users, title: "服务人才", desc: "为城市留住青年人才，助力企业用工与产业发展", number: 100000, suffix: "人+" },
  { icon: Clock, title: "行业深耕", desc: "从校园创业到集团化运营，18年专注人才服务", number: 18, suffix: "年" },
];

export default function CoreAdvantages() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl bg-bg-sky p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-5 inline-flex rounded-2xl bg-brand/10 p-4">
                    <Icon className="h-7 w-7 text-brand" strokeWidth={1.8} />
                  </div>
                  <div className="mb-3"><CountUp end={item.number} suffix={item.suffix} /></div>
                  <h3 className="text-lg font-semibold text-brown">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brown-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
