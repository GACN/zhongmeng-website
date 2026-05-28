import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Briefcase, Building2, GraduationCap, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "人才招聘 - 中梦集团",
  description: "",
};

export default function JobsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">人才招聘</h1><p className="mt-4 text-lg text-white/80">加入中梦 · 一起生长</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "人才招聘" }]} /></Container>
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { icon: Building2, tag: "热招", title: "公寓管家", loc: "芜湖 / 马鞍山 / 海宁", desc: "负责人才社区日常运营与服务，住户关系维护" },
              { icon: Building2, tag: "热招", title: "物业经理", loc: "芜湖", desc: "统筹项目物业管理与品质提升" },
              { icon: GraduationCap, tag: "校招", title: "运营管培生", loc: "多地可选", desc: "轮岗培养，快速成长为项目管理人才" },
              { icon: Video, tag: "社招", title: "品宣专员 / 剪辑师", loc: "芜湖总部", desc: "品牌宣传 · 短视频 · 公众号运营" },
            ].map((job, i) => {
              const Icon = job.icon;
              const tagColor = job.tag === "热招" ? "bg-red-100 text-red-600" : job.tag === "校招" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600";
              return (
                <div key={i} className="flex items-start gap-4 rounded-2xl bg-bg-sky p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10"><Icon className="h-6 w-6 text-brand" strokeWidth={1.8} /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-brown">{job.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${tagColor}`}>{job.tag}</span>
                    </div>
                    <p className="text-sm text-brown-light">{job.desc}</p>
                    <p className="text-xs text-brown-light/60 mt-1">📍 {job.loc}</p>
                  </div>
                </div>
              );
            })}
            <div className="text-center pt-8">
              <p className="text-brown-light">📮 简历投递：发送至招聘邮箱</p>
              <p className="text-sm text-brown-light/60 mt-2">关注「中梦维家人才服务」公众号获取最新招聘信息</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
