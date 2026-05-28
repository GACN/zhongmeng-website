import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Shield, Award, Flag, Heart, Users, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "党建风采 - 中梦集团",
  description: "",
};

export default function PartyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">党建风采</h1><p className="mt-4 text-lg text-white/80">"梦想家"党建品牌 · 红色引擎驱动人才服务</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "党建风采" }]} /></Container>

      {/* 核心理念 */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-8">把党建建在人才社区里</h2>
            <div className="space-y-4 text-lg leading-relaxed text-brown-light">
              <p>
                中共中梦集团支部委员会成立于<strong className="text-brand">2017年5月</strong>，现有党员<strong className="text-brand">28名</strong>，支部书记黄艺媛。自成立以来，支部一直探索一个独特命题：<strong>在人才社区里做党建，应该是什么样的？</strong>
              </p>
              <p>
                中梦的答案是——党建不是挂在墙上的标语，而是嵌入人才服务的红色引擎。从「梦想家」品牌挂牌到抗疫一线的党员突击队，从「弋企逐梦」政协工作室到「明明很爱你」公益行动，中梦的党建工作始终与业务深度融合、与社区共生共长。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 组织架构和品牌 */}
      <section className="py-16 md:py-24 bg-bg-sky">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-8 border-l-4 border-brand shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10"><Shield className="h-6 w-6 text-brand" /></div>
                  <div>
                    <h3 className="font-bold text-brown text-lg">组织架构</h3>
                    <p className="text-sm text-brown-light">2017年5月成立</p>
                  </div>
                </div>
                <div className="space-y-3 text-brown-light">
                  <div className="flex justify-between"><span>支部书记</span><span className="font-medium text-brown">黄艺媛</span></div>
                  <div className="flex justify-between"><span>在册党员</span><span className="font-medium text-brown">28名</span></div>
                  <div className="flex justify-between"><span>群团组织</span><span className="font-medium text-brown">工会 · 团支部 · 妇联</span></div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 border-l-4 border-gold shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10"><Flag className="h-6 w-6 text-gold" /></div>
                  <div>
                    <h3 className="font-bold text-brown text-lg">「梦想家」品牌</h3>
                    <p className="text-sm text-brown-light">2022年10月挂牌</p>
                  </div>
                </div>
                <div className="space-y-2 text-brown-light text-sm">
                  <p><strong>四个平台：</strong>学习平台 · 服务平台 · 活动平台 · 展示平台</p>
                  <p><strong>四个融合：</strong>党建与业务融合 · 党建与社区融合 · 党建与文化融合 · 党建与公益融合</p>
                  <p><strong>12345工作框架：</strong>一个品牌 · 两个抓手 · 三支队伍 · 四项机制 · 五个阵地</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 关键时刻 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4 text-center">关键时刻</h2>
            <p className="text-brown-light text-center mb-12">党建的力量，在急难险重时刻最见真章</p>
            <div className="space-y-6">
              {[
                {
                  icon: Zap, color: "bg-red-500", title: "抗疫先锋：13天1100套健康驿站",
                  desc: "2022年疫情期间，中梦接到紧急任务：13天内建成1100套健康驿站。支部书记黄艺媛带领80余名党员志愿者日夜奋战，按时交付全部健康驿站。物资调配、施工协调、后勤保障——每一个环节都有党员冲锋在前。这不仅是一次极限任务的完成，更是中梦党建「关键时刻站得出来」的最好证明。"
                },
                {
                  icon: Users, color: "bg-blue-500", title: "党员示范岗：每个社区都有一面旗帜",
                  desc: "中梦在运营的16个项目中均设立「党员示范岗」。从公寓管家到维修师傅，从社区活动组织者到住户矛盾调解员，党员在各自的岗位上亮身份、作表率。高新区人才社区的住户满意度调研显示，「有党员管家负责的楼栋，报修响应速度平均快30%」。"
                },
                {
                  icon: Heart, color: "bg-rose-400", title: "明明很爱你：10年公益的红色底色",
                  desc: "「明明很爱你」公益品牌始于中梦创始人的初心，而党支部的成立让这份初心有了组织保障。10余年来84场公益活动、400万+捐资的背后，是党员志愿者的持续付出。从走访养老院到资助困难学生，从社区义诊到抗疫物资捐赠——党建让公益走得更远、更稳。"
                },
                {
                  icon: Target, color: "bg-emerald-500", title: "「弋企逐梦」政协工作室",
                  desc: "设在中梦集团大厦内的「弋企逐梦」政协委员工作室，是党建与社会治理创新的融合实践。工作室定期组织企业座谈会、政策宣讲会、人才需求调研，将园区企业的心声传递到决策层面，发挥了党组织在政企之间的桥梁纽带作用。"
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group rounded-2xl bg-bg-sky p-6 md:p-8 border border-brand/5 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-5">
                      <div className={`${item.color} flex h-12 w-12 shrink-0 items-center justify-center rounded-xl`}>
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brown mb-2">{item.title}</h3>
                        <p className="text-brown-light leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 核心荣誉 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark to-brand">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">核心荣誉</h2>
            <p className="text-white/70 mb-12">每一份荣誉，都是党建与业务深度融合的见证</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "省级「双强六好」非公企业党组织",
                "全国人才公寓示范基地",
                "芜湖市五一劳动奖状",
                "市级党建工作示范点",
                "「弋企逐梦」政协委员工作室",
                "芜湖青年中心",
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur p-4">
                  <Award className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-white text-sm text-left">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
