"use client";

import Image from "next/image";
import { Building2, Factory, Handshake, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SECTORS = [
  { icon: Building2, color: "bg-blue-600", nameKey: "人才安居", desc: "以中梦维家为核心，运营人才公寓与保租房，累计30000+套房源，95%+入住率，为城市留住青年人才" },
  { icon: Factory, color: "bg-amber-500", nameKey: "产业发展", desc: "运营众创空间与产业园区，孵化了150+创业项目、服务2000+人次，助力区域产业升级" },
  { icon: Handshake, color: "bg-emerald-600", nameKey: "资产盘活", desc: "不良资产收购、法拍、破产重组、闲置物业改造，把沉睡资产激活为城市人才新空间" },
  { icon: Heart, color: "bg-rose-500", nameKey: "未来布局", desc: "以明日股份布局适老化公寓与银发经济，从青年人才到银发群体，延伸全生命周期服务" },
];

export default function BusinessSectors() {
  
  return (
    <section className="py-20 md:py-28 bg-bg-sky">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand/50 mb-3">
              五大业务板块
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brown">
              协同驱动，全周期服务
            </h2>
            <p className="mt-4 text-lg text-brown-light max-w-2xl mx-auto">
              资产盘活为起点，人才安居为基础，产业发展为动力，综合服务为保障，未来布局为延伸
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`${sector.color} inline-flex h-14 w-14 items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-bold text-brown mb-3">{sector.nameKey}</h3>
                  <p className="text-sm leading-relaxed text-brown-light">{sector.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
