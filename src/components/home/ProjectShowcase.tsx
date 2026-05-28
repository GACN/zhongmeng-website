"use client";

import { MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const PROJECTS = [
  { city: "芜湖高新区", name: "高新区人才社区", area: "约11.5万㎡", highlight: "央视报道·国家级考察" },
  { city: "芜湖湾沚", name: "We+人才社区", area: "约15.3万㎡", highlight: "摇号选房·3:1" },
  { city: "马鞍山含山", name: "昭智人才社区", area: "约7.1万㎡", highlight: "三心并举·6大社区" },
  { city: "嘉兴海宁", name: "城家青年社区", area: "约8.9万㎡", highlight: "跨省首子·长三角" },
  { city: "合肥新站", name: "逐梦人才社区", area: "约12.5万㎡", highlight: "产学研一体化" },
  { city: "芜湖弋江", name: "紫云英人才大厦", area: "约2.6万㎡", highlight: "青年人才地标" },
];

export default function ProjectShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand/50 mb-3">在营项目</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brown">在营项目</h2>
            <p className="mt-4 text-lg text-brown-light">16个项目覆盖皖浙两省，构建城市人才生态</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-bg-sky p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-brand/5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-brand/60"><MapPin className="h-3.5 w-3.5" />{project.city}</div>
                  <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded-full">{project.area}</span>
                </div>
                <h3 className="text-lg font-bold text-brown mb-2 group-hover:text-brand transition-colors">{project.name}</h3>
                <p className="text-sm text-brown-light mb-4">{project.highlight}</p>
                <div className="flex items-center text-sm font-medium text-brand group-hover:gap-2 transition-all">
                  了解详情 <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
