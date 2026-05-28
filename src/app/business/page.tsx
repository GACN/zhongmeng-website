import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Building2, Factory, Handshake, Wrench, Sunrise } from "lucide-react";

export const metadata: Metadata = {
  title: "业务板块 - 中梦集团",
  description: "",
};

const SECTORS = [
  { icon: "Building2", name: "人才安居", brand: "中梦维家（We+/C+/城家）", color: "bg-blue-600", desc: "人才公寓与保租房运营，累计30000+套房源，95%+入住率，覆盖皖浙两省8城16个项目。从精品公寓35-55㎡到专家公寓100㎡，全系拎包入住。", stats: "30000+套 · 95%+出租率 · 8城16项目" },
  { icon: "Factory", name: "产业发展", brand: "中梦产业园", color: "bg-amber-500", desc: "运营产业园区与众创空间，提供办公空间、创业辅导、投融资对接一站式服务。已孵化150+创业项目、服务2000+人次。配套5000㎡商业设施、1000㎡众创大厅。", stats: "150+孵化项目 · 2000+服务人次 · 5000㎡配套" },
  { icon: "Handshake", name: "资产盘活", brand: "中梦资产", color: "bg-emerald-600", desc: "不良资产收购、法拍、破产重组、闲置物业改造。将沉睡的城市资产转化为高品质人才社区。典型案例：紫云英人才大厦（63家入园企业）、华强人才公寓（2月满租+20%溢价）、天门方舟（35万㎡复合盘活）。", stats: "100万㎡+盘活面积 · 16个项目 · 95%+资产利用率" },
  { icon: "Wrench", name: "综合服务", brand: "中梦物业+人力+科技", color: "bg-purple-600", desc: "物业管理、人力资源服务、智能化运营三位一体。为人才社区提供24小时管家服务、在线报修、社群互动等全方位保障。", stats: "24h管家 · 在线报修 · 智能安防" },
  { icon: "Sunrise", name: "未来布局", brand: "明日股份", color: "bg-rose-500", desc: "布局适老化公寓与养老服务，切入银发经济赛道。从青年人才到银发群体，延伸全生命周期服务。让每一位城市奋斗者都能找到归属。", stats: "适老化公寓 · 养老服务 · 银发经济" },
];

const ICONS: Record<string, any> = { Building2, Factory, Handshake, Wrench, Sunrise };

export default function BusinessPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">业务板块</h1><p className="mt-4 text-lg text-white/80">五大业务 · 协同驱动 · 全周期服务</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "业务板块" }]} /></Container>
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-brown-light">协同逻辑：资产盘活（起点）→ 人才安居（基础）→ 产业发展（动力）→ 综合服务（保障）→ 未来布局（延伸）</p>
          </div>
          <div className="space-y-8">
            {SECTORS.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <div key={i} className="flex flex-col md:flex-row gap-6 rounded-2xl bg-bg-sky p-8 hover:shadow-lg transition-shadow border border-brand/5">
                  <div className={`${s.color} flex h-16 w-16 shrink-0 items-center justify-center rounded-xl`}>
                    <Icon className="h-8 w-8 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold text-brown">{s.name}</h2>
                      <span className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand">{s.brand}</span>
                    </div>
                    <p className="text-brown-light leading-relaxed mb-3">{s.desc}</p>
                    <p className="text-sm font-semibold text-gold">{s.stats}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
