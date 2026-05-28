"use client";

import { Shield, Award, Star, Flag } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const HONORS = [
  { icon: Award, title: "全国人才公寓示范基地" },
  { icon: Shield, title: "省级「双强六好」非公企业党组织" },
  { icon: Star, title: "芜湖市五一劳动奖状" },
  { icon: Flag, title: "市级党建工作示范点" },
  { icon: Award, title: "「弋企逐梦」政协委员工作室" },
  { icon: Star, title: "芜湖青年中心" },
];

export default function Honors() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand/50 mb-3">
              荣誉资质
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brown">
              认可与信赖
            </h2>
            <p className="mt-4 text-lg text-brown-light">
              18年深耕，获得的每一份荣誉都是前行的动力
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {HONORS.map((honor, i) => {
            const Icon = honor.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 rounded-2xl bg-bg-warm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-6 w-6 text-brand" strokeWidth={1.8} />
                  </div>
                  <p className="text-base font-semibold text-brown">{honor.title}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
