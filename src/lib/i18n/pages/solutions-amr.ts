import type { Locale } from '../locales';

export interface AmrPillar {
  /** Anchor id — cross-linked from /insights articles' `relatedAnchor`. Keep identical across locales. */
  id?: string;
  title: string;
  sub: string;
  desc: string;
  items: string[];
}

export interface AmrPersona {
  title: string;
  desc: string;
  items: string[];
}

export interface AmrCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeading: string;
  heroLedePrefix: string;
  billingLinkText: string;
  heroLedeSuffix: string;
  heroCtaDemo: string;
  heroCtaConsult: string;
  pillarsEyebrow: string;
  pillarsHeading: string;
  pillars: AmrPillar[];
  personasEyebrow: string;
  personasHeading: string;
  personas: AmrPersona[];
  integrationsHeading: string;
  integrationsLedePrefix: string;
  integrationsLedeMid: string;
  integrationsLedeSuffix: string;
  customersHeading: string;
  quoteHeading: string;
  quoteLede: string;
  businessTypes: string[];
  portfolioSizes: string[];
}

export const AMR_COPY: Record<Locale, AmrCopy> = {
  th: {
    metaTitle: 'AMR — ระบบอ่านมิเตอร์อัตโนมัติและมอนิเตอร์โซลาร์แบบเรียลไทม์',
    metaDescription:
      'AMR: ระบบมอนิเตอร์ผลผลิตโซลาร์และอ่านมิเตอร์ไฟฟ้าอัตโนมัติ (Automatic Meter Reading) รองรับ Mk6E, Premier 550, Elite 500 เชื่อมต่อ Huawei FusionSolar, SMA, Sungrow, SolarEdge พร้อมส่งข้อมูลต่อให้ระบบคิดเงิน (Billing) สำหรับ Solar Developer, EPC และทีม O&M และ MDM (ระบบจัดการข้อมูลมิเตอร์)',
    heroEyebrow: 'ผลิตภัณฑ์ใหม่ · 2026',
    heroHeading: 'AMR — มอนิเตอร์ผลผลิตโซลาร์ พร้อมอ่านมิเตอร์อัตโนมัติ',
    heroLedePrefix:
      'มอนิเตอร์ผลผลิตของทุกไซต์แบบเรียลไทม์ และอ่านมิเตอร์ไฟฟ้าอัตโนมัติผ่าน AMR โดยไม่ต้องส่งคนไปจดหน้างาน — เป็นชั้นข้อมูลตั้งต้นที่แม่นยำ พร้อมส่งต่อให้ระบบ',
    billingLinkText: 'คิดเงิน (Billing)',
    heroLedeSuffix: ' หรือ SCADA ของลูกค้าใช้งานต่อได้ทันที',
    heroCtaDemo: 'ขอทดลองใช้งาน Demo →',
    heroCtaConsult: 'ปรึกษาผู้เชี่ยวชาญ',
    pillarsEyebrow: '3 ขาหลักของระบบ',
    pillarsHeading: 'ครบทั้งฝั่งผลิต ฝั่งเก็บข้อมูล และฝั่งจัดการข้อมูล (MDM)',
    pillars: [
      {
        id: undefined,
        title: 'ฝั่งผลิต',
        sub: 'Real-time Solar Monitoring',
        desc: 'มอนิเตอร์ประสิทธิภาพระบบโซลาร์แบบเรียลไทม์ พร้อมแจ้งเตือนเมื่อมีปัญหา และรายงานลดคาร์บอนสำหรับงาน ESG',
        items: [
          'รายงาน kWh / kWp / Performance Ratio รายอินเวอร์เตอร์',
          'แจ้งเตือน LINE / Email เมื่อระบบมีปัญหา',
          'รายงานการลดคาร์บอน (CO₂ saved) สำหรับ ESG',
          'ดูย้อนหลังได้ตั้งแต่นาทีจนถึงปี',
        ],
      },
      {
        id: 'amr-integration',
        title: 'ฝั่งเก็บข้อมูล',
        sub: 'Automatic Meter Reading (AMR)',
        desc: 'อ่านมิเตอร์ไร้สายอัตโนมัติ ดึงข้อมูลการใช้ไฟและผลผลิตโซลาร์เข้าสู่ระบบแบบไม่ต้องจดมิเตอร์ด้วยมือ เป็นชั้นข้อมูลตั้งต้นให้ระบบคิดเงินและรายงานอื่น ๆ ต่อยอดได้',
        items: [
          'อ่านมิเตอร์อัตโนมัติผ่าน AMR — รองรับ Mk6E, Premier 550, Elite 500',
          'ดึงข้อมูลตามรอบเวลาที่ตั้งไว้ ไม่ต้องส่งคนไปจดหน้างาน',
          'ข้อมูลพร้อมส่งต่อให้ระบบคิดเงิน (Billing) หรือ SCADA ของลูกค้าแบบ real-time',
        ],
      },
      {
        id: 'meter-data-management',
        title: 'ฝั่งจัดการข้อมูล',
        sub: 'Meter Data Management (MDM)',
        desc: 'รวบรวมและกระทบยอดข้อมูลจาก AMR ของทุกมิเตอร์เข้าไว้ที่เดียว ตรวจสอบความผิดปกติของข้อมูลก่อนส่งต่อ เป็นชั้นข้อมูลที่ระบบคิดเงินและรายงานทางการเงินต้องอ้างอิงได้อย่างน่าเชื่อถือ',
        items: [
          'กระทบยอด (reconcile) ข้อมูล Revenue Meter กับข้อมูลจาก AMR อัตโนมัติ',
          'เก็บ Audit trail ของข้อมูลมิเตอร์ทุกจุดแบบย้อนหลังได้',
          'จ่ายข้อมูลที่ตรวจสอบแล้วให้ระบบคิดเงินและ SCADA ผ่าน API เดียว',
        ],
      },
    ],
    personasEyebrow: 'ออกแบบมาเพื่อใคร',
    personasHeading: '2 บทบาทใน Solar Industry ที่ AMR ตอบโจทย์ที่สุด',
    personas: [
      {
        title: 'Solar Developer / EPC',
        desc: 'ผู้พัฒนาโครงการและผู้รับเหมา EPC ที่ต้องส่งมอบงาน Commissioning ให้ลูกค้า ผ่าน Witness Test การไฟฟ้า และตั้งระบบมอนิเตอร์ก่อน COD',
        items: [
          'Commissioning Dashboard — สรุปผล Performance Test รายไซต์',
          'ส่งมอบเอกสาร M&V พร้อมข้อมูลย้อนหลังให้ลูกค้าตอน Handover',
          'ตั้งระบบเทียบ Expected vs Actual ตั้งแต่วันแรกของ Operation',
        ],
      },
      {
        title: 'Asset Manager / O&M Team',
        desc: 'ทีมที่ดูแลโครงการโซลาร์หลายไซต์หลังเปิดใช้งานแล้ว ต้องการเครื่องมือ ติดตาม Performance, จัดการ Ticket / Alarm และวางแผน Maintenance ให้ตรงเวลา',
        items: [
          'Alarm Center — รวมการแจ้งเตือนจากทุกไซต์ จัดลำดับความสำคัญอัตโนมัติ',
          'ติดตาม PR, Availability, Energy Yield รายอินเวอร์เตอร์ และเทียบกับ Benchmark',
          'Work Order / Maintenance Log ดูประวัติย้อนหลังของทุกอุปกรณ์',
        ],
      },
    ],
    integrationsHeading: 'ระบบเชื่อมต่ออุปกรณ์ที่คุณมีอยู่แล้ว',
    integrationsLedePrefix: 'API เชื่อมตรงกับอินเวอร์เตอร์ ',
    integrationsLedeMid: ' และ SCADA ของลูกค้า — พร้อมอ่านมิเตอร์ผ่าน AMR รองรับ ',
    integrationsLedeSuffix: '',
    customersHeading: 'ลูกค้าที่ใช้งานระบบ AMR ของเราแล้ว',
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
    metaTitle: 'AMR — Automatic Meter Reading and Real-time Solar Monitoring',
    metaDescription:
      'AMR: a solar production monitoring and Automatic Meter Reading system supporting Mk6E, Premier 550, and Elite 500, integrating with Huawei FusionSolar, SMA, Sungrow, and SolarEdge, and feeding data forward to a Billing system and MDM (Meter Data Management) — for Solar Developers, EPCs, and O&M teams.',
    heroEyebrow: 'New Product · 2026',
    heroHeading: 'AMR — Monitor solar production, with automatic meter reading',
    heroLedePrefix:
      'Monitor production across every site in real time, and read electricity meters automatically via AMR without sending anyone on-site — an accurate data foundation that feeds straight into your ',
    billingLinkText: 'Billing',
    heroLedeSuffix: ' system or your SCADA.',
    heroCtaDemo: 'Request a Demo →',
    heroCtaConsult: 'Talk to a Specialist',
    pillarsEyebrow: 'Three Pillars',
    pillarsHeading:
      'Production monitoring, data collection, and data management (MDM) — all in one',
    pillars: [
      {
        id: undefined,
        title: 'Production',
        sub: 'Real-time Solar Monitoring',
        desc: 'Real-time monitoring of solar system performance, with alerts when something goes wrong and carbon-reduction reporting for ESG.',
        items: [
          'kWh / kWp / Performance Ratio reporting per inverter',
          'LINE / Email alerts when the system has an issue',
          'Carbon-reduction (CO₂ saved) reporting for ESG',
          'History available from minute-level to year-level',
        ],
      },
      {
        id: 'amr-integration',
        title: 'Data Collection',
        sub: 'Automatic Meter Reading (AMR)',
        desc: 'Wireless automatic meter reading pulls electricity usage and solar production data into the system with no manual meter reading — the foundation layer that billing and other reports build on.',
        items: [
          'Automatic meter reading via AMR — supports Mk6E, Premier 550, Elite 500',
          'Data pulled on a set schedule, no on-site staff needed',
          'Data ready to feed a Billing system or the customer’s SCADA in real time',
        ],
      },
      {
        id: 'meter-data-management',
        title: 'Data Management',
        sub: 'Meter Data Management (MDM)',
        desc: 'Aggregates and reconciles data from every meter’s AMR in one place, checking for anomalies before passing it on — a data layer that billing and financial reporting can rely on.',
        items: [
          'Automatically reconciles revenue meter data against AMR data',
          'Keeps a historical audit trail for every metering point',
          'Feeds verified data to the billing system and SCADA through a single API',
        ],
      },
    ],
    personasEyebrow: 'Who It’s For',
    personasHeading: 'Two roles in the solar industry that AMR serves best',
    personas: [
      {
        title: 'Solar Developer / EPC',
        desc: 'Project developers and EPC contractors who need to hand over commissioning to customers, pass utility witness tests, and stand up a monitoring system before COD.',
        items: [
          'Commissioning dashboard — per-site performance test summary',
          'Hand over M&V documentation with historical data at project handover',
          'Track expected vs. actual from day one of operation',
        ],
      },
      {
        title: 'Asset Manager / O&M Team',
        desc: 'Teams managing multiple solar sites post-launch, who need tools to track performance, manage tickets/alarms, and schedule maintenance on time.',
        items: [
          'Alarm center — consolidates alerts from every site with automatic prioritization',
          'Track PR, availability, and energy yield per inverter against benchmarks',
          'Work order / maintenance log with full equipment history',
        ],
      },
    ],
    integrationsHeading: 'Connects to the equipment you already have',
    integrationsLedePrefix: 'A direct API integrates with ',
    integrationsLedeMid:
      ' inverters and your SCADA — with automatic meter reading via AMR supporting ',
    integrationsLedeSuffix: '.',
    customersHeading: 'Customers Already Using Our AMR System',
    quoteHeading: 'Request a Quote + Try the Demo',
    quoteLede: 'Response within 1 business day · Free 30-day trial, no credit card required',
    businessTypes: [
      'Solar Developer / EPC',
      'IPP / Solar PPA Operator',
      'Asset Manager / O&M',
      'Investor',
    ],
    portfolioSizes: ['Under 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', 'Over 50 MWp'],
  },
  zh: {
    metaTitle: 'AMR — 自动抄表与实时太阳能监控系统',
    metaDescription:
      'AMR：太阳能发电监控与自动抄表（Automatic Meter Reading）系统，支持 Mk6E、Premier 550、Elite 500，可对接 Huawei FusionSolar、SMA、Sungrow、SolarEdge，并将数据传递至计费系统与 MDM（电表数据管理系统）——适用于太阳能开发商、EPC 及运维团队。',
    heroEyebrow: '新产品 · 2026',
    heroHeading: 'AMR — 监控太阳能发电量，并自动抄表',
    heroLedePrefix:
      '实时监控所有站点的发电量，并通过 AMR 自动抄表，无需人员到场——作为准确的数据基础，可直接对接',
    billingLinkText: '计费系统',
    heroLedeSuffix: '或客户的 SCADA 系统，即时可用。',
    heroCtaDemo: '申请试用 Demo →',
    heroCtaConsult: '咨询专家',
    pillarsEyebrow: '三大核心模块',
    pillarsHeading: '涵盖发电监控、数据采集与数据管理（MDM）',
    pillars: [
      {
        id: undefined,
        title: '发电监控',
        sub: 'Real-time Solar Monitoring',
        desc: '实时监控太阳能系统运行效能，系统异常时自动告警，并提供用于 ESG 的碳减排报告。',
        items: [
          '按逆变器提供 kWh / kWp / Performance Ratio 报告',
          '系统异常时通过 LINE / 邮件发送告警',
          '提供用于 ESG 的碳减排（CO₂ saved）报告',
          '历史数据可查询，最细至分钟级，最长至年度',
        ],
      },
      {
        id: 'amr-integration',
        title: '数据采集',
        sub: 'Automatic Meter Reading (AMR)',
        desc: '无线自动抄表，将用电量与太阳能发电数据自动采集入系统，无需人工抄表，是计费系统及其他报告的基础数据层。',
        items: [
          '通过 AMR 自动抄表——支持 Mk6E、Premier 550、Elite 500',
          '按设定周期自动采集数据，无需人员到场',
          '数据可实时传递至计费系统或客户 SCADA',
        ],
      },
      {
        id: 'meter-data-management',
        title: '数据管理',
        sub: 'Meter Data Management (MDM)',
        desc: '集中汇总并核对来自各电表 AMR 的数据，在传递前检查数据异常，为计费系统与财务报告提供可靠的数据依据。',
        items: [
          '自动核对电能表（Revenue Meter）数据与 AMR 数据',
          '保存所有计量点的历史审计记录（Audit trail）',
          '通过统一 API 将已核实数据传递至计费系统与 SCADA',
        ],
      },
    ],
    personasEyebrow: '适用对象',
    personasHeading: 'AMR 最能满足太阳能行业中的两类角色',
    personas: [
      {
        title: 'Solar Developer / EPC',
        desc: '需要向客户交付调试成果、通过电力公司见证测试（Witness Test），并在 COD 前建立监控系统的项目开发商与 EPC 承包商。',
        items: [
          '调试仪表板——按站点汇总性能测试结果',
          '交付时提供含历史数据的 M&V 文件',
          '自运营首日起建立预期与实际发电量对比系统',
        ],
      },
      {
        title: 'Asset Manager / O&M Team',
        desc: '负责多个已投运太阳能站点的团队，需要工具来跟踪性能、管理工单/告警，并按时安排维护。',
        items: [
          '告警中心——集中显示各站点告警并自动排序优先级',
          '按逆变器跟踪 PR、可用率与发电量，并与基准对比',
          '工单 / 维护日志，可查询所有设备的历史记录',
        ],
      },
    ],
    integrationsHeading: '与您现有设备无缝对接',
    integrationsLedePrefix: 'API 可直接对接 ',
    integrationsLedeMid: ' 逆变器及客户 SCADA 系统——并支持通过 AMR 自动抄表，兼容 ',
    integrationsLedeSuffix: '。',
    customersHeading: '已在使用我们 AMR 系统的客户',
    quoteHeading: '索取报价 + 申请试用 Demo',
    quoteLede: '1 个工作日内回复 · 30 天免费试用，无需信用卡',
    businessTypes: [
      'Solar Developer / EPC',
      'IPP / Solar PPA Operator',
      'Asset Manager / O&M',
      '投资方 / Investor',
    ],
    portfolioSizes: ['低于 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', '高于 50 MWp'],
  },
};
