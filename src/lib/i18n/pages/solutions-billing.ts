import type { Locale } from '../locales';

export interface BillingPainRow {
  problem: string;
  impact: string;
}

export interface BillingFeature {
  /** Anchor id — the /insights `private-ppa-billing` article links to
   * `/solutions/billing#ppa-billing`. Only the PPA-invoicing feature carries it. */
  id?: string;
  title: string;
  desc: string;
}

export interface BillingWhyItem {
  title: string;
  desc: string;
}

export interface BillingStep {
  title: string;
  desc: string;
}

export interface BillingCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeading: string;
  heroSub: string;
  ctaDemo: string;
  ctaConsult: string;

  painsEyebrow: string;
  painsHeading: string;
  painsQuote: string;
  painsProblemLabel: string;
  painsImpactLabel: string;
  pains: BillingPainRow[];

  solutionEyebrow: string;
  solutionHeading: string;
  solutionBody: string;
  solutionNote: string;

  featuresEyebrow: string;
  featuresHeading: string;
  features: BillingFeature[];

  whyEyebrow: string;
  whyHeading: string;
  whyItems: BillingWhyItem[];

  stepsEyebrow: string;
  stepsHeading: string;
  steps: BillingStep[];

  customersHeading: string;

  finalCtaHeading: string;
  finalCtaLede: string;
  finalCtaDemo: string;
  finalCtaConsult: string;

  quoteHeading: string;
  quoteLede: string;
  businessTypes: string[];
  portfolioSizes: string[];
}

