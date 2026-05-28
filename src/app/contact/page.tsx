import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, Clock, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "联系我们 - 中梦集团",
  description: "",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="mx-auto max-w-3xl text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">联系我们</h1><p className="mt-4 text-lg text-white/80 md:text-xl">期待与您携手，共建城市人才生态</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "联系我们" }]} /></Container>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-5xl mx-auto">
            <div>
              <SectionHeading title="联系方式" subtitle="期待与您携手，共建城市人才生态" />
              <div className="space-y-6 mt-8">
                {[
                  { icon: MapPin, label: "集团总部", value: "安徽省芜湖市弋江区高新技术产业开发区漳河路7号" },
                  { icon: Building2, label: "集团大厦", value: "芜湖市高新区中梦集团大厦（紫云英人才大厦）" },
                  { icon: Phone, label: "电话", value: "0553-5916666" },
                  { icon: Mail, label: "邮箱", value: "info@zomergroup.com" },
                  { icon: Clock, label: "工作时间", value: "周一至周五 8:30 - 17:30" },
                ].map((item, i) => { const Icon = item.icon; return (
                  <div key={i} className="flex items-start gap-4 rounded-2xl bg-bg-sky p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10"><Icon className="h-6 w-6 text-brand" /></div>
                    <div><p className="text-sm font-semibold text-brown">{item.label}</p><p className="text-sm text-brown-light mt-1">{item.value}</p></div>
                  </div>
                );})}
              </div>
            </div>
            <div className="rounded-2xl bg-bg-sky overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-brand/40 mx-auto mb-4" />
                <p className="text-brown-light">安徽省芜湖市弋江区<br />高新技术产业开发区漳河路7号</p>
                <a href="https://uri.amap.com/marker?position=118.356,31.267&name=中梦集团" target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-brand hover:text-brand-light transition-colors">在高德地图中查看 →</a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
