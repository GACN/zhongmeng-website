import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Heart, TrendingUp, Users, Sunrise, Shield, BellRing, Sparkles } from "lucide-react";

export default async function FuturePage() {
  
    return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">未来布局</h1><p className="mt-4 text-lg text-white/80">从青年人才到银发群体，延伸全生命周期服务</p></div></Container>
      </section>
      <Container><Breadcrumb  items={[{ label: "首页", href: "/" }, { label: "未来布局" }]} /></Container>

      {/* 核心介绍 */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-8">从「青年安居」到「全龄关怀」</h2>
            <div className="space-y-4 text-lg leading-relaxed text-brown-light">
              <p>
                未来布局以 <strong className="text-brand">「明日股份」</strong> 为核心载体，是中梦「中国人才全周期服务引领者」定位的终极表达——从服务来城市打拼的青年人（人才安居），延伸至服务步入银发阶段的长者（适老化社区），实现从25岁到75岁的全生命周期服务闭环。
              </p>
              <p>
                这一战略布局基于三大判断：<strong>人口结构变迁</strong>——中国正在快速进入老龄化社会，到2035年60岁以上人口将突破4亿；<strong>政策导向</strong>——银发经济已上升为国家战略，适老化住房和服务存在巨大供给缺口；<strong>能力复用</strong>——中梦在人才社区运营中积累的标准化管理、智慧化系统和品质服务能力，可平滑迁移至养老服务场景。
              </p>
              <p>
                2026年，中梦正式将「适老化公寓+养老服务」纳入集团战略，标志着从「城市人才运营商」向「全龄生活服务商」的跨越。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 三大方向 */}
      <section className="py-16 md:py-24 bg-bg-sky">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">三大布局方向</h2>
            <p className="text-brown-light mb-10">能力复用 + 需求洞察 + 战略储备</p>
            <div className="space-y-6">
              {[
                { icon: Sunrise, title: "适老化公寓", desc: "面向55岁以上银发群体的适老化租赁住房。在现有人才公寓标准化体系基础上叠加适老化改造标准（无障碍通道、紧急呼叫、健康监测等），打造「安全、舒适、有尊严」的长者居住空间。首批项目将在芜湖现有社区中试点，逐步向合肥、海宁等城市扩展。", color: "bg-rose-500" },
                { icon: Heart, title: "养老服务", desc: "从「住有所居」到「老有所养」。规划包括：日间照料中心、老年助餐点、健康管理站、文娱活动空间等社区嵌入式养老服务设施。依托中梦现有的人才管家团队，培训升级为「全龄管家」，为银发群体提供日常生活协助与情感陪伴。", color: "bg-amber-500" },
                { icon: Sparkles, title: "银发经济生态", desc: "不只是「养老」，更是「享老」。中梦计划联动保险、医疗、文旅、教育等行业伙伴，打造银发经济生态圈：养老保险对接、康养旅居、老年大学、适老化产品电商等。在人口老龄化大趋势下，银发经济将是未来十年最具确定性的增长赛道之一。", color: "bg-purple-600" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all border border-brand/5">
                    <div className="flex items-start gap-6">
                      <div className={`${item.color} flex h-14 w-14 shrink-0 items-center justify-center rounded-xl`}>
                        <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brown mb-3">{item.title}</h3>
                        <p className="text-brown-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 全生命周期概念 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4 text-center">全生命周期服务愿景</h2>
            <p className="text-brown-light text-center mb-12">从走出校园到安享晚年，中梦陪伴每一段城市人生</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stage: "25-35岁", title: "青年安居", desc: "走出校门，踏入城市。中梦提供从精品公寓到共享社区的多种选择，让你在一座陌生的城市里，有一个像家一样的起点。", icon: Users, color: "bg-blue-600" },
                { stage: "35-55岁", title: "事业发展", desc: "成家立业，向上生长。中梦通过产业园、众创空间和人才服务，陪伴职业黄金期的发展。更大的居住空间、更好的子女教育配套、更便捷的社群网络。", icon: TrendingUp, color: "bg-brand" },
                { stage: "55-75+岁", title: "银发关怀", desc: "退而不休，老有所乐。从适老化公寓到健康管理，从老年大学到康养旅居，中梦让银发岁月同样充满生长感——不是「养老」，而是「享老」。", icon: Heart, color: "bg-rose-500" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group rounded-2xl bg-bg-sky p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className={`${item.color} inline-flex h-14 w-14 items-center justify-center rounded-xl mb-4`}>
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                    </div>
                    <span className="inline-block text-sm font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">{item.stage}</span>
                    <h3 className="text-lg font-bold text-brown mb-2">{item.title}</h3>
                    <p className="text-sm text-brown-light leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 核心理念 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rose-600 to-rose-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">让人才，在城市生长</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              这不仅仅是一句品牌口号，更是一个完整的服务承诺。从中梦维家的第一间公寓开始，到明日股份的第一个适老化社区——中梦要做的，是让每一位城市奋斗者，从25岁到75岁，都能在这里找到自己的位置，持续生长。
            </p>
            <p className="text-white/60 text-sm">
              「想，真正想；信，真正信；做，真正做。」——这份信条将一路照亮中梦的远方。
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
