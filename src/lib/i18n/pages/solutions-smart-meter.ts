/**
 * Copy dictionary for /solutions/smart-meter — the Smart Meter / TOU Meter
 * supply-and-communication solution page.
 *
 * Thai is the authoritative language; English and Chinese are AI-generated
 * translations pending native-speaker review (see CLAUDE.md Todo).
 *
 * Content is built strictly from established company facts (see CLAUDE.md and
 * `src/lib/site.ts` / `src/lib/services.ts` / the products & brands
 * collections) — no invented products, specs, or claims.
 */

import type { Locale } from '../locales';

export interface SmartMeterPillar {
  /** Anchor id — reserved for cross-linking if a future page needs it. Keep identical across locales. */
  id?: string;
  title: string;
  sub: string;
  desc: string;
  items: string[];
}

export interface SmartMeterBrand {
  name: string;
  desc: string;
  models: string;
}

export interface SmartMeterCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeading: string;
  heroLede: string;
  heroCtaQuote: string;
  heroCtaConsult: string;
  pillarsEyebrow: string;
  pillarsHeading: string;
  pillars: SmartMeterPillar[];
  brandsEyebrow: string;
  brandsHeading: string;
  brandsLede: string;
  brands: SmartMeterBrand[];
  brandsCta: string;
  productsEyebrow: string;
  productsHeading: string;
  productsLede: string;
  crossLinkHeading: string;
  crossLinkLedePrefix: string;
  amrLinkText: string;
  crossLinkLedeMid: string;
  billingLinkText: string;
  crossLinkLedeSuffix: string;
  quoteHeading: string;
  quoteLede: string;
  businessTypes: string[];
  meterCountLabel: string;
  meterCounts: string[];
}

