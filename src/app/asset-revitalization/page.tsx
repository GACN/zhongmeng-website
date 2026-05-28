import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Handshake, TrendingUp, Building2, RefreshCw, Target, Home, MapPin } from "lucide-react";

export default async function AssetPage() {
  
    return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">资产盘活</h1><p className="mt-4 text-lg text-white/80">把沉睡资产激活为城市人才新空间</p></div></Container>
      </section>
      <Container><Breadcrumb  items={[{ label: "首页", href: "/" }, { label: "资产盘活" }]} /></Container>

      {/* 核心介绍 */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-8">盘活存量，创造增量</h2>
            <div className="space-y-4 text-lg leading-relaxed text-brown-light">
              <p>
                资产盘活是中梦五大业务板块协同逻辑的<strong className="text-brand">起点</strong>。集团通过不良资产收购、法拍、破产重组、闲置物业改造等多种方式，将城市中沉睡的低效资产转化为高品质人才社区与产业空间。
              </p>
              <p>
                这一模式的核心逻辑是「政府痛点 + 市场需求」的双向匹配：地方政府面临闲置资产处置难、招商难的问题，城市需要大量人才住房；中梦以专业的资产识别、改造和运营能力，在两者之间架起桥梁。
              </p>
              <p>
                截至目前，中梦累计盘活运营面积超 <strong className="text-brand">100万㎡</strong>，完成 <strong className="text-brand">16个资产盘活项目</strong>，资产利用率达 <strong className="text-brand">95%以上</strong>。从滞销商住到满租公寓，从闲置厂房到产业园区，中梦让「沉睡资产」重新为城市创造价值。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 核心能力 */}
      <section className="py-16 md:py-24 bg-bg-sky">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">四大核心能力</h2>
            <p className="text-brown-light mb-10">从资产识别到运营增值的全链路操盘</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "资产识别与评估", desc: "建立城市资产扫描体系，精准识别具备改造潜力的低效资产。从地段、结构、改造成本、政策匹配四个维度综合评估，确保「拿对资产」。", color: "bg-blue-600" },
                { icon: RefreshCw, title: "改造设计与施工", desc: "将闲置商办、滞销楼盘、老旧厂房重新设计为人才公寓或产业空间。在控制改造成本的前提下，实现空间品质与功能性的双重升级。", color: "bg-amber-500" },
                { icon: Handshake, title: "政企合作模式", desc: "熟悉各地保障性租赁住房政策、人才引进政策与资产处置流程。为地方政府提供「资产盘活方案 + 运营托管 + 人才服务」一体化解决方案。", color: "bg-emerald-600" },
                { icon: TrendingUp, title: "运营增值与退出", desc: "通过专业化运营实现资产价值提升。典型案例华强人才公寓：滞销商住楼改造后2月满租，资产价值提升超20%。", color: "bg-purple-600" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all border border-brand/5">
                    <div className={`${item.color} inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4`}>
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-brown mb-2">{item.title}</h3>
                    <p className="text-sm text-brown-light leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 典型案例 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">典型案例</h2>
            <p className="text-brown-light mb-10">每个项目都是一次「变废为宝」的城市更新实践</p>
            <div className="space-y-6">
              {[
                { name: "紫云英人才大厦", city: "芜湖弋江", scale: "约2.6万㎡", story: "中梦资产盘活的标志性项目。前身为不良资产，集团收购后进行全面改造，将其打造为集企业总部、人才服务、产业孵化于一体的青年人才地标。目前已有63家企业入驻，2个月即实现满租，是「不良资产→城市地标」的教科书级案例。" },
                { name: "华强人才公寓", city: "芜湖镜湖", scale: "440套 · 约2.2万㎡", story: "原为深圳华强在芜湖开发的商住项目，因市场原因滞销。中梦接手后快速改造为人才公寓，2个月实现满租，1.5个月完成配套商铺出售，资产价值提升超20%。这一案例证明了中梦模式在商办滞销资产盘活领域的高效执行力。" },
                { name: "天门方舟", city: "芜湖江北", scale: "约35万㎡", story: "商住+商业+住宅三类资产的复合盘活项目，是中梦迄今为止规模最大的单体盘活案例。通过分期改造、分类运营，将原本分散、低效的多个资产单元整合为一站式人才综合服务平台，成为复合资产盘活的典型成功案例。" },
                { name: "中梦9398产业园", city: "芜湖弋江", scale: "约4.1万㎡", story: "闲置工业厂房改造为产业园区的代表。通过空间再造与业态重组，将老旧厂房转化为集办公、展示、商业配套于一体的复合产业空间。「9398」谐音「久长久发」，既是空间新生，也是产业新生。" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 rounded-2xl bg-bg-sky p-6 md:p-8 border border-brand/5 hover:shadow-lg transition-shadow">
                  <div className="md:w-48 shrink-0">
                    <div className="flex items-center gap-2 text-xs font-medium text-brand/60 mb-2"><MapPin className="h-3.5 w-3.5" />{item.city}</div>
                    <h3 className="text-lg font-bold text-brown">{item.name}</h3>
                    <p className="text-sm text-gold font-medium mt-1">{item.scale}</p>
                  </div>
                  <p className="text-brown-light leading-relaxed flex-1">{item.story}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 数据看板 */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 to-emerald-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">资产盘活 · 数据看板</h2>
            <p className="text-white/70 mb-12">每一平方米，都是对城市价值的重新定义</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "100万+", label: "盘活运营面积（㎡）" },
                { value: "16个", label: "完成项目数" },
                { value: "95%+", label: "资产利用率" },
                { value: "20%+", label: "资产溢价率" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/10 backdrop-blur p-6">
                  <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-sm text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