export const BILLING_COPY: Record<Locale, BillingCopy> = {
  th: {
    metaTitle: 'ระบบ AMR + Billing สำหรับ Private PPA — บริหารมิเตอร์และออกบิลอัตโนมัติ',
    metaDescription:
      'แพลตฟอร์ม AMR + Billing สำหรับ Solar Developer ที่ทำสัญญา Private PPA — อ่านมิเตอร์อัตโนมัติทุก 15 นาที คำนวณและออกใบแจ้งหนี้ตามอัตราสัญญา PPA ของลูกค้าแต่ละราย พร้อมเว็บพอร์ทัลให้ลูกค้าตรวจสอบข้อมูลย้อนหลังได้เอง รองรับมิเตอร์ CEWE และ Secure',
    eyebrow: 'ผลิตภัณฑ์ใหม่ · 2026',
    heroHeading: 'แพลตฟอร์มบริหารจัดการพลังงานและออกบิลสำหรับ Private PPA',
    heroSub:
      'ดึงข้อมูลจากมิเตอร์อัตโนมัติ คำนวณบิลตามสัญญา Private PPA ของลูกค้าแต่ละราย และให้ลูกค้าตรวจสอบการใช้ไฟฟ้าได้เองแบบ Real-time — ไม่ต้องอ่านมิเตอร์มือ ไม่ต้องคีย์บิลเอง',
    ctaDemo: 'ขอ Demo →',
    ctaConsult: 'ติดต่อฝ่ายขาย',

    painsEyebrow: 'ปัญหาที่พบบ่อย',
    painsHeading: 'ปัญหาที่ Solar Developer เจอทุกวัน',
    painsQuote: 'อ่านมิเตอร์มือ คำนวณบิลเอง ความเสี่ยงเยอะ ใช้เวลานาน',
    painsProblemLabel: 'ปัญหา',
    painsImpactLabel: 'ผลกระทบ',
    pains: [
      { problem: 'ดึงข้อมูลมิเตอร์ไม่อัตโนมัติ', impact: 'ต้องส่งคนไปอ่านมิเตอร์หน้างานทุกเดือน' },
      {
        problem: 'อัตราค่าไฟฟ้าแต่ละสัญญา PPA ไม่เหมือนกัน',
        impact: 'ต้องคำนวณบิลด้วยมือหรือ Excel เสี่ยงผิดพลาด',
      },
      {
        problem: 'ไม่มีระบบให้ลูกค้าตรวจสอบข้อมูลเอง',
        impact: 'ลูกค้าโทรถามข้อมูลย้อนหลังบ่อย เสียเวลาทีมงาน',
      },
      { problem: 'ขยายจำนวนไซต์ยาก', impact: 'ยิ่งมีโครงการเยอะ ยิ่งจัดการด้วยมือไม่ไหว' },
    ],

    solutionEyebrow: 'ภาพรวมโซลูชัน',
    solutionHeading: 'จากมิเตอร์ ถึงใบแจ้งหนี้ — อัตโนมัติทั้งกระบวนการ',
    solutionBody:
      'แพลตฟอร์มที่เชื่อมต่อกับมิเตอร์ไฟฟ้าโดยตรง ดึงข้อมูลทุก 15 นาที นำมาคำนวณตามอัตรา PPA ที่ตกลงไว้ในสัญญาของลูกค้าแต่ละราย ออกใบแจ้งหนี้อัตโนมัติ พร้อมเว็บพอร์ทัลให้ลูกค้าตรวจสอบข้อมูลย้อนหลังได้เองทุกที่ทุกเวลา',
    solutionNote:
      'รองรับมิเตอร์ CEWE และ Secure ทุกรุ่นที่ใช้งานในโครงการ Private PPA — ไม่ต้องเปลี่ยนมิเตอร์เดิม',

    featuresEyebrow: 'ความสามารถของระบบ',
    featuresHeading: 'Feature หลัก',
    features: [
      {
        title: 'ดึงข้อมูลมิเตอร์อัตโนมัติ',
        desc: 'เชื่อมต่อมิเตอร์ผ่าน VPN, Private APN SIM หรือ Fixed IP ตามหน้างานจริง ดึงค่าพลังงานไฟฟ้าทุก 15 นาที ไม่ต้องส่งคนไปอ่านมิเตอร์เอง แม้ระบบสื่อสารมีปัญหาชั่วคราว ก็ดึงข้อมูลย้อนหลังกลับมาได้อัตโนมัติ',
      },
      {
        id: 'ppa-billing',
        title: 'ออกใบแจ้งหนี้ตามสัญญา PPA',
        desc: 'คำนวณบิลตามอัตราที่ตกลงในแต่ละสัญญา — ไม่ว่าจะเป็นแบบ Fix Rate, TOU หรืออัตรา PPA เฉพาะราย ตั้งส่วนลดตามระยะเวลาสัญญาได้ ระบบปรับกลับอัตราปกติให้เองเมื่อครบกำหนด รูปแบบใบแจ้งหนี้ใกล้เคียงของการไฟฟ้า ลูกค้าคุ้นเคยทันที',
      },
      {
        title: 'ระบบตรวจสอบก่อนออกบิล',
        desc: 'Workflow อนุมัติ 3 ระดับ พร้อมลายเซ็นอิเล็กทรอนิกส์ ป้องกันบิลผิดพลาดหลุดออกไปถึงลูกค้า ทุกขั้นตอนมีประวัติตรวจสอบย้อนหลังได้',
      },
      {
        title: 'เว็บพอร์ทัลสำหรับลูกค้า',
        desc: 'ลูกค้าปลายทาง (Off-taker) เข้าดูข้อมูลการใช้ไฟฟ้าของตัวเองผ่านเบราว์เซอร์ทั่วไป ดูกราฟย้อนหลังได้ถึง 10 ปี ไม่ต้องติดตั้งโปรแกรมเพิ่ม ใช้ได้ทั้งมือถือและคอมพิวเตอร์',
      },
      {
        title: 'แจ้งเตือนความผิดปกติ',
        desc: 'รู้ทันทีเมื่อมิเตอร์อ่านค่าไม่ได้หรือมีความผิดปกติ ผ่าน Email และ SMS ช่วยแก้ปัญหาก่อนกระทบการเก็บเงิน',
      },
      {
        title: 'รายงานเชิงลึกสำหรับบริหารพอร์ตโฟลิโอ',
        desc: 'ดูภาพรวมทุกโครงการ ทุกสัญญา ในที่เดียว เปรียบเทียบข้อมูลรายเดือน Export เป็น PDF/Excel ได้ทุกรายงาน',
      },
    ],

    whyEyebrow: 'จุดเด่น',
    whyHeading: 'ทำไมต้องเลือกระบบนี้',
    whyItems: [
      {
        title: 'ออกแบบมาสำหรับ Private PPA โดยเฉพาะ',
        desc: 'ไม่ใช่ระบบทั่วไปที่ปรับมาใช้ รองรับความซับซ้อนของสัญญาที่ต่างกันในแต่ละราย',
      },
      {
        title: 'รองรับการขยายตัว',
        desc: 'จัดการได้ตั้งแต่ไม่กี่สิบมิเตอร์ ไปจนถึงหลักหมื่นมิเตอร์ โดยไม่กระทบประสิทธิภาพ',
      },
      {
        title: 'ลดภาระงานปฏิบัติการ',
        desc: 'ลดเวลาปิดรอบบิลจากหลักวันเหลือไม่กี่นาที ลดต้นทุนแรงงานอ่านมิเตอร์',
      },
      {
        title: 'โปร่งใสสำหรับทุกฝ่าย',
        desc: 'ทั้ง Solar Developer และลูกค้าปลายทางเห็นข้อมูลชุดเดียวกัน ลดข้อโต้แย้งเรื่องบิล',
      },
    ],

    stepsEyebrow: 'เริ่มต้นใช้งาน',
    stepsHeading: 'ใช้งานง่ายใน 3 ขั้นตอน',
    steps: [
      {
        title: 'เชื่อมต่อมิเตอร์',
        desc: 'ติดตั้งและลงทะเบียนมิเตอร์เข้าระบบ เลือกช่องทางสื่อสารตามหน้างาน',
      },
      {
        title: 'ตั้งค่าสัญญา PPA',
        desc: 'กำหนดอัตราค่าไฟฟ้า ส่วนลด และระยะเวลาสัญญาของลูกค้าแต่ละราย',
      },
      {
        title: 'ระบบทำงานอัตโนมัติ',
        desc: 'ดึงข้อมูล คำนวณบิล ส่งแจ้งเตือน ให้ลูกค้าตรวจสอบได้เอง — ทุกเดือนโดยไม่ต้องทำซ้ำ',
      },
    ],

    customersHeading: 'ลูกค้าที่ใช้งานระบบคิดเงิน (Billing) ของเราแล้ว',

    finalCtaHeading: 'พร้อมลดภาระงานอ่านมิเตอร์และคิดบิลด้วยมือหรือยัง?',
    finalCtaLede: 'ให้ทีมงานดูแลลูกค้าและขยายโครงการ แทนที่จะเสียเวลากับงานที่ระบบทำแทนได้',
    finalCtaDemo: 'นัดหมาย Demo',
    finalCtaConsult: 'คุยกับทีมงาน',

    quoteHeading: 'ขอใบเสนอราคา + ทดลอง Demo',
    quoteLede: 'ตอบกลับภายใน 1 วันทำการ · ทดลองใช้งานฟรี 30 วัน ไม่ต้องใช้บัตรเครดิต',
    businessTypes: [
      'Solar Developer / EPC',
      'IPP / Solar PPA Operator',
      'Asset Manager / O&M',
      'ผู้ลงทุน / Investor',
    ],
    portfolioSizes: ['ต่ำกว่า 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', 'มากกว่า 50 MWp'],
  },
  en: {
    metaTitle: 'AMR + Billing System for Private PPA — Manage Meters and Automate Billing',
    metaDescription:
      'An AMR + Billing platform for solar developers running Private PPA contracts — automatic meter reads every 15 minutes, per-contract PPA billing and invoicing, and a customer web portal for self-serve usage history. Supports CEWE and Secure meters.',
    eyebrow: 'New Product · 2026',
    heroHeading: 'Energy Management & Billing Platform for Private PPA',
    heroSub:
      "Automatically pulls data from your meters, calculates billing against each customer's Private PPA contract, and lets customers check their own electricity usage in real time — no manual meter reading, no manual billing.",
    ctaDemo: 'Request a Demo →',
    ctaConsult: 'Talk to Sales',

    painsEyebrow: 'Common Pain Points',
    painsHeading: 'The Problems Solar Developers Face Every Day',
    painsQuote: 'Manual meter reading, manual billing calculations — high risk, high time cost.',
    painsProblemLabel: 'Problem',
    painsImpactLabel: 'Impact',
    pains: [
      {
        problem: "Meter data isn't pulled automatically",
        impact: 'Someone has to be sent on-site to read meters every month',
      },
      {
        problem: "Each PPA contract's electricity rate is different",
        impact: 'Bills have to be calculated by hand or in Excel, risking errors',
      },
      {
        problem: 'No system for customers to check their own data',
        impact: 'Customers call frequently asking for historical data, wasting staff time',
      },
      {
        problem: 'Scaling to more sites is hard',
        impact: 'The more projects you have, the less manageable manual processes become',
      },
    ],

    solutionEyebrow: 'Solution Overview',
    solutionHeading: 'From Meter to Invoice — the Entire Process, Automated',
    solutionBody:
      "A platform that connects directly to your electricity meters, pulling data every 15 minutes and calculating bills against each customer's agreed PPA rate. Invoices are issued automatically, with a web portal so customers can check their own historical data anytime, anywhere.",
    solutionNote:
      'Supports every CEWE and Secure meter model used in Private PPA projects — no need to replace existing meters.',

    featuresEyebrow: 'Core Capabilities',
    featuresHeading: 'Key Features',
    features: [
      {
        title: 'Automatic Meter Data Collection',
        desc: "Connects to meters via VPN, private APN SIM, or fixed IP depending on the site, pulling energy data every 15 minutes with no manual reads. If the communication link drops temporarily, the system automatically backfills the missing data once it's back.",
      },
      {
        id: 'ppa-billing',
        title: 'PPA Contract Billing',
        desc: "Calculates bills against the rate agreed in each contract — Fix Rate, TOU, or a customer-specific PPA rate. Set contract-term discounts and the system reverts to the standard rate automatically once the term ends. The invoice format closely matches the utility's own, so customers recognize it immediately.",
      },
      {
        title: 'Pre-Billing Review',
        desc: 'A 3-level approval workflow with e-signatures prevents an incorrect bill from ever reaching a customer. Every step keeps a reviewable history.',
      },
      {
        title: 'Customer Web Portal',
        desc: 'Offtakers view their own usage data through any standard browser — up to 10 years of history, no software install required, works on mobile and desktop alike.',
      },
      {
        title: 'Anomaly Alerts',
        desc: 'Know immediately when a meter fails to report or something looks off, via email and SMS — fix the issue before it affects collections.',
      },
      {
        title: 'Portfolio-Level Reporting',
        desc: 'See every project and every contract in one place, compare month over month, and export any report to PDF or Excel.',
      },
    ],

    whyEyebrow: 'Why Choose Us',
    whyHeading: 'Why Choose This System',
    whyItems: [
      {
        title: 'Built specifically for Private PPA',
        desc: 'Not a generic system repurposed for solar — it handles the real complexity of contracts that differ from customer to customer.',
      },
      {
        title: 'Scales with you',
        desc: 'Manage anywhere from a few dozen meters to tens of thousands without a drop in performance.',
      },
      {
        title: 'Cuts operational workload',
        desc: 'Shrinks billing-cycle close time from days to minutes and cuts the labor cost of manual meter reading.',
      },
      {
        title: 'Transparent for everyone',
        desc: 'Solar developers and offtakers see the exact same data, reducing billing disputes.',
      },
    ],

    stepsEyebrow: 'Getting Started',
    stepsHeading: 'Live in 3 Simple Steps',
    steps: [
      {
        title: 'Connect the meters',
        desc: 'Install and register meters into the system, choosing the communication channel that fits each site.',
      },
      {
        title: 'Set up the PPA contract',
        desc: "Configure each customer's electricity rate, discounts, and contract term.",
      },
      {
        title: 'The system runs automatically',
        desc: 'Pulling data, calculating bills, sending alerts, and letting customers self-serve — every month, with nothing to repeat.',
      },
    ],

    customersHeading: 'Customers Already Using Our Billing System',

    finalCtaHeading: 'Ready to Cut Manual Meter Reading and Billing?',
    finalCtaLede:
      'Let your team focus on customers and growth — not work the system can already do for you.',
    finalCtaDemo: 'Book a Demo',
    finalCtaConsult: 'Talk to Our Team',

    quoteHeading: 'Request a Quote + Try the Demo',
    quoteLede: 'We reply within 1 business day · 30-day free trial, no credit card required',
    businessTypes: [
      'Solar Developer / EPC',
      'IPP / Solar PPA Operator',
      'Asset Manager / O&M',
      'Investor',
    ],
    portfolioSizes: ['Under 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', 'Over 50 MWp'],
  },
  zh: {
    metaTitle: 'Private PPA 专用 AMR + 计费系统 — 管理电表并自动开票',
    metaDescription:
      '面向签订 Private PPA 合同的太阳能开发商打造的 AMR + 计费平台——每 15 分钟自动抄表，按合同电价计算并开具 PPA 账单，并提供客户自助查询用电历史的网页门户。支持 CEWE 与 Secure 电表。',
    eyebrow: '新产品 · 2026',
    heroHeading: '面向 Private PPA 的能源管理与计费平台',
    heroSub:
      '自动从电表抓取数据，按每位客户的私人购电协议（Private PPA）计算账单，并让客户可自助实时查看用电情况——无需人工抄表，无需手动开票。',
    ctaDemo: '申请演示 →',
    ctaConsult: '联系销售',

    painsEyebrow: '常见问题',
    painsHeading: '太阳能开发商每天都会遇到的问题',
    painsQuote: '人工抄表、手动算账单——风险高、耗时长。',
    painsProblemLabel: '问题',
    painsImpactLabel: '影响',
    pains: [
      { problem: '电表数据无法自动获取', impact: '每月都要派人到现场抄表' },
      { problem: '每份 PPA 合同的电价都不一样', impact: '只能靠人工或 Excel 计算账单，出错风险高' },
      { problem: '没有系统让客户自行查询数据', impact: '客户经常来电询问历史数据，浪费团队时间' },
      { problem: '站点数量增加后难以扩展', impact: '项目越多，人工管理越吃不消' },
    ],

    solutionEyebrow: '解决方案概览',
    solutionHeading: '从电表到发票——全流程自动化',
    solutionBody:
      '直接对接电表的平台，每 15 分钟抓取一次数据，按每位客户 PPA 合同约定的电价计算，自动开具发票，并配有网页门户，让客户随时随地自助查询历史数据。',
    solutionNote: '支持 Private PPA 项目中使用的所有 CEWE 与 Secure 电表型号——无需更换现有电表。',

    featuresEyebrow: '核心能力',
    featuresHeading: '主要功能',
    features: [
      {
        title: '电表数据自动采集',
        desc: '根据现场情况通过 VPN、专用 APN SIM 卡或固定 IP 连接电表，每 15 分钟抓取一次用电数据，无需人工抄表。即使通信暂时中断，系统也能在恢复后自动回填缺失的数据。',
      },
      {
        id: 'ppa-billing',
        title: 'PPA 合同账单',
        desc: '按每份合同约定的电价计算账单——无论是固定价（Fix Rate）、TOU 还是客户专属 PPA 电价。可设置按合同期限递减的折扣，到期后系统自动恢复标准电价。发票格式与电力公司账单接近，客户一看就懂。',
      },
      {
        title: '出账前审核',
        desc: '三级审批流程配合电子签名，防止错误账单流向客户。每个环节均可追溯审核记录。',
      },
      {
        title: '客户网页门户',
        desc: '购电方（Off-taker）可通过常规浏览器查看自己的用电数据，最长可查询 10 年历史，无需安装任何程序，手机、电脑均可使用。',
      },
      {
        title: '异常告警',
        desc: '电表无法读数或出现异常时，第一时间通过邮件与短信通知，在影响收款前及时处理问题。',
      },
      {
        title: '组合层面深度报告',
        desc: '在同一处查看所有项目、所有合同的整体情况，逐月比较数据，任何报告均可导出为 PDF 或 Excel。',
      },
    ],

    whyEyebrow: '核心优势',
    whyHeading: '为什么选择这套系统',
    whyItems: [
      {
        title: '专为 Private PPA 而设计',
        desc: '并非通用系统的临时改造，能够处理每位客户合同条款各不相同的实际复杂度',
      },
      { title: '轻松扩展', desc: '从几十块电表到数万块电表都能管理，性能不受影响' },
      { title: '降低运营负担', desc: '把结算周期从数天缩短到几分钟，减少人工抄表的人力成本' },
      { title: '对各方都透明', desc: '太阳能开发商与购电方看到的是同一套数据，减少账单争议' },
    ],

    stepsEyebrow: '快速上线',
    stepsHeading: '三步轻松上线',
    steps: [
      { title: '连接电表', desc: '安装并将电表注册入系统，根据现场情况选择通信方式' },
      { title: '设置 PPA 合同', desc: '为每位客户设定电价、折扣与合同期限' },
      {
        title: '系统自动运行',
        desc: '抓取数据、计算账单、发送提醒，并让客户自助查询——每月自动完成，无需重复操作',
      },
    ],

    customersHeading: '已在使用我们计费系统的客户',

    finalCtaHeading: '准备好减少人工抄表与手动算账的负担了吗？',
    finalCtaLede: '让团队专注于服务客户与扩展项目，而不是花时间做系统能自动完成的工作。',
    finalCtaDemo: '预约演示',
    finalCtaConsult: '联系我们的团队',

    quoteHeading: '索取报价 + 申请演示',
    quoteLede: '1 个工作日内回复 · 30 天免费试用，无需信用卡',
    businessTypes: [
      '太阳能开发商 / EPC',
      'IPP / 太阳能 PPA 运营商',
      '资产管理 / 运维（O&M）',
      '投资人',
    ],
    portfolioSizes: ['低于 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', '高于 50 MWp'],
  },
};
