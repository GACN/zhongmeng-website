import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Cpu, ShieldCheck, Headphones, DoorOpen, Smartphone, BarChart3, Wifi, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "智慧系统 - 中梦集团",
  description: "",
};

export default function SmartPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark py-16 md:py-20">
        <Container><div className="text-center"><h1 className="text-4xl font-bold text-white md:text-5xl">智慧系统</h1><p className="mt-4 text-lg text-white/80">数字化运营 · 全链路管理</p></div></Container>
      </section>
      <Container><Breadcrumb items={[{ label: "首页", href: "/" }, { label: "智慧系统" }]} /></Container>

      {/* 核心介绍 */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-8">让居住更舒适，让运营更高效，让资产更增值</h2>
            <div className="space-y-4 text-lg leading-relaxed text-brown-light">
              <p>
                中梦的智慧化运营体系，是支撑30000+套房源、100000+服务人才规模高效运转的<strong className="text-brand">数字化底座</strong>。不同于传统物业管理的人工依赖，中梦从2018年起即开始布局智慧化，目前已形成覆盖「入住-运营-服务-安防」四大环节的全链路系统。
              </p>
              <p>
                这套系统的核心价值在于<strong>三方受益</strong>：对住户而言，从看房到退租全流程线上化，一部手机搞定所有事务；对运营方而言，实时掌握出租率、维修进度、服务满意度等核心指标，实现数据驱动的精细化管理；对资产方而言，智慧化运营显著降低人力成本、提升资产周转效率，是资产增值的关键杠杆。
              </p>
              <p>
                海宁城家青年社区是中梦智慧化体系的集大成之作——1008套公寓全部实现无接触入住、人脸识别通行、智能能耗管理和在线社群互动，成为长三角人才社区的数字化标杆。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 四大系统 */}
      <section className="py-16 md:py-24 bg-bg-sky">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">四大智慧系统</h2>
            <p className="text-brown-light mb-10">覆盖人才社区运营的每一个触点</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Smartphone, title: "智慧入住", desc: "在线看房、电子签约、人脸识别入住——从第一眼到第一晚，全程无需线下排队。系统支持身份证/护照等多证件自动识别，签约流程最快10分钟完成。已在全国16个项目全面部署。", features: ["在线VR看房", "电子合同签约", "人脸识别门禁", "无接触办理"] },
                { icon: BarChart3, title: "智慧运营", desc: "统一平台调度所有项目的房源、租约、财务和工单。管理者可实时查看出租率、逾期率、服务响应时间等关键指标。支持多项目、多城市、多品牌的分级权限管控。", features: ["房源实时管理", "租约智能归档", "工单自动派发", "财务报表一键生成"] },
                { icon: Headphones, title: "智慧服务", desc: "24小时AI智能客服 + 人工管家双通道。在线报修平均响应时间不超30分钟，紧急事务15分钟到场。社群互动模块支持活动发布、邻里拼单、二手交易等社区运营场景。", features: ["24h智能客服", "在线报修跟踪", "社群互动平台", "满意度即时评价"] },
                { icon: ShieldCheck, title: "智慧安防", desc: "AI视频监控覆盖公共区域，支持异常行为自动告警。智能消防系统实时监测烟雾/温度/燃气，与地方消防部门联动。访客管理系统实现「扫码登记-临时权限-超时提醒」全闭环。", features: ["AI行为分析", "消防智能预警", "访客扫码通行", "24h监控中心"] },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all border border-brand/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 mb-4">
                      <Icon className="h-6 w-6 text-brand" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-brown mb-2">{item.title}</h3>
                    <p className="text-sm text-brown-light leading-relaxed mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((f, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded-full bg-brand/5 text-brand">{f}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 技术能力 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brown mb-4">底层技术能力</h2>
            <p className="text-brown-light mb-10">自主研发 + 生态集成，构建可持续进化的数字基座</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Wifi, title: "IoT 物联平台", desc: "智能门锁、水电表、烟感器等设备统一接入物联网平台，实时数据采集与远程控制。支持主流通信协议（Zigbee/LoRa/NB-IoT），设备在线率99.5%+。" },
                { icon: Key, title: "权限管理中台", desc: "统一身份认证与分级授权系统。住户、管家、维修工、访客等不同角色拥有不同空间与时段权限，通过人脸/密码/二维码多方式验证。" },
                { icon: Cpu, title: "数据中台", desc: "汇聚运营数据、用户行为数据、设备数据，构建人才社区数据资产。支持经营分析、用户画像、异常预警等多维数据应用，驱动精细化运营决策。" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group rounded-2xl bg-bg-sky p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 mb-4 group-hover:bg-brand/20 transition-colors">
                      <Icon className="h-7 w-7 text-brand" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold text-brown mb-3">{item.title}</h3>
                    <p className="text-sm text-brown-light leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 标杆案例 */}
      <section className="py-16 md:py-24 bg-bg-sky">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brown mb-4">标杆案例</h2>
            </div>
            <div className="space-y-6">
              {[
                { icon: "🏅", title: "海宁城家：全数字智能化标杆", desc: "作为中梦跨省首子，海宁城家从规划之初即以全数字化为设计原则。5个项目点统一接入中台，1008套公寓实现从预约看房到退租结算的全流程无人化。智能能耗管理系统每年为项目节省能耗成本约15%。" },
                { icon: "🏅", title: "含山昭智：「才汇含山」一卡通", desc: "6大社区通过统一的身份认证系统实现「一卡通行」。住户持「才汇含山」卡可自由使用所有社区的共享空间（含青汇1000㎡），系统自动记录使用数据，为社区运营提供精准数据支撑。" },
                { icon: "🏅", title: "高新区：央视报道的智慧社区", desc: "芜湖高新区人才社区作为央视专题报道项目，智慧化系统是核心竞争力之一。AI安防全覆盖、智能门锁100%部署、在线服务响应率99%+，1764套公寓的管理效率较传统模式提升3倍以上。" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white p-6 md:p-8 border border-brand/5 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-bold text-brown text-lg">{item.title}</h3>
                  </div>
                  <p className="text-brown-light leading-relaxed">{item.desc}</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">智慧运营 · 数据看板</h2>
            <p className="text-white/70 mb-12">数字化驱动，让30000+套公寓高效运转</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "99.5%+", label: "设备在线率" },
                { value: "30min", label: "报修响应时间" },
                { value: "100%", label: "智能门锁覆盖" },
                { value: "15%", label: "能耗费节约" },
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
