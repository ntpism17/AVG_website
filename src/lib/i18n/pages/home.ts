import type { Locale } from '../locales';

export interface HomeCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroImageAlt: string;
  /** Pre-built with inline `<span class="text-accent">` around the two emphasized words. */
  heroHeadingHtml: string;
  heroLede: string;
  heroCtaSmartMeter: string;
  heroCtaAmr: string;
  heroCtaBilling: string;
  routesEyebrow: string;
  routesHeading: string;
  /** One card per solution, in hero-CTA order: Smart Meter, AMR, Billing. */
  routes: { title: string; audience: string; cta: string }[];
  /**
   * Flagship product spotlight. Every string here is condensed from
   * `solutions-billing.ts` — do not claim a capability that page doesn't.
   */
  platformEyebrow: string;
  platformHeading: string;
  platformLede: string;
  platformBullets: string[];
  platformCtaDetail: string;
  platformCtaDemo: string;
  /** Quiet label over the customer logo wall, in the closing third of the page. */
  trustedByLabel: string;
  industriesEyebrow: string;
  industriesHeading: string;
  industriesViewAll: string;
  aboutEyebrow: string;
  aboutHeading: string;
  aboutLede: (name: string) => string;
  aboutReadMore: string;
  /** Label over the brand tiles beside the About copy. */
  brandsLabel: string;
  servicesEyebrow: string;
  servicesHeading: string;
  servicesLede: string;
  servicesViewAll: string;
  productsEyebrow: string;
  productsHeading: string;
  productsViewAll: string;
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  th: {
    metaTitle: 'ระบบ AMR และบิลลิ่งมิเตอร์อัจฉริยะ | Advanced Grid Co., Ltd.',
    metaDescription:
      'แพลตฟอร์ม AMR และระบบบิลลิ่งมิเตอร์อัจฉริยะ สำหรับผู้พัฒนาโซลาร์ IPP/SPP/VSPP และการไฟฟ้า — อ่านมิเตอร์อัตโนมัติ คำนวณค่าไฟตามเรท MEA/PEA/TOU และออกบิล PPA จากข้อมูลจริง พร้อมให้คำปรึกษา ออกแบบและติดตั้ง Energy Meter และ Power Quality Meter (PQM)',
    heroEyebrow: 'แพลตฟอร์ม AMR และระบบบิลลิ่งมิเตอร์อัจฉริยะ',
    heroImageAlt: 'ภาพทิวทัศน์พลังงานหมุนเวียน — โครงการพลังงานที่ Advanced Grid ให้บริการ',
    heroHeadingHtml:
      'ระบบ <span class="text-accent">อ่านมิเตอร์</span> และ <span class="text-accent">คิดเงิน</span> อัตโนมัติ จากข้อมูลมิเตอร์จริง',
    heroLede:
      'แพลตฟอร์มอ่านมิเตอร์อัตโนมัติ (AMR) และระบบบิลลิ่งมิเตอร์อัจฉริยะที่คำนวณค่าไฟตามเรท MEA/PEA/TOU และออกบิล PPA จากข้อมูลมิเตอร์จริง สำหรับ Solar Developer, IPP/SPP/VSPP และการไฟฟ้า — พร้อมให้คำปรึกษา ออกแบบและติดตั้ง Energy Meter, Power Quality Meter (PQM) และระบบสื่อสาร สำหรับโรงไฟฟ้า โซลาร์ รูฟท็อป และโซลาร์ฟาร์มลอยน้ำ',
    heroCtaSmartMeter: 'ดูโซลูชัน Smart Meter',
    heroCtaAmr: 'ดูระบบ AMR',
    heroCtaBilling: 'ดูระบบ Billing สำหรับ Private PPA',
    routesEyebrow: 'เลือกโซลูชันที่ตรงกับงานของคุณ',
    routesHeading: 'โซลูชันไหนเหมาะกับคุณ',
    routes: [
      {
        title: 'Smart Meter',
        audience: 'สำหรับโครงการที่ต้องการจัดหา ติดตั้ง หรือสอบเทียบมิเตอร์และระบบสื่อสาร',
        cta: 'ดูโซลูชัน Smart Meter →',
      },
      {
        title: 'AMR',
        audience: 'สำหรับทีมที่ต้องการอ่านและจัดการข้อมูลมิเตอร์หลายไซต์ โดยไม่ต้องส่งคนไปจดหน้างาน',
        cta: 'ดูระบบ AMR →',
      },
      {
        title: 'Billing',
        audience: 'สำหรับผู้ให้บริการ Private PPA ที่ต้องออกบิลจากข้อมูลมิเตอร์ตามสัญญาของลูกค้าแต่ละราย',
        cta: 'ดูระบบ Billing →',
      },
    ],
    platformEyebrow: 'ผลิตภัณฑ์ใหม่ · 2026',
    platformHeading: 'แพลตฟอร์มบริหารจัดการพลังงานและออกบิลสำหรับ Private PPA',
    platformLede:
      'ดึงข้อมูลจากมิเตอร์อัตโนมัติ คำนวณบิลตามสัญญา Private PPA ของลูกค้าแต่ละราย และให้ลูกค้าตรวจสอบการใช้ไฟฟ้าได้เองแบบ Real-time — ไม่ต้องอ่านมิเตอร์มือ ไม่ต้องคีย์บิลเอง',
    platformBullets: [
      'ดึงข้อมูลมิเตอร์อัตโนมัติทุก 15 นาที ไม่ต้องส่งคนไปอ่านมิเตอร์หน้างาน',
      'ออกใบแจ้งหนี้ตามอัตราในสัญญา — Fix Rate, TOU หรืออัตรา PPA เฉพาะราย',
      'เว็บพอร์ทัลให้ลูกค้าปลายทางตรวจสอบข้อมูลย้อนหลังได้เอง',
      'รองรับมิเตอร์ CEWE และ Secure เดิมที่ใช้อยู่ ไม่ต้องเปลี่ยนมิเตอร์',
    ],
    platformCtaDetail: 'ดูรายละเอียดระบบ',
    platformCtaDemo: 'ขอ Demo',
    trustedByLabel: 'ลูกค้าและองค์กรที่ไว้วางใจเรา',
    industriesEyebrow: 'อุตสาหกรรมที่เราให้บริการ',
    industriesHeading: 'โซลูชันที่ออกแบบมาสำหรับอุตสาหกรรมของคุณ',
    industriesViewAll: 'ดูอุตสาหกรรมทั้งหมด',
    aboutEyebrow: 'เกี่ยวกับเรา',
    aboutHeading: 'วิศวกรรมที่เชื่อถือได้ ตั้งแต่การออกแบบจนถึงการสื่อสาร',
    aboutLede: (name) =>
      `${name} ก่อตั้งขึ้นเพื่อตอบโจทย์อุตสาหกรรมพลังงานของประเทศไทย เราเป็นผู้แทนจำหน่ายอุปกรณ์มิเตอร์ไฟฟ้าและอุปกรณ์สื่อสารระดับโลก พร้อมให้บริการครบวงจร ตั้งแต่ที่ปรึกษา ออกแบบ จัดหา ติดตั้ง และซ่อมบำรุง`,
    aboutReadMore: 'อ่านเพิ่มเติมเกี่ยวกับเรา',
    brandsLabel: 'แบรนด์ระดับโลกที่เราเป็นตัวแทนจัดจำหน่าย',
    servicesEyebrow: 'บริการของเรา',
    servicesHeading: 'บริการครบวงจรสำหรับระบบมิเตอร์ไฟฟ้าและการสื่อสาร',
    servicesLede:
      'ตั้งแต่การให้คำปรึกษา ออกแบบทางวิศวกรรม จัดหาอุปกรณ์ ไปจนถึงการติดตั้ง ทดสอบ และซ่อมบำรุง — เรารับผิดชอบทุกขั้นตอนของโครงการ',
    servicesViewAll: 'ดูบริการทั้งหมด',
    productsEyebrow: 'ผลิตภัณฑ์',
    productsHeading: 'Energy Meter และอุปกรณ์สื่อสารระดับโลก',
    productsViewAll: 'ดูผลิตภัณฑ์ทั้งหมด',
    ctaHeading: 'พร้อมเป็นส่วนหนึ่งของโครงการคุณ',
    ctaBody:
      'ส่งรายละเอียดโครงการของคุณ ทีมวิศวกรของเราจะประเมินขอบเขตงาน และเสนอราคาให้ภายใน 2 วันทำการ',
    ctaLabel: 'ติดต่อเรา →',
  },
  en: {
    metaTitle: 'AMR Platform & Smart Meter Billing | Advanced Grid Co., Ltd.',
    metaDescription:
      'An AMR platform and smart-meter billing system for solar developers, IPP/SPP/VSPP operators and utilities — automatic meter reading, tariff-accurate billing on MEA/PEA/TOU rates, and PPA invoicing from real meter data. Plus consulting, design and installation of energy and power quality meters (PQM).',
    heroEyebrow: 'AMR Platform & Smart Meter Billing',
    heroImageAlt: 'Renewable energy landscape — the energy projects we serve',
    heroHeadingHtml:
      'Automatic <span class="text-accent">meter reading</span> and <span class="text-accent">billing</span> from real meter data',
    heroLede:
      'An AMR platform and smart-meter billing system that reads meters automatically, calculates charges on real MEA/PEA/TOU rates, and issues PPA invoices from actual meter data — for solar developers, IPP/SPP/VSPP operators and utilities. Plus consulting, design and installation of energy meters, power quality meters (PQM) and communication systems for power plant, solar, rooftop and floating solar farm projects.',
    heroCtaSmartMeter: 'See Smart Meter Solutions',
    heroCtaAmr: 'See the AMR System',
    heroCtaBilling: 'See Billing for Private PPA',
    routesEyebrow: 'Pick the Solution That Fits Your Work',
    routesHeading: 'Which Solution Is Right for You',
    routes: [
      {
        title: 'Smart Meter',
        audience: 'For projects that need meters and communication systems supplied, installed or calibrated.',
        cta: 'See Smart Meter solutions →',
      },
      {
        title: 'AMR',
        audience: 'For teams that want to read and manage meter data across many sites without on-site visits.',
        cta: 'See the AMR system →',
      },
      {
        title: 'Billing',
        audience: "For Private PPA operators who bill from meter data against each customer's contract.",
        cta: 'See the Billing system →',
      },
    ],
    platformEyebrow: 'New Product · 2026',
    platformHeading: 'Energy Management & Billing Platform for Private PPA',
    platformLede:
      "Automatically pulls data from your meters, calculates billing against each customer's Private PPA contract, and lets customers check their own electricity usage in real time — no manual meter reading, no manual billing.",
    platformBullets: [
      'Pulls meter data automatically every 15 minutes — nobody has to read meters on site',
      'Invoices on the contracted rate — fixed, TOU, or a per-contract PPA rate',
      'A web portal where end customers check their own history',
      'Works with the CEWE and Secure meters already installed — no need to replace them',
    ],
    platformCtaDetail: 'See how it works',
    platformCtaDemo: 'Request a demo',
    trustedByLabel: 'Customers and organisations that trust us',
    industriesEyebrow: 'Industries We Serve',
    industriesHeading: 'Solutions designed for your industry',
    industriesViewAll: 'View all industries',
    aboutEyebrow: 'About Us',
    aboutHeading: 'Reliable engineering, from design through to communication',
    aboutLede: (name) =>
      `${name} was founded to serve Thailand's energy industry. We are a distributor of world-class electricity metering and communication equipment, offering an end-to-end service — from consulting and design to sourcing, installation and maintenance.`,
    aboutReadMore: 'Read more about us',
    brandsLabel: 'World-class brands we distribute',
    servicesEyebrow: 'Our Services',
    servicesHeading: 'End-to-end services for metering and communication systems',
    servicesLede:
      'From consulting and engineering design to equipment sourcing, installation, testing, and maintenance — we take responsibility for every stage of your project.',
    servicesViewAll: 'View all services',
    productsEyebrow: 'Products',
    productsHeading: 'World-class energy meters and communication equipment',
    productsViewAll: 'View all products',
    ctaHeading: 'Ready to be part of your project',
    ctaBody:
      'Send us your project details. Our engineering team will assess the scope of work and get back to you with a quote within 2 business days.',
    ctaLabel: 'Contact Us →',
  },
  zh: {
    metaTitle: 'AMR 平台与智能电表计费系统 | Advanced Grid Co., Ltd.',
    metaDescription:
      '面向太阳能开发商、IPP/SPP/VSPP 运营商与电力公司的 AMR 平台与智能电表计费系统——自动抄表、按 MEA/PEA/TOU 电价计费、基于真实电表数据开具 PPA 账单，并提供电表与电能质量表（PQM）的咨询、设计与安装服务。',
    heroEyebrow: 'AMR 平台与智能电表计费系统',
    heroImageAlt: '可再生能源景观——我们服务的能源项目',
    heroHeadingHtml:
      '基于真实电表数据的自动<span class="text-accent">抄表</span>与<span class="text-accent">计费</span>系统',
    heroLede:
      '面向太阳能开发商、IPP/SPP/VSPP 运营商与电力公司的 AMR 平台与智能电表计费系统——自动抄表、按 MEA/PEA/TOU 电价计算电费，并基于真实电表数据开具 PPA 账单；同时为发电厂、太阳能、屋顶光伏及浮动太阳能电站项目提供电表、电能质量表（PQM）及通信系统的咨询、设计与安装服务。',
    heroCtaSmartMeter: '查看智能电表方案',
    heroCtaAmr: '查看 AMR 系统',
    heroCtaBilling: '查看 Private PPA 计费系统',
    routesEyebrow: '选择适合您工作的方案',
    routesHeading: '哪种方案适合您',
    routes: [
      {
        title: '智能电表',
        audience: '适用于需要供应、安装或校准电表及通信系统的项目',
        cta: '查看智能电表方案 →',
      },
      {
        title: 'AMR',
        audience: '适用于希望无需现场抄表即可读取并管理多站点电表数据的团队',
        cta: '查看 AMR 系统 →',
      },
      {
        title: '计费系统',
        audience: '适用于需要根据电表数据、按每位客户合同开票的 Private PPA 运营商',
        cta: '查看计费系统 →',
      },
    ],
    platformEyebrow: '新产品 · 2026',
    platformHeading: '面向 Private PPA 的能源管理与计费平台',
    platformLede:
      '自动从电表抓取数据，按每位客户的私人购电协议（Private PPA）计算账单，并让客户可自助实时查看用电情况——无需人工抄表，无需手动开票。',
    platformBullets: [
      '每 15 分钟自动采集一次电表数据，无需派人到现场抄表',
      '按合同约定电价开具账单——固定电价、TOU 或逐份 PPA 合同电价',
      '终端客户可通过网页门户自行查询历史用电数据',
      '兼容现场已安装的 CEWE 与 Secure 电表，无需更换',
    ],
    platformCtaDetail: '查看系统详情',
    platformCtaDemo: '申请演示',
    trustedByLabel: '信赖我们的客户与机构',
    industriesEyebrow: '服务行业',
    industriesHeading: '为您的行业量身定制的解决方案',
    industriesViewAll: '查看所有行业',
    aboutEyebrow: '关于我们',
    aboutHeading: '值得信赖的工程能力，从设计到通信一以贯之',
    aboutLede: (name) =>
      `${name} 因泰国能源产业的需求而创立，是世界级电力计量与通信设备的经销商，提供从咨询、设计、采购到安装与维护的一站式服务。`,
    aboutReadMore: '了解更多关于我们',
    brandsLabel: '我们代理的世界级品牌',
    servicesEyebrow: '我们的服务',
    servicesHeading: '电力计量与通信系统的一站式服务',
    servicesLede: '从咨询、工程设计、设备采购，到安装、测试与维护——我们对项目的每个环节负责。',
    servicesViewAll: '查看所有服务',
    productsEyebrow: '产品',
    productsHeading: '世界级电表与通信设备',
    productsViewAll: '查看所有产品',
    ctaHeading: '期待成为您项目的一部分',
    ctaBody: '发送您的项目详情，我们的工程团队将评估工作范围，并在 2 个工作日内为您提供报价。',
    ctaLabel: '联系我们 →',
  },
};
