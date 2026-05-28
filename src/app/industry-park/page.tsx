import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Factory, TrendingUp, Users, Building2, Lightbulb, Rocket, MapPin } from "lucide-react";

export default async function IndustryPage() {
  
    return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">产业发展</h1><p className="mt-4 text-lg text-white/80">运营众创空间与产业园区，助力区域产业升级</p></div></Container>
      </section>
      <Container><Breadcrumb  items={[{ label: "首页", href: "/" }, { label: "产业发展" }]} /></Container>

      {/* 核心介绍 */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-8">从人才安居到产业赋能</h2>
            <div className="space-y-4 text-lg leading-relaxed text-brown-light">
              <p>
                产业发展是五大业务板块的「动力引擎」。中梦通过运营众创空间与产业园区，将人才社区聚集的人气转化为创新动能，让安居的人才「有地方创业、有空间成长」。
              </p>
              <p>
                目前中梦运营的产业空间包括 <strong className="text-brand">中梦9398产业园</strong>（约4.1万㎡，不良资产改造为产业园的典型案例）、<strong className="text-brand">梦溪双创产业园</strong>（约1.2万㎡，青年人才创新创业服务中心）、<strong className="text-brand">紫云英人才大厦</strong>（集团总部，63家企业入驻）等多个载体。
              </p>
              <p>
                集团累计孵化创业项目 <strong className="text-brand">150+个</strong>，服务创业人群超 <strong className="text-brand">2000人次</strong>，配套5000㎡商业设施和1000㎡众创大厅，为企业提供从办公空间到投融资对接的一站式服务。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 服务矩阵 */}
      <section className="py-16 md:py-24 bg-bg-sky">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">一站式产业服务矩阵</h2>
            <p className="text-brown-light mb-10">不止提供空间，更陪伴企业从0到1</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Building2, title: "空间供给", desc: "从众创工位到独立办公室，从共享会议室到路演大厅，灵活适配不同阶段企业的空间需求。拎包入驻，按需扩缩。", color: "bg-blue-600" },
                { icon: Lightbulb, title: "创业辅导", desc: "定期举办创业沙龙、导师问诊、BP打磨等活动。链接中梦生态内的企业资源，为创业者提供真实的市场验证机会。", color: "bg-amber-500" },
                { icon: Rocket, title: "投融资对接", desc: "搭建项目路演平台，对接天使投资、产业资本与政府引导基金。帮助优质项目从「空间租户」成长为「生态伙伴」。", color: "bg-emerald-600" },
                { icon: Users, title: "人才匹配", desc: "依托中梦10万+人才数据库，为入驻企业精准匹配技术人才、管理人才。与高校合作设立实习基地，降低企业招聘成本。", color: "bg-purple-600" },
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

      {/* 标杆园区 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">标杆园区一览</h2>
            <p className="text-brown-light mb-10">每个园区都是一个产业微生态</p>
            <div className="space-y-6">
              {[
                { name: "中梦9398产业园", city: "芜湖弋江", scale: "约4.1万㎡", story: "从不良资产到活力产业园的蝶变样本。「9398」取自「久长久发」谐音，寓意企业长久可持续发展。园区通过空间再造与业态重组，将原本闲置的工业厂房转化为集办公、展示、商业配套于一体的复合型产业空间，是资产盘活与产业运营深度融合的典范。" },
                { name: "梦溪双创产业园", city: "芜湖经开", scale: "约1.2万㎡", story: "青年人才创新创业服务中心，以「双创」为核心定位，聚焦数字经济、文化创意、科技服务等新兴领域。园区内设共享工位区、独立办公室、产品展示厅和路演中心，已累计孵化项目150+，成为芜湖经开区青年创业的第一站。" },
                { name: "紫云英人才大厦", city: "芜湖弋江", scale: "约2.6万㎡", story: "中梦集团总部所在地，同时也是63家入园企业的共创平台。「紫云英」之名源自芜湖市人才计划，大厦以「一栋楼就是一个产业社区」为理念，打造垂直产业生态：底层商业配套、中层企业办公、高层公共服务，让不同规模的企业在同一栋楼里协作共生。" },
                { name: "786·欢乐青年街", city: "芜湖江北", scale: "约2.2万㎡", story: "青年商业活力街区，是新区配套快速赋能的典型案例。以餐饮、零售、文化体验为主力业态，填补了江北片区青年消费场景的空白，同时也为周边人才社区提供了「下楼即达」的生活配套，是产业服务链向消费端的自然延伸。" },
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-600 to-amber-800">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">产业发展 · 数据看板</h2>
            <p className="text-white/70 mb-12">孵化梦想，让创新落地生根</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "150+", label: "孵化项目" },
                { value: "2000+", label: "服务人次" },
                { value: "5000㎡", label: "商业配套" },
                { value: "63家", label: "紫云英入驻企业" },
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
