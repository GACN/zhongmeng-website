import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Shield, Home, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "关于中梦 - 中梦集团",
  description: "",
};

const HONORS = [
  "省级「双强六好」非公企业党组织", "全国人才公寓示范基地", "芜湖市五一劳动奖状",
  "市级党建工作示范点", "「弋企逐梦」政协委员工作室", "芜湖青年中心",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand to-brand-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/20" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full border border-white/10" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">关于中梦</h1>
          <p className="text-lg md:text-xl text-white/80">品牌故事</p>
        </div>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "关于我们" }]} /></Container>

      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Home, value: "30000+", label: "运营房源" },
              { icon: Users, value: "100000+", label: "服务人才" },
              { icon: Globe, value: "8城·16项目", label: "覆盖皖浙两省" },
            ].map((s, i) => { const Icon = s.icon; return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center rounded-2xl bg-bg-sky p-8 hover:shadow-lg transition-shadow">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 mb-4"><Icon className="h-7 w-7 text-brand" strokeWidth={1.8} /></div>
                  <div className="text-3xl font-bold text-brand mb-2">{s.value}</div>
                  <div className="text-sm text-brown-light">{s.label}</div>
                </div>
              </ScrollReveal>
            );})}
          </div>
        </Container>
      </section>

      <section id="history" className="py-16 md:py-24 bg-white">
        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <SectionHeading title="品牌故事" subtitle="" />
              <div className="h-1 w-16 rounded-full bg-gold mx-auto mb-8" />
              <div className="space-y-6 text-lg leading-relaxed text-brown-light">
                <p>
                  中梦集团始创于2008年，由两位在校大学生在芜湖以「明明文化传媒」起步。从校园里的一间办公室开始，创始人先后涉足文化传媒、影院连锁、数字科技等领域——中梦影业鼎盛时期在全国17所高校运营MMC连锁影院，中梦科技曾在新四板挂牌。
                </p>
                <p>
                  2015年是中梦的转折之年。这一年，集团迁入芜湖高新技术产业开发区，拿下了第一个人才公寓项目——We+华强人才公寓。这个看似偶然的选择，实则踩准了中国城市化进程中一个巨大的结构性需求：年轻人涌向城市，却没有体面、可负担的住房。从此，中梦锚定人才服务赛道，以「让人才，在城市生长」为使命，开始了一段持续十年的深耕。
                </p>
                <p>
                  今天的中梦，已构建起<strong>人才安居、产业发展、资产盘活、综合服务、未来布局</strong>五大业务板块，形成「资产盘活为起点→人才安居为基础→产业发展为动力→综合服务为保障→未来布局为延伸」的完整协同闭环。总部位于芜湖市弋江区紫云英人才大厦，业务覆盖安徽、浙江两省8座城市16个项目。
                </p>
                <p>
                  十八年来，中梦始终秉持九个字的信条——<strong>「想，真正想；信，真正信；做，真正做」</strong>。想，是敢于用前瞻视野定义行业标准；信，是愿意为长期主义付出短期代价；做，是把第一间公寓到三万套的每一步都走实。
                </p>
                <p>
                  从校园创业到集团化运营，从芜湖一城到跨省布局，从「城市人才综合服务运营商」到「中国人才全周期服务引领者」——中梦的故事，是一个关于相信和坚持的故事。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section id="honors" className="py-16 md:py-24 bg-bg-sky">
        <Container>
          <SectionHeading title="荣誉资质" subtitle="18年深耕，获得的每一份荣誉都是前行的动力" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {HONORS.map((honor, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10"><Shield className="h-6 w-6 text-brand" /></div>
                  <p className="text-base font-medium text-brown pt-2">{honor}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
