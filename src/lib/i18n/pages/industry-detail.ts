import type { Locale } from '../locales';

export interface IndustryDetailCopy {
  productsEyebrow: string;
  productsHeading: string;
  servicesEyebrow: string;
  servicesHeading: string;
  projectsEyebrow: string;
  projectsHeading: string;
  projectsEmpty: string;
  articlesEyebrow: string;
  articlesHeading: string;
  solutionsEyebrow: string;
  solutionsHeading: string;
  solutionSmartMeterDesc: string;
  solutionAmrDesc: string;
  solutionBillingDesc: string;
  scenariosEyebrow: string;
  scenariosHeading: string;
  /** Solar-renewable only. `href` is locale-agnostic. */
  scenarios: { title: string; desc: string; href: string; linkText: string }[];
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
}

export const INDUSTRY_DETAIL_COPY: Record<Locale, IndustryDetailCopy> = {
  th: {
    productsEyebrow: 'ผลิตภัณฑ์ที่เกี่ยวข้อง',
    productsHeading: 'อุปกรณ์ที่ใช้ในอุตสาหกรรมนี้',
    servicesEyebrow: 'บริการของเรา',
    servicesHeading: 'บริการครบวงจรสำหรับทุกอุตสาหกรรม',
    projectsEyebrow: 'เรื่องราวลูกค้า',
    projectsHeading: 'ผลงานในอุตสาหกรรมนี้',
    projectsEmpty: '[pending] — ยังไม่มีเรื่องราวลูกค้าที่เผยแพร่แล้วสำหรับอุตสาหกรรมนี้',
    articlesEyebrow: 'บทความ',
    articlesHeading: 'ความรู้ที่เกี่ยวข้อง',
    solutionsEyebrow: 'โซลูชันที่เกี่ยวข้อง',
    solutionsHeading: 'จากความต้องการของโครงการ ไปยังโซลูชันที่ใช่',
    solutionSmartMeterDesc: 'ต้องการมิเตอร์ ตู้มิเตอร์ หรือระบบสื่อสารสำหรับจุดเชื่อมต่อ — จัดหา ออกแบบ ติดตั้ง และสอบเทียบ',
    solutionAmrDesc: 'ต้องการข้อมูลมิเตอร์และผลผลิตโดยไม่ต้องส่งคนไปจดหน้างาน — อ่านมิเตอร์อัตโนมัติและมอนิเตอร์แบบเรียลไทม์',
    solutionBillingDesc: 'ต้องออกบิลลูกค้า Private PPA — คำนวณตามสัญญาแต่ละรายและจัดทำใบแจ้งหนี้จากข้อมูลมิเตอร์',
    scenariosEyebrow: 'ตามลักษณะโครงการ',
    scenariosHeading: 'เริ่มจากโครงการแบบไหน',
    scenarios: [
      {
        title: 'โซลาร์รูฟท็อป',
        desc: 'จัดหา TOU Meter และออกแบบติดตั้ง Meter Box สำหรับจุดเชื่อมต่อของโครงการรูฟท็อป',
        href: '/solutions/smart-meter',
        linkText: 'ดูโซลูชัน Smart Meter →',
      },
      {
        title: 'โซลาร์ฟาร์มและโซลาร์ลอยน้ำ',
        desc: 'มิเตอร์และ Power Quality Analyzer สำหรับจุดเชื่อมต่อ พร้อมอ่านข้อมูลระยะไกลผ่านระบบ AMR',
        href: '/solutions/amr',
        linkText: 'ดูระบบ AMR →',
      },
      {
        title: 'พอร์ตหลายไซต์ที่ขายไฟแบบ Private PPA',
        desc: 'รวมข้อมูลมิเตอร์ทุกไซต์ แล้วออกบิลตามสัญญาของลูกค้าแต่ละราย',
        href: '/solutions/billing',
        linkText: 'ดูระบบ Billing →',
      },
    ],
    ctaHeading: 'พร้อมเป็นส่วนหนึ่งของโครงการคุณ',
    ctaBody: 'ส่งรายละเอียดโครงการของคุณ ทีมวิศวกรของเราจะประเมินขอบเขตงาน และเสนอราคาให้ภายใน 2 วันทำการ',
    ctaLabel: 'ติดต่อเรา →',
  },
  en: {
    productsEyebrow: 'Relevant Products',
    productsHeading: 'Equipment used in this industry',
    servicesEyebrow: 'Our Services',
    servicesHeading: 'End-to-end services for every industry',
    projectsEyebrow: 'Customer Stories',
    projectsHeading: 'Our work in this industry',
    projectsEmpty: '[pending] — no published customer stories for this industry yet',
    articlesEyebrow: 'Insights',
    articlesHeading: 'Related knowledge',
    solutionsEyebrow: 'Related Solutions',
    solutionsHeading: 'From Your Project’s Need to the Right Solution',
    solutionSmartMeterDesc: 'Need meters, meter boxes or communications at the connection point — supply, design, installation and calibration.',
    solutionAmrDesc: 'Need meter and production data without on-site visits — automatic meter reading and real-time monitoring.',
    solutionBillingDesc: "Need to bill Private PPA customers — per-contract calculation and invoices from meter data.",
    scenariosEyebrow: 'By Project Type',
    scenariosHeading: 'Where Does Your Project Start?',
    scenarios: [
      {
        title: 'Solar rooftop',
        desc: 'TOU meter supply plus meter box design and installation for the rooftop connection point.',
        href: '/solutions/smart-meter',
        linkText: 'See Smart Meter solutions →',
      },
      {
        title: 'Solar farm and floating solar',
        desc: 'Meters and power quality analyzers at the connection point, with remote reading through AMR.',
        href: '/solutions/amr',
        linkText: 'See the AMR system →',
      },
      {
        title: 'Multi-site Private PPA portfolio',
        desc: "Bring every site's meter data together, then bill each customer against their contract.",
        href: '/solutions/billing',
        linkText: 'See the Billing system →',
      },
    ],
    ctaHeading: 'Ready to be part of your project',
    ctaBody:
      'Send us your project details. Our engineering team will assess the scope of work and get back to you with a quote within 2 business days.',
    ctaLabel: 'Contact Us →',
  },
  zh: {
    productsEyebrow: '相关产品',
    productsHeading: '本行业所用设备',
    servicesEyebrow: '我们的服务',
    servicesHeading: '面向所有行业的一站式服务',
    projectsEyebrow: '客户故事',
    projectsHeading: '我们在该行业的项目实绩',
    projectsEmpty: '[待补充] — 该行业尚无已发布的客户故事',
    articlesEyebrow: '洞察',
    articlesHeading: '相关知识',
    solutionsEyebrow: '相关解决方案',
    solutionsHeading: '从项目需求到合适的方案',
    solutionSmartMeterDesc: '需要并网点的电表、计量箱或通信系统——供应、设计、安装与校准。',
    solutionAmrDesc: '需要无需现场抄表的电表与发电数据——自动抄表与实时监控。',
    solutionBillingDesc: '需要为 Private PPA 客户开票——按每份合同计算，并根据电表数据生成发票。',
    scenariosEyebrow: '按项目类型',
    scenariosHeading: '您的项目从哪里开始？',
    scenarios: [
      {
        title: '屋顶光伏',
        desc: '为屋顶项目并网点供应 TOU 电表，并设计安装计量箱。',
        href: '/solutions/smart-meter',
        linkText: '查看智能电表方案 →',
      },
      {
        title: '太阳能电站与漂浮式光伏',
        desc: '并网点电表与电能质量分析仪，并通过 AMR 远程读取数据。',
        href: '/solutions/amr',
        linkText: '查看 AMR 系统 →',
      },
      {
        title: '多站点 Private PPA 资产组合',
        desc: '汇集所有站点的电表数据，再按每位客户的合同开票。',
        href: '/solutions/billing',
        linkText: '查看计费系统 →',
      },
    ],
    ctaHeading: '期待成为您项目的一部分',
    ctaBody: '发送您的项目详情，我们的工程团队将评估工作范围，并在 2 个工作日内为您提供报价。',
    ctaLabel: '联系我们 →',
  },
};