export const SMART_METER_COPY: Record<Locale, SmartMeterCopy> = {
  th: {
    metaTitle: 'สมาร์ทมิเตอร์และ TOU Meter — จัดหา ออกแบบ ติดตั้ง | Advanced Grid Co., Ltd.',
    metaDescription:
      'จัดหาสมาร์ทมิเตอร์และ TOU Meter จาก SECURE, EDMI, CEWE — Prometer 100, Premier 550, Saral, Mk6E, ProQ 100, Elite 500 พร้อมออกแบบติดตั้ง Meter Box, Communication Box และระบบสื่อสารมิเตอร์อัจฉริยะ สำหรับโรงไฟฟ้า, โซลาร์, รูฟท็อป และโซลาร์ฟาร์มลอยน้ำ',
    heroEyebrow: 'ธุรกิจหลักของเรา',
    heroHeading: 'สมาร์ทมิเตอร์และ TOU Meter ระดับสากล พร้อมระบบสื่อสารครบวงจร',
    heroLede:
      'จัดหาสมาร์ทมิเตอร์และ TOU Meter จากผู้ผลิตระดับโลก SECURE, EDMI และ CEWE พร้อมออกแบบ ติดตั้ง Meter Box, Communication Box และระบบสื่อสารสมาร์ทมิเตอร์ สำหรับโครงการโรงไฟฟ้า, โซลาร์, รูฟท็อป และโซลาร์ฟาร์มลอยน้ำ — ตั้งแต่จัดหา ติดตั้ง จนถึงทดสอบส่งมอบ ครบในที่เดียว',
    heroCtaQuote: 'ขอใบเสนอราคา →',
    heroCtaConsult: 'ปรึกษาผู้เชี่ยวชาญ',
    pillarsEyebrow: 'ครบวงจร',
    pillarsHeading: 'จัดหา ออกแบบ ติดตั้ง และสอบเทียบ ครบในที่เดียว',
    pillars: [
      {
        id: undefined,
        title: 'มิเตอร์อัจฉริยะและ TOU Meter',
        sub: 'Smart Meters & TOU Meters',
        desc: 'จัดหาสมาร์ทมิเตอร์และ TOU Meter ความแม่นยำสูงจากผู้ผลิตระดับโลก สำหรับจุดเชื่อมต่อโรงไฟฟ้า, โครงการโซลาร์ และงานเชิงพาณิชย์-อุตสาหกรรม',
        items: [
          'SECURE — Prometer 100, Premier 550, Saral',
          'EDMI — Mk6E รองรับ AMI/AMR',
          'CEWE — ProQ 100, Elite 500 (Power Quality Analyzer)',
          'รองรับมาตรฐาน IEC และบริการสอบเทียบ ISO/IEC 17025',
        ],
      },
      {
        id: undefined,
        title: 'ระบบสื่อสารสมาร์ทมิเตอร์',
        sub: 'Smart Meter Communication',
        desc: 'ออกแบบและจัดหาระบบสื่อสารสมาร์ทมิเตอร์ ตั้งแต่ RF, PLC ไปจนถึง Cellular รองรับการอ่านมิเตอร์ระยะไกลแบบ AMR/AMI',
        items: [
          'ออกแบบตามแผนผังการติดตั้งจริงของแต่ละโครงการ',
          'รองรับ RF / PLC / Cellular ต่อยอดเป็น AMR และ AMI ได้',
          'เลือกอุปกรณ์สื่อสารที่เข้ากับมิเตอร์และงบประมาณของโครงการ',
        ],
      },
      {
        id: undefined,
        title: 'Meter Box และ Communication Box',
        sub: 'Design & Installation',
        desc: 'ออกแบบและติดตั้ง Meter Box และ Communication Box ตามมาตรฐานการไฟฟ้า พร้อมเดินระบบ ทดสอบ และส่งมอบงานให้พร้อมใช้งานจริง',
        items: [
          'ออกแบบตู้มิเตอร์และตู้สื่อสารตามข้อกำหนดการไฟฟ้า',
          'ทีมวิศวกรและช่างเทคนิคติดตั้งตามมาตรฐาน',
          'ทดสอบระบบและส่งมอบพร้อมเอกสารครบชุด',
        ],
      },
    ],
    brandsEyebrow: 'แบรนด์ที่เราเป็นตัวแทน',
    brandsHeading: 'ผู้ผลิตมิเตอร์ระดับโลก 3 ราย ในที่เดียว',
    brandsLede: 'เราเป็นตัวแทนจัดหาและติดตั้งมิเตอร์จากผู้ผลิตที่ใช้งานจริงในโครงการไฟฟ้าทั่วโลก',
    brands: [
      {
        name: 'SECURE',
        desc: 'ผู้ผลิตสมาร์ทมิเตอร์และระบบบริหารจัดการพลังงานระดับโลกจากอังกฤษ/อินเดีย ใช้งานในกว่า 80 ประเทศ',
        models: 'Prometer 100 · Premier 550 · Saral',
      },
      {
        name: 'EDMI',
        desc: 'ผู้ผลิตสมาร์ทมิเตอร์สำหรับโครงการ AMI/AMR รุ่นเด่น Mk6E รองรับการสื่อสาร RF, PLC และ Cellular',
        models: 'Mk6E',
      },
      {
        name: 'CEWE',
        desc: 'ผู้ผลิตมิเตอร์และ Power Quality Analyzer จากสวีเดน ผ่านมาตรฐาน IEC 62053',
        models: 'ProQ 100 · Elite 500',
      },
    ],
    brandsCta: 'ดูผลิตภัณฑ์ทั้งหมด →',
    productsEyebrow: 'มิเตอร์ที่เราจัดหา',
    productsHeading: 'สมาร์ทมิเตอร์และ TOU Meter ที่พร้อมส่งมอบ',
    productsLede: 'รุ่นมิเตอร์จาก SECURE และ EDMI ที่ใช้งานจริงในโครงการโรงไฟฟ้า, โซลาร์, อาคาร และอุตสาหกรรม — เปิดหน้าแต่ละรุ่นเพื่อดูสเปกเต็มจาก datasheet',
    crossLinkHeading: 'ต่อยอดเป็นระบบอัตโนมัติ',
    crossLinkLedePrefix: 'มิเตอร์และระบบสื่อสารที่เราจัดหาให้ พร้อมเชื่อมต่อกับระบบ',
    amrLinkText: 'AMR',
    crossLinkLedeMid: ' (อ่านมิเตอร์อัตโนมัติ) และระบบ',
    billingLinkText: 'คิดเงิน (Billing)',
    crossLinkLedeSuffix: ' เพื่อมอนิเตอร์ คำนวณค่าไฟ และออกบิลอัตโนมัติจากข้อมูลมิเตอร์จริง',
    quoteHeading: 'ขอใบเสนอราคามิเตอร์และระบบสื่อสาร',
    quoteLede: 'ตอบกลับภายใน 1 วันทำการ — บอกรายละเอียดโครงการ เราจะแนะนำรุ่นมิเตอร์และอุปกรณ์สื่อสารที่เหมาะสม',
    businessTypes: ['โรงไฟฟ้า / Solar Farm', 'Solar Rooftop', 'อาคาร / คอนโดมิเนียม', 'โรงงานอุตสาหกรรม', 'การไฟฟ้า / Utility'],
    meterCountLabel: 'จำนวนจุดติดตั้ง (โดยประมาณ)',
    meterCounts: ['1 – 10 จุด', '10 – 50 จุด', '50 – 200 จุด', 'มากกว่า 200 จุด'],
  },
  en: {
    metaTitle: 'Smart Meters & TOU Meters — Supply, Design, Installation | Advanced Grid Co., Ltd.',
    metaDescription:
      'Smart meters and TOU meters from SECURE, EDMI, and CEWE — Prometer 100, Premier 550, Saral, Mk6E, ProQ 100, Elite 500 — with meter box, communication box, and smart meter communication system design and installation for power plant, solar, rooftop, and floating solar farm projects.',
    heroEyebrow: 'Our Core Business',
    heroHeading: 'World-class smart meters and TOU meters, with complete communication systems',
    heroLede:
      'Sourcing of smart meters and TOU meters from global manufacturers SECURE, EDMI, and CEWE, with design and installation of meter boxes, communication boxes, and smart meter communication systems for power plant, solar, rooftop, and floating solar farm projects — from supply through installation to commissioning, all in one place.',
    heroCtaQuote: 'Request a Quote →',
    heroCtaConsult: 'Talk to a Specialist',
    pillarsEyebrow: 'End to End',
    pillarsHeading: 'Supply, design, installation, and calibration — all in one place',
    pillars: [
      {
        id: undefined,
        title: 'Smart meters & TOU meters',
        sub: 'High-accuracy metering',
        desc: 'High-accuracy smart meters and TOU meters sourced from global manufacturers for power plant interconnection points, solar projects, and commercial–industrial applications.',
        items: [
          'SECURE — Prometer 100, Premier 550, Saral',
          'EDMI — Mk6E for AMI/AMR',
          'CEWE — ProQ 100, Elite 500 (power quality analyzers)',
          'IEC standards compliant, with ISO/IEC 17025 calibration service',
        ],
      },
      {
        id: undefined,
        title: 'Smart meter communication systems',
        sub: 'RF · PLC · Cellular',
        desc: 'Design and supply of smart meter communication systems from RF and PLC through to cellular, supporting remote meter reading over AMR/AMI.',
        items: [
          'Designed around each project’s actual site layout',
          'RF / PLC / Cellular, extendable to AMR and AMI',
          'Communication equipment matched to your meters and budget',
        ],
      },
      {
        id: undefined,
        title: 'Meter boxes & communication boxes',
        sub: 'Design & Installation',
        desc: 'Meter box and communication box design to utility standards, with cabling, testing, and handover ready for real-world operation.',
        items: [
          'Boxes designed to utility specifications',
          'Engineers and technicians install to standard',
          'System tested and handed over with full documentation',
        ],
      },
    ],
    brandsEyebrow: 'Brands We Represent',
    brandsHeading: 'Three world-class meter manufacturers, in one place',
    brandsLede: 'We source and install meters from manufacturers used across electricity projects worldwide.',
    brands: [
      {
        name: 'SECURE',
        desc: 'Global maker of smart meters and energy management systems from the UK/India, deployed in over 80 countries.',
        models: 'Prometer 100 · Premier 550 · Saral',
      },
      {
        name: 'EDMI',
        desc: 'Smart meter maker for AMI/AMR projects — flagship Mk6E supports RF, PLC, and cellular communication.',
        models: 'Mk6E',
      },
      {
        name: 'CEWE',
        desc: 'Swedish maker of meters and power quality analyzers, IEC 62053 certified.',
        models: 'ProQ 100 · Elite 500',
      },
    ],
    brandsCta: 'View all products →',
    productsEyebrow: 'The Meters We Supply',
    productsHeading: 'Smart meters and TOU meters, ready to supply',
    productsLede: 'Meters from SECURE and EDMI, proven in power plant, solar, building, and industrial projects — open each model for full datasheet specs.',
    crossLinkHeading: 'Extend into automation',
    crossLinkLedePrefix: 'The meters and communication systems we supply connect straight into the ',
    amrLinkText: 'AMR',
    crossLinkLedeMid: ' (automatic meter reading) and ',
    billingLinkText: 'Billing',
    crossLinkLedeSuffix: ' systems — to monitor, calculate charges, and issue invoices automatically from real meter data.',
    quoteHeading: 'Request a quote for meters & communication systems',
    quoteLede: 'Response within 1 business day — tell us about your project and we will recommend the right meters and communication equipment.',
    businessTypes: ['Power Plant / Solar Farm', 'Solar Rooftop', 'Building / Condominium', 'Industrial Plant', 'Utility'],
    meterCountLabel: 'Number of metering points (approx.)',
    meterCounts: ['1 – 10 points', '10 – 50 points', '50 – 200 points', 'Over 200 points'],
  },
  zh: {
    metaTitle: '智能电表与 TOU 电表——供应、设计、安装 | Advanced Grid Co., Ltd.',
    metaDescription:
      '供应 SECURE、EDMI、CEWE 品牌的智能电表与 TOU 电表——Prometer 100、Premier 550、Saral、Mk6E、ProQ 100、Elite 500，并提供计量箱、通信箱及智能电表通信系统的设计与安装，适用于发电厂、太阳能、屋顶光伏及漂浮式太阳能电站项目。',
    heroEyebrow: '我们的核心业务',
    heroHeading: '国际级智能电表与 TOU 电表，通信系统一站式配套',
    heroLede:
      '供应来自全球知名制造商 SECURE、EDMI 和 CEWE 的智能电表与 TOU 电表，并提供计量箱、通信箱及智能电表通信系统的设计安装服务，适用于发电厂、太阳能、屋顶光伏及漂浮式太阳能电站项目——从供应、安装到调试交付，一站式完成。',
    heroCtaQuote: '索取报价 →',
    heroCtaConsult: '咨询专家',
    pillarsEyebrow: '一站式服务',
    pillarsHeading: '供应、设计、安装与校准，一站式完成',
    pillars: [
      {
        id: undefined,
        title: '智能电表与 TOU 电表',
        sub: '高精度计量',
        desc: '供应来自全球制造商的高精度智能电表与 TOU 电表，适用于发电厂并网点、太阳能项目及工商业应用。',
        items: [
          'SECURE — Prometer 100、Premier 550、Saral',
          'EDMI — Mk6E（支持 AMI/AMR）',
          'CEWE — ProQ 100、Elite 500（电能质量分析仪）',
          '符合 IEC 标准，并提供 ISO/IEC 17025 校准服务',
        ],
      },
      {
        id: undefined,
        title: '智能电表通信系统',
        sub: 'RF · PLC · 蜂窝网络',
        desc: '设计并供应智能电表通信系统，从 RF、PLC 到蜂窝网络，支持 AMR/AMI 远程抄表。',
        items: [
          '根据每个项目的实际现场布局进行设计',
          '支持 RF / PLC / 蜂窝网络，可扩展为 AMR 和 AMI',
          '通信设备与您的电表及预算相匹配',
        ],
      },
      {
        id: undefined,
        title: '计量箱与通信箱',
        sub: '设计与安装',
        desc: '按电力公司标准设计计量箱与通信箱，并提供布线、测试及交付，确保可立即投入实际运行。',
        items: [
          '按电力公司规格设计计量箱与通信箱',
          '工程师与技术人员按标准施工安装',
          '系统测试后连同完整文件交付',
        ],
      },
    ],
    brandsEyebrow: '我们代理的品牌',
    brandsHeading: '三大国际电表制造商，一站购齐',
    brandsLede: '我们代理供应并安装在全球电力项目中广泛使用的制造商电表。',
    brands: [
      {
        name: 'SECURE',
        desc: '来自英国/印度的全球智能电表与能源管理系统制造商，产品部署于 80 多个国家。',
        models: 'Prometer 100 · Premier 550 · Saral',
      },
      {
        name: 'EDMI',
        desc: '面向 AMI/AMR 项目的智能电表制造商——旗舰型号 Mk6E 支持 RF、PLC 和蜂窝网络通信。',
        models: 'Mk6E',
      },
      {
        name: 'CEWE',
        desc: '来自瑞典的电表与电能质量分析仪制造商，通过 IEC 62053 认证。',
        models: 'ProQ 100 · Elite 500',
      },
    ],
    brandsCta: '查看所有产品 →',
    productsEyebrow: '我们供应的电表',
    productsHeading: '可立即供应的智能电表与 TOU 电表',
    productsLede: 'SECURE 与 EDMI 的电表，已应用于发电厂、太阳能、楼宇及工业项目——点击每个型号查看完整数据表规格。',
    crossLinkHeading: '扩展为自动化系统',
    crossLinkLedePrefix: '我们供应的电表与通信系统可直接对接',
    amrLinkText: 'AMR',
    crossLinkLedeMid: '（自动抄表）和',
    billingLinkText: '计费系统',
    crossLinkLedeSuffix: '，基于真实电表数据实现监控、电费计算与自动开票。',
    quoteHeading: '索取电表与通信系统报价',
    quoteLede: '1 个工作日内回复——告诉我们您的项目情况，我们将推荐合适的电表与通信设备。',
    businessTypes: ['发电厂 / 太阳能电站', '屋顶光伏', '楼宇 / 公寓', '工业厂房', '电力公司 / Utility'],
    meterCountLabel: '计量点数量（约）',
    meterCounts: ['1 – 10 个点', '10 – 50 个点', '50 – 200 个点', '200 个点以上'],
  },
};
