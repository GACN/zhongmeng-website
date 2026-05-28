import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "在营项目 - 中梦集团",
  description: "",
};

const PROJECTS = [
  { city: "芜湖高新区", name: "高新区人才社区", area: "1764套 · 约11.5万㎡", highlight: "央视专题报道 · 国家级领导考察 · 1000㎡众创大厅+5000㎡商业配套 · 紫云英人才计划核心地标 · 出租率95%+", desc: "中梦维家规模最大、影响力最强的标杆项目。配套众创空间、商业街区、人才服务中心，六十余家企业入驻，是政企合作模式的集大成之作。" },
  { city: "芜湖湾沚", name: "新芜We+人才社区", area: "1020+套 · 约15.3万㎡", highlight: "摇号选房人房比3:1 · 新华网报道 · 85%本科以上 · 津梧桐人才沙龙", desc: "服务航空航天产业人才的旗舰社区。因需求远超供给引发摇号选房，是中梦「人才+产业」融合模式的典型代表。" },
  { city: "芜湖弋江", name: "中梦集团大厦", area: "约2.6万㎡", highlight: "紫云英人才大厦 · 63家企业入驻 · 2月满租 · 中梦博物馆 · 集团总部", desc: "从不良资产改造为城市地标的经典案例。既是中梦总部，也是垂直产业社区——底层商业、中层办公、高层公共服务，一栋楼就是一个生态。" },
  { city: "芜湖南陵", name: "We+南陵人才之家", area: "168余套 · 约2.3万㎡", highlight: "蓝领标杆 · 中梦模式县域推广 · 50+企业人才入住", desc: "南陵县「人才之家」服务标杆。将中梦的标准化运营体系成功应用于县域场景，证明了模式的可复制性。" },
  { city: "芜湖江北", name: "大桥中梦维家青年社区", area: "1812套 · 约2.6万㎡", highlight: "4期开发 · 20年购买服务 · 江北人才公寓典范", desc: "中梦与芜湖长江大桥开发区合作的长期服务项目。1812套的规模在江北首屈一指，分期开发模式保障了持续的服务交付能力。" },
  { city: "芜湖江北", name: "天门方舟人才平台", area: "约35万㎡", highlight: "商住+商业+住宅复合盘活 · 一站式综合服务平台", desc: "中梦规模最大的单体盘活项目。将三种不同性质的资产统一规划、分期改造、分类运营，是资产盘活板块的集大成之作。" },
  { city: "马鞍山含山", name: "昭智人才社区", area: "1008套 · 约7.1万㎡", highlight: "三心并举 · 6大社区 · 含青汇1000㎡ · 才汇含山一卡通", desc: "县域人才安居的标杆方案。6个社区覆盖蓝领到专家三级产品体系，含青汇共享空间重新定义了县域人才社区的服务标准。" },
  { city: "马鞍山当涂", name: "当涂We+人才社区", area: "330套 · 约2.6万㎡", highlight: "跨城品牌输出首例 · 当涂经开区旗舰标杆", desc: "中梦品牌走出芜湖的第一站。在当涂经开区的成功运营，验证了中梦在工业园区的适配能力，为后续更多跨城合作打下了基础。" },
  { city: "马鞍山郑蒲港", name: "郑蒲港We+人才社区", area: "408套 · 约2.2万㎡", highlight: "梦家宾馆 · 产城融合 · 品牌首次走出芜湖", desc: "2018年落成，是中梦品牌历史上第一个离开芜湖市区的项目。配套梦家宾馆服务，是产城融合的早期探索。" },
  { city: "合肥新站", name: "合肥逐梦人才社区", area: "约12.5万㎡", highlight: "安徽产学研一体化社区标杆 · 省城布局", desc: "中梦在安徽省会的战略落子。聚焦产学研一体化，为新站高新区的高校和科研院所提供人才安居配套服务。" },
  { city: "嘉兴海宁", name: "城家青年社区", area: "1008套 · 约8.9万㎡", highlight: "跨省首子 · 长三角示范窗口 · 全数字智能化 · 5个项目点", desc: "中梦跨出安徽的标志性项目。从入住到退租全流程无人化，是中梦智慧化运营体系的集大成者，也是长三角战略的核心支点。" },
  { city: "芜湖经开", name: "梦溪双创产业园", area: "约1.2万㎡", highlight: "青年人才创新创业服务中心 · 150+项目孵化", desc: "聚焦数字经济与科技服务领域的双创载体。共享工位+独立办公室+路演中心，是芜湖经开区青年创业的第一站。" },
  { city: "芜湖镜湖", name: "华强人才公寓", area: "440套 · 约2.2万㎡", highlight: "2月满租 · 1.5月售罄 · 资产价值提升20%+ · 深圳华强合作", desc: "资产盘活效率的极致案例。滞销商住楼改造为人才公寓后快速去化，验证了中梦在商办资产领域的改造与运营能力。" },
  { city: "芜湖弋江", name: "中梦9398产业园", area: "约4.1万㎡", highlight: "不良资产改产业园典型案例 · 「久长久发」", desc: "闲置工业厂房改造为复合产业空间。「9398」谐音「久长久发」，是资产盘活与产业运营结合的代表作。" },
  { city: "芜湖经开", name: "紫云英人才驿站", area: "约8167㎡", highlight: "芜湖经开区青年接引服务示范窗口", desc: "面向初到经开区的青年人才提供短期住宿和就业对接的一站式服务窗口，是人才服务链的「第一站」。" },
  { city: "芜湖江北", name: "786·欢乐青年街", area: "约2.2万㎡", highlight: "青年商业活力街区 · 新区配套快速赋能", desc: "填补江北片区青年消费场景空白。以餐饮、零售、文化体验为主力业态，为周边人才社区提供「下楼即达」的生活配套。" },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">在营项目</h1><p className="mt-4 text-lg text-white/80">16个项目覆盖皖浙两省，构建城市人才生态</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "在营项目" }]} /></Container>
      <section className="py-16 md:py-24"><Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div key={i} className="group rounded-2xl bg-bg-sky p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-brand/5">
              <div className="flex items-center gap-2 text-xs font-medium text-brand/60 mb-3"><MapPin className="h-3.5 w-3.5" />{p.city}</div>
              <h3 className="text-lg font-bold text-brown mb-2 group-hover:text-brand transition-colors">{p.name}</h3>
              <p className="text-sm text-gold font-medium mb-3">{p.area}</p>
              <p className="text-sm text-brown-light leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.highlight.split(" · ").map((tag, j) => (
                  <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-brand/5 text-brand/70">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container></section>
    </>
  );
}
