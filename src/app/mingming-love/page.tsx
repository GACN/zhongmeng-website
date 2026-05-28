import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Heart, Calendar, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "明明很爱你 - 中梦集团公益品牌",
  description: "",
};

export default function MingmingLovePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-rose-500 to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">明明很爱你</h1><p className="mt-4 text-lg text-white/80">10年+公益品牌 · 用陪伴温暖时光</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "明明很爱你" }]} /></Container>
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-16 w-16 text-rose-400 mx-auto mb-4" fill="currentColor" />
              <p className="text-xl font-bold text-brown">"明明很爱你"</p>
              <p className="text-brown-light mt-2">始于中梦创始人"明明"之名，从校园创业之初便将公益融入企业基因。<br/>10余年来，无论集团如何发展壮大，这份初心从未改变。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Calendar, value: "10年+", label: "持续公益" },
                { icon: Heart, value: "84场", label: "公益活动" },
                { icon: Users, value: "400万+", label: "累计捐资" },
              ].map((s, i) => { const Icon = s.icon; return (
                <div key={i} className="text-center rounded-2xl bg-bg-sky p-8">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-rose-50 mb-4"><Icon className="h-7 w-7 text-rose-400" strokeWidth={1.8} /></div>
                  <div className="text-2xl font-bold text-rose-500 mb-2">{s.value}</div>
                  <div className="text-sm text-brown-light">{s.label}</div>
                </div>
              );})}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-brown">公益足迹</h2>
              <div className="rounded-2xl bg-bg-sky p-6 space-y-4">
                {[
                  { title: "康怡养老 · 大爱无疆", desc: "走进养老院，为长者送去陪伴与温暖。用行动诠释老吾老以及人之老。" },
                  { title: "社区关爱 · 邻里守望", desc: "定期走访人才社区困难住户，送上生活物资与节日问候。" },
                  { title: "青年助学 · 筑梦未来", desc: "资助品学兼优的困难学生，让每一个梦想都有生长的土壤。" },
                  { title: "抗疫先锋 · 中梦速度", desc: "疫情期间13天建成1100套健康驿站，80余名党员志愿者冲锋一线。" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50"><Heart className="h-5 w-5 text-rose-400" fill="currentColor" /></div>
                    <div>
                      <h3 className="font-semibold text-brown">{item.title}</h3>
                      <p className="text-sm text-brown-light mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center p-6 rounded-2xl bg-rose-50">
              <p className="text-lg font-semibold text-rose-600">想，真正想；信，真正信；做，真正做。</p>
              <p className="text-sm text-brown-light mt-2">——这份信条不仅指引中梦的商业之路，更照亮了中梦的公益之心。</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
