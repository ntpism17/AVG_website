import type { Locale } from '../locales';

export interface BillingPillar {
  /** Anchor id — the /insights `private-ppa-billing` article links to `/solutions/billing#ppa-billing`
   * via the Section wrapping this grid, not to a per-pillar id. Keep pillar ids as-is (unused as
   * external anchors) so the structure matches the original page exactly. */
  id: string | undefined;
  title: string;
  sub: string;
  desc: string;
  items: string[];
}

export interface BillingPersona {
  title: string;
  desc: string;
  items: string[];
}

export interface BillingCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeading: string;
  /** Rendered with an inline link to /solutions/amr around the literal word "AMR". */
  heroLedeBeforeAmr: string;
  heroLedeAfterAmr: string;
  ctaDemo: string;
  ctaConsult: string;
  pillarsEyebrow: string;
  pillarsHeading: string;
  pillars: BillingPillar[];
  personasEyebrow: string;
  personasHeading: string;
  personas: BillingPersona[];
  crossLinkHeading: string;
  crossLinkLedeBeforeAmr: string;
  crossLinkLedeAfterAmr: string;
  quoteHeading: string;
  quoteLede: string;
  businessTypes: string[];
  portfolioSizes: string[];
}

export const BILLING_COPY: Record<Locale, BillingCopy> = {
  th: {
    metaTitle: 'ระบบคิดเงิน (Billing) — ออก PPA Billing และเก็บเงินอัตโนมัติจากข้อมูลโซลาร์จริง',
    metaDescription:
      'ซอฟต์แวร์บิลลิ่งพลังงาน (Energy Billing Software) สำหรับคำนวณค่าไฟตามเรท MEA/PEA/TOU และออก Private PPA Billing ตาม kWh จริง พร้อมใบแจ้งหนี้ PDF, PromptPay QR และรายงาน Investor ต่อยอดจากข้อมูลมิเตอร์ของระบบ AMR สำหรับ IPP และ Solar PPA Operator',
    eyebrow: 'ผลิตภัณฑ์ใหม่ · 2026',
    heroHeading: 'ระบบคิดเงิน (Billing) — คิดค่าไฟและออกบิลอัตโนมัติจากข้อมูลจริง',
    heroLedeBeforeAmr: 'แอปพลิเคชันเลเยอร์บนสุดที่รับข้อมูลมิเตอร์จากระบบ',
    heroLedeAfterAmr:
      'มาคำนวณค่าไฟตามเรทจริง ออก PPA Billing ตาม kWh จริง พร้อมส่งรายงานให้ Offtaker และ Investor — ออกแบบมาเฉพาะสำหรับ Solar Developer, EPC และ Solar PPA Operator ที่ต้องการสเกลโครงการหลายไซต์โดยไม่เพิ่มทีม Back-office',
    ctaDemo: 'ขอทดลองใช้งาน Demo →',
    ctaConsult: 'ปรึกษาผู้เชี่ยวชาญ',
    pillarsEyebrow: '2 ขาหลักของระบบ',
    pillarsHeading: 'ครบทั้งฝั่งคำนวณและฝั่งคิดเงิน',
    pillars: [
      {
        id: 'tou-billing',
        title: 'ฝั่งคำนวณ',
        sub: 'Smart Tariff Engine',
        desc: 'คำนวณค่าไฟตามเรท MEA/PEA จริง รวมถึง TOU และเฉลี่ยสัดส่วนไฟโซลาร์รายห้องอย่างเที่ยงธรรม — ต่อยอดจากข้อมูลมิเตอร์ที่ระบบ AMR ดึงเข้ามาอัตโนมัติ',
        items: [
          'คำนวณตามเรท MEA / PEA / TOU จริง อัปเดตอัตโนมัติ',
          'เฉลี่ยไฟโซลาร์รายห้องตามสัดส่วนการใช้งานจริง',
          'Audit trail ตรวจสอบย้อนหลังได้ทุกการคำนวณ',
        ],
      },
      {
        id: undefined,
        title: 'ฝั่งคิดเงิน',
        sub: 'Automated Billing & Collection',
        desc: 'ออกใบแจ้งหนี้และใบเสร็จ PDF อัตโนมัติ แนบ QR Code พร้อมจ่าย พร้อมระบบหลังบ้านสรุปรายได้และติดตามการค้างชำระ',
        items: [
          'สร้างบิล PDF ทั้งตึก ในคลิกเดียว',
          'แนบ PromptPay QR Code อัตโนมัติ จ่ายในแอปธนาคารได้ทันที',
          'ส่งบิลผ่าน LINE / SMS / Email',
          'Dashboard รายรับ รายจ่าย ค้างชำระ ครบในที่เดียว',
        ],
      },
    ],
    personasEyebrow: 'ออกแบบมาเพื่อใคร',
    personasHeading: 'บทบาทใน Solar Industry ที่ระบบคิดเงินตอบโจทย์ที่สุด',
    personas: [
      {
        title: 'IPP / Solar PPA Operator',
        desc: 'ผู้ลงทุนติดตั้งโซลาร์และขายไฟแบบ Private PPA / Direct PPA ที่ต้องออกบิลตามสัญญารายลูกค้า และรายงานผลให้ Offtaker, Investor, และ Lender',
        items: [
          'PPA Billing ตาม kWh จริง — รองรับ Tier rate, Escalator, Discount',
          'Investor / Lender Report สรุป Revenue, Yield, Availability รายเดือน',
          'พอร์ตหลายไซต์ — เปรียบเทียบ Performance ระหว่างไซต์ได้ทันที',
        ],
      },
    ],
    crossLinkHeading: 'ต่อยอดจากข้อมูลมิเตอร์ที่คุณมีอยู่แล้ว',
    crossLinkLedeBeforeAmr: 'ดึงข้อมูลอัตโนมัติจากระบบ',
    crossLinkLedeAfterAmr: 'ไม่ต้องกรอกตัวเลขมิเตอร์ซ้ำ — คำนวณและออกบิลจากข้อมูลจริงทุกรอบบิล',
    quoteHeading: 'ขอใบเสนอราคา + ทดลอง Demo',
    quoteLede: 'ตอบกลับภายใน 1 วันทำการ · ทดลองใช้งานฟรี 30 วัน ไม่ต้องใช้บัตรเครดิต',
    businessTypes: ['Solar Developer / EPC', 'IPP / Solar PPA Operator', 'Asset Manager / O&M', 'ผู้ลงทุน / Investor'],
    portfolioSizes: ['ต่ำกว่า 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', 'มากกว่า 50 MWp'],
  },
  en: {
    metaTitle: 'Billing System — Automated PPA Billing and Collection from Real Solar Data',
    metaDescription:
      'Energy billing software that calculates electricity charges on real MEA/PEA/TOU rates and issues Private PPA billing on actual kWh, with PDF invoices, PromptPay QR codes, and investor reports built on top of AMR meter data — for IPPs and solar PPA operators.',
    eyebrow: 'New Product · 2026',
    heroHeading: 'Billing System — automatic tariff calculation and invoicing from real data',
    heroLedeBeforeAmr: 'A top-layer application that takes meter data from the',
    heroLedeAfterAmr:
      'system, calculates electricity charges at real tariff rates, issues PPA billing on actual kWh, and sends reports to offtakers and investors — built specifically for solar developers, EPCs and solar PPA operators scaling a multi-site portfolio without growing their back-office team.',
    ctaDemo: 'Request a Demo →',
    ctaConsult: 'Talk to an Expert',
    pillarsEyebrow: 'Two Core Pillars',
    pillarsHeading: 'Complete tariff calculation and billing, end to end',
    pillars: [
      {
        id: 'tou-billing',
        title: 'Calculation',
        sub: 'Smart Tariff Engine',
        desc: 'Calculates electricity charges on real MEA/PEA rates including TOU, and fairly allocates solar generation per unit/room — built on meter data the AMR system pulls in automatically.',
        items: [
          'Calculates on real MEA / PEA / TOU rates, updated automatically',
          'Allocates solar generation per unit/room by actual usage share',
          'Full audit trail for every calculation',
        ],
      },
      {
        id: undefined,
        title: 'Billing',
        sub: 'Automated Billing & Collection',
        desc: 'Issues PDF invoices and receipts automatically with a ready-to-pay QR code attached, plus a back-office system to track revenue and outstanding payments.',
        items: [
          'Generate PDF bills for an entire building in one click',
          'Attach a PromptPay QR code automatically — payable instantly from any banking app',
          'Send bills via LINE / SMS / Email',
          'One dashboard for revenue, expenses, and outstanding balances',
        ],
      },
    ],
    personasEyebrow: 'Built For',
    personasHeading: 'The role in the solar industry this billing system fits best',
    personas: [
      {
        title: 'IPP / Solar PPA Operator',
        desc: 'Investors who install solar and sell power under Private PPA / Direct PPA agreements, who need to bill per customer contract and report to offtakers, investors, and lenders.',
        items: [
          'PPA billing on real kWh — supports tier rates, escalators, and discounts',
          'Monthly investor/lender reports summarizing revenue, yield, and availability',
          'Multi-site portfolios — compare performance across sites instantly',
        ],
      },
    ],
    crossLinkHeading: 'Built on the meter data you already have',
    crossLinkLedeBeforeAmr: 'Pulls data automatically from the',
    crossLinkLedeAfterAmr: 'system — no need to re-enter meter readings. Every billing cycle is calculated and issued from real data.',
    quoteHeading: 'Request a Quote + Try the Demo',
    quoteLede: 'We reply within 1 business day · 30-day free trial, no credit card required',
    businessTypes: ['Solar Developer / EPC', 'IPP / Solar PPA Operator', 'Asset Manager / O&M', 'Investor'],
    portfolioSizes: ['Under 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', 'Over 50 MWp'],
  },
  zh: {
    metaTitle: '计费系统 — 基于真实太阳能数据的自动化 PPA 计费与收款',
    metaDescription:
      '能源计费软件，按 MEA/PEA/TOU 真实电价计算电费，并根据实际用电量（kWh）开具私人购电协议（PPA）账单，附带 PDF 发票、PromptPay 二维码及基于 AMR 电表数据生成的投资人报告——专为 IPP 与太阳能 PPA 运营商打造。',
    eyebrow: '新产品 · 2026',
    heroHeading: '计费系统——根据真实数据自动计算电费并开具账单',
    heroLedeBeforeAmr: '这是一款位于最上层的应用程序，从',
    heroLedeAfterAmr:
      '系统获取电表数据，按真实电价计算电费，根据实际用电量（kWh）开具 PPA 账单，并向购电方与投资人发送报告——专为需要在不扩充后台团队的情况下扩展多站点项目的太阳能开发商、EPC 与太阳能 PPA 运营商而设计。',
    ctaDemo: '申请演示 →',
    ctaConsult: '咨询专家',
    pillarsEyebrow: '两大核心模块',
    pillarsHeading: '计算与计费全流程覆盖',
    pillars: [
      {
        id: 'tou-billing',
        title: '计算模块',
        sub: 'Smart Tariff Engine 智能电价引擎',
        desc: '按 MEA/PEA 真实电价（含 TOU）计算电费，并按实际用电比例公平分摊各房间的太阳能发电量——基于 AMR 系统自动抓取的电表数据。',
        items: [
          '按 MEA / PEA / TOU 真实电价计算，自动更新',
          '按实际使用比例分摊各房间太阳能发电量',
          '每笔计算均有完整审计追溯记录（Audit trail）',
        ],
      },
      {
        id: undefined,
        title: '计费模块',
        sub: 'Automated Billing & Collection 自动计费与收款',
        desc: '自动开具 PDF 发票与收据，附带可直接扫码支付的二维码，并配有后台系统汇总收入与追踪欠款情况。',
        items: [
          '一键生成整栋楼的 PDF 账单',
          '自动附加 PromptPay 二维码，可在银行 App 中即时付款',
          '通过 LINE / 短信 / 电子邮件发送账单',
          '收入、支出、欠款情况一目了然的仪表盘',
        ],
      },
    ],
    personasEyebrow: '适用对象',
    personasHeading: '最适合使用本计费系统的太阳能行业角色',
    personas: [
      {
        title: 'IPP / 太阳能 PPA 运营商',
        desc: '安装太阳能并以私人购电协议（Private PPA）/ 直接购电协议（Direct PPA）方式售电的投资方，需要按客户合同分别计费，并向购电方、投资人与放款机构报告。',
        items: [
          '按真实用电量（kWh）计费 PPA——支持阶梯电价、递增条款（Escalator）与折扣',
          '每月汇总收入、发电效率（Yield）、可用率（Availability）的投资人/放款机构报告',
          '多站点组合——可即时比较各站点绩效表现',
        ],
      },
    ],
    crossLinkHeading: '充分利用您已有的电表数据',
    crossLinkLedeBeforeAmr: '自动从',
    crossLinkLedeAfterAmr: '系统获取数据——无需重复录入电表读数，每个计费周期均基于真实数据计算并开具账单。',
    quoteHeading: '索取报价 + 申请演示',
    quoteLede: '1 个工作日内回复 · 30 天免费试用，无需信用卡',
    businessTypes: ['太阳能开发商 / EPC', 'IPP / 太阳能 PPA 运营商', '资产管理 / 运维（O&M）', '投资人'],
    portfolioSizes: ['低于 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', '高于 50 MWp'],
  },
};
