import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "发展历程 - 中梦集团",
  description: "",
};

const EVENTS = [
  {
    year: "2008",
    title: "校园创业 · 明明文化传媒",
    text: "两位在校大学生在芜湖创办「明明文化传媒」，拿下了中石油安徽独家广告代理，在校园里迈出了创业的第一步。今天回头看，文化传媒为后来的中梦注入了品牌基因。"
  },
  {
    year: "2012-2013",
    title: "中梦影业 · MMC连锁影院",
    text: "中梦影业成立，在全国17所高校运营MMC校园连锁影院，鼎盛时期覆盖多个省份。同年中梦科技在新四板挂牌，这是中梦第一次触碰资本市场的门槛。影院连锁的标准化运营经验，后来被复制到了人才公寓的全国扩张中。"
  },
  {
    year: "2015",
    title: "转折之年 · 迁入高新区",
    text: "中梦迁入芜湖高新技术产业开发区，集团雏形初现。这一年拿下第一个人才公寓项目——We+华强人才公寓，同时获评市级众创空间。从「做文化」到「做人才服务」，这是一次决定中梦未来十年方向的战略转向。"
  },
  {
    year: "2016-2017",
    title: "模式验证 · 明日校园",
    text: "筹划「明日校园」项目，覆盖全国70余所高校。We+城西花苑、南陵、新芜等多个人才公寓项目先后落地——中梦的人才公寓模式开始在芜湖各县区复制验证。"
  },
  {
    year: "2018",
    title: "首次出城 · 郑蒲港落子",
    text: "郑蒲港人才社区落成——这是中梦品牌第一次走出芜湖市区。虽然只是从芜湖到马鞍山的一步之遥，但证明了中梦的运营模式可以跨行政区域复制。"
  },
  {
    year: "2019",
    title: "跨越坎 · 10000套里程碑",
    text: "从2015年的第一套到2019年的第一万套，中梦用了四年。这个速度背后是运营体系、供应链和团队的全面成熟化。也是在这一年，「中梦维家」品牌开始在行业内形成认知。"
  },
  {
    year: "2020",
    title: "多点开花 · 布局汽车后市场",
    text: "探索布局汽车后市场业务线。同时含山昭智人才社区和湾沚We+人才社区先后落地——中梦模式开始从城市核心区向县域下沉，从单一安居向「安居+产业」融合进化。"
  },
  {
    year: "2021-2023",
    title: "极速扩张 · 资产盘活+抗疫奇迹",
    text: "这三年是中梦的「硬仗之年」。收购不良资产并改造为紫云英人才大厦（63家企业入驻），开创了资产盘活的新模式。疫情期间，13天建成1100套健康驿站，支部书记黄艺媛带领80余名党员志愿者日夜奋战——「中梦速度」从此烙印在品牌基因里。同期房源总量突破30000套。"
  },
  {
    year: "2024-2025",
    title: "跨省布局 · 长三角战略",
    text: "海宁城家青年社区投入运营，1008套全数字智能化人才公寓，5个项目点统一管理——这是中梦的跨省首子和长三角战略的关键一子。同年品牌开始筹划从「城市人才运营商」向「中国人才全周期服务引领者」的升级。"
  },
  {
    year: "2026",
    title: "品牌升级 · 全周期启航",
    text: "正式发布「中国人才全周期服务引领者」的品牌新定位，五大业务板块成型。以「明日股份」为载体布局适老化公寓与银发经济，从服务青年人才延伸至服务全年龄段城市奋斗者。品宣部组建，短视频矩阵启动，中梦从「做得好」走向「说得好」。"
  },
];

export default function HistoryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">发展历程</h1><p className="mt-4 text-lg text-white/80">2008 — 至今 · 18年深耕</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "发展历程" }]} /></Container>
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand/20 -translate-x-1/2" />
            {EVENTS.map((e, i) => (
              <div key={i} className={`relative flex items-start mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block flex-1" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand border-2 border-white -translate-x-1/2 mt-2 z-10" />
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 flex-1">
                  <span className="inline-block text-sm font-bold text-gold bg-gold/10 px-3 py-1 rounded-full mb-2">{e.year}</span>
                  <h3 className="font-bold text-brown text-base mb-1">{e.title}</h3>
                  <p className="text-sm text-brown-light leading-relaxed">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
