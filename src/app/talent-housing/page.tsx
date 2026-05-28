import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Building2, Shield, Star, Home, Users, Wrench, MapPin } from "lucide-react";

export default async function TalentHousingPage() {
  
    return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">人才安居</h1><p className="mt-4 text-lg text-white/80">以中梦维家为核心，为城市留住青年人才</p></div></Container>
      </section>
      <Container><Breadcrumb  items={[{ label: "首页", href: "/" }, { label: "人才安居" }]} /></Container>

      {/* 核心介绍 */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-8">让人才，在城市生长</h2>
            <div className="space-y-4 text-lg leading-relaxed text-brown-light">
              <p>
                人才安居是中梦集团的基石业务，也是五大板块协同的核心基础。以「中梦维家」为主品牌，旗下涵盖 <strong>We+人才社区</strong>、<strong>城家青年社区</strong> 等多个产品线，专注为城市新市民、青年人才提供高品质租赁住房服务。
              </p>
              <p>
                从中梦维家第一个项目落地至今，集团已累计运营人才公寓及保障性租赁住房 <strong className="text-brand">30000+套</strong>，运营面积超100万平方米，出租率长期稳定在 <strong className="text-brand">95%以上</strong>。业务已从芜湖起步，拓展至马鞍山、合肥、嘉兴海宁，覆盖皖浙两省 <strong className="text-brand">8座城市16个项目</strong>，服务各类人才超10万人次。
              </p>
              <p>
                围绕「政府引导、市场化运作、社会化管理」的运营模式，中梦维家已形成从项目定位、空间改造、运营管理到社区服务的全链条能力，成为区域人才住房领域的标杆品牌。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 产品体系 */}
      <section className="py-16 md:py-24 bg-bg-sky">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">三级产品体系</h2>
            <p className="text-brown-light mb-10">从一线蓝领到行业专家，全系拎包入住，满足不同层次人才需求</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Home, title: "精品公寓", size: "35-55㎡", desc: "面向青年白领与企业骨干。精装修交付，标配家具家电、独立卫浴、高速网络，月租金远低于市场价格。以湾沚We+人才社区为代表，85%以上住户为本科学历。", color: "bg-blue-600" },
                { icon: Building2, title: "高管公寓", size: "70-90㎡", desc: "面向企业中高层管理与技术骨干。更大空间、更优配置，兼顾居住舒适度与私密性，满足携家属长期安居需求。", color: "bg-brand" },
                { icon: Star, title: "专家公寓", size: "100㎡+", desc: "面向高层次引进人才与行业专家。独立套房设计，高端配置，配套专属管家服务。含山振含智享城专家公寓为典型代表，169套全部定向服务高层次人才。", color: "bg-gold" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className={`${item.color} inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4`}>
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-brown">{item.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-brand/10 text-brand">{item.size}</span>
                    </div>
                    <p className="text-sm text-brown-light leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 案例精选 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">标杆案例</h2>
            <p className="text-brown-light mb-10">从央视报道到新华网关注，从摇号选房到跨省布局</p>
            <div className="space-y-6">
              {[
                { name: "高新区人才社区", city: "芜湖高新区", scale: "1764套 · 约11.5万㎡", story: "芜湖「紫云英人才计划」核心地标，央视专题报道，国家级领导考察。配套1000㎡众创大厅与5000㎡商业设施，入住企业超六十家，是中梦维家规模最大、影响力最强的标杆项目。" },
                { name: "新芜We+人才社区", city: "芜湖湾沚", scale: "1020+套 · 约15.3万㎡", story: "芜湖政企合作「人才+产业」模式的典型代表。因需求远超供给引发摇号选房，人房比达3:1，被新华网专题报道。主要服务航空航天产业人才，85%以上住户具有本科及以上学历。" },
                { name: "昭智人才社区", city: "马鞍山含山", scale: "1008套 · 约7.1万㎡", story: "含山县「三心并举」招才引智示范项目，覆盖6大子社区，从白领公寓到专家公寓全覆盖。配套1000㎡含青汇共享空间（共享厨房/健身/自习/多功能厅），实现「才汇含山」一卡通统一身份认证。" },
                { name: "城家青年社区", city: "嘉兴海宁", scale: "1008套 · 约8.9万㎡", story: "中梦跨省首子，长三角人才服务一体化的示范窗口。实现全数字智能化管理，5个项目点统一运营，标志着中梦维家品牌正式走出安徽、布局长三角。" },
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark to-brand">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">人才安居 · 数据看板</h2>
            <p className="text-white/70 mb-12">十八年深耕，用数字说话</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "30000+", label: "运营房源（套）" },
                { value: "100万+", label: "运营面积（㎡）" },
                { value: "95%+", label: "平均入住率" },
                { value: "100000+", label: "服务人才（人次）" },
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
