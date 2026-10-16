import type { Locale } from '../locales';

/*
 * Section order follows AVG-CONTENT-GUIDE-FOR-CODING-AGENT.md (Billing page):
 * hero → problems → workflow → capabilities → getting started → evidence → FAQ → form.
 *
 * Every claim below was confirmed by the site owner (2026-10-16): 15-minute reads,
 * 30-day free trial, 1-business-day reply, 3-level approval + e-signature, 10-year
 * portal history, Email/SMS alerts, VPN/APN/Fixed IP, tens-of-thousands scale,
 * days → minutes billing close, CEWE + Secure support.
 *
 * TODO(AVG): sample screenshots / invoice examples (with sensitive data masked) —
 *   the guide's "sample visuals" section stays out until AVG approves images.
 * TODO(AVG): FAQ answers for pricing, time-to-go-live and supported billing cycles —
 *   not shown until AVG gives a confirmed answer.
 */

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
  /** One line on the conditions/limits of this capability. */
  scope: string;
}

export interface BillingItem {
  title: string;
  desc: string;
}

export interface BillingFaq {
  question: string;
  answer: string;
}

export interface BillingCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeading: string;
  heroSub: string;
  heroAudience: string;
  ctaDemo: string;
  ctaConsult: string;

  painsEyebrow: string;
  painsHeading: string;
  painsLede: string;
  painsProblemLabel: string;
  painsImpactLabel: string;
  pains: BillingPainRow[];

  workflowEyebrow: string;
  workflowHeading: string;
  workflowLede: string;
  workflow: BillingItem[];

  featuresEyebrow: string;
  featuresHeading: string;
  featuresScopeLabel: string;
  features: BillingFeature[];
  highlights: BillingItem[];

  startEyebrow: string;
  startHeading: string;
  startLede: string;
  prepareHeading: string;
  prepareItems: string[];
  onboardingHeading: string;
  onboarding: BillingItem[];
  supportedMetersNote: string;
  amrLinkText: string;

  customersHeading: string;

  faqEyebrow: string;
  faqHeading: string;
  faq: BillingFaq[];

  quoteHeading: string;
  quoteLede: string;
  quoteNextStep: string;
  businessTypes: string[];
  portfolioSizes: string[];
}

export const BILLING_COPY: Record<Locale, BillingCopy> = {
  th: {
    metaTitle: 'ระบบ Billing สำหรับ Private PPA — ออกบิลจากข้อมูลมิเตอร์ตามสัญญา',
    metaDescription:
      'ระบบ Billing สำหรับ Solar Developer และผู้ให้บริการ Private PPA — ใช้ข้อมูลมิเตอร์ที่อ่านทุก 15 นาที ตรวจและอนุมัติ 3 ระดับ คำนวณตามอัตราในสัญญาแต่ละราย ออกใบแจ้งหนี้ พร้อมเว็บพอร์ทัลให้ลูกค้าตรวจสอบข้อมูลเอง รองรับมิเตอร์ CEWE และ Secure',
    eyebrow: 'ระบบ Billing · Private PPA',
    heroHeading: 'ระบบออกบิลจากข้อมูลมิเตอร์ สำหรับโครงการ Private PPA',
    heroSub:
      'รวบรวมข้อมูลมิเตอร์ของทุกไซต์ ตรวจสอบและอนุมัติก่อนออกบิล คำนวณตามเงื่อนไขสัญญาของลูกค้าแต่ละราย แล้วจัดทำใบแจ้งหนี้ — ลดงานอ่านมิเตอร์และคีย์บิลด้วยมือ',
    heroAudience: 'เหมาะกับ Solar Developer, EPC, ผู้ให้บริการ Private PPA และ Asset Manager ที่ดูแลหลายไซต์',
    ctaDemo: 'ขอ Demo ระบบ Billing →',
    ctaConsult: 'ติดต่อฝ่ายขาย',

    painsEyebrow: 'ปัญหาหน้างาน',
    painsHeading: 'งานหลังบ้านที่ผู้ดูแลโครงการ Private PPA มักเจอ',
    painsLede: 'ยิ่งมีไซต์และสัญญามากขึ้น งานรวบรวมข้อมูล ตรวจตัวเลข และทำบิลด้วยมือก็ยิ่งใช้เวลาและเสี่ยงผิดพลาด',
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

    workflowEyebrow: 'ระบบทำงานอย่างไร',
    workflowHeading: 'จากข้อมูลมิเตอร์ ถึงใบแจ้งหนี้',
    workflowLede:
      'ระบบรับข้อมูลจากมิเตอร์ทุก 15 นาที แล้วผ่านขั้นตอนตรวจสอบก่อนออกบิลทุกรอบ — ทุกขั้นตอนมีประวัติตรวจสอบย้อนหลังได้',
    workflow: [
      {
        title: 'รับข้อมูลมิเตอร์',
        desc: 'ดึงค่าพลังงานไฟฟ้าจากมิเตอร์ทุก 15 นาที ผ่านช่องทางสื่อสารที่เหมาะกับแต่ละไซต์',
      },
      {
        title: 'ตรวจและอนุมัติ',
        desc: 'Workflow อนุมัติ 3 ระดับ พร้อมลายเซ็นอิเล็กทรอนิกส์ ก่อนบิลจะถูกส่งถึงลูกค้า',
      },
      {
        title: 'คำนวณตามเงื่อนไขสัญญา',
        desc: 'ใช้อัตราที่ตกลงในแต่ละสัญญา — Fix Rate, TOU หรืออัตรา PPA เฉพาะราย รวมส่วนลดตามระยะเวลาสัญญา',
      },
      {
        title: 'จัดทำใบแจ้งหนี้',
        desc: 'ออกใบแจ้งหนี้ในรูปแบบใกล้เคียงของการไฟฟ้า และให้ลูกค้าดูข้อมูลของตัวเองผ่านเว็บพอร์ทัล',
      },
    ],

    featuresEyebrow: 'ความสามารถของระบบ',
    featuresHeading: 'ความสามารถหลักและขอบเขตการใช้งาน',
    featuresScopeLabel: 'ขอบเขต',
    features: [
      {
        title: 'ดึงข้อมูลมิเตอร์อัตโนมัติ',
        desc: 'ดึงค่าพลังงานไฟฟ้าทุก 15 นาที ไม่ต้องส่งคนไปอ่านมิเตอร์เอง แม้ระบบสื่อสารมีปัญหาชั่วคราว ก็ดึงข้อมูลย้อนหลังกลับมาได้อัตโนมัติ',
        scope: 'เชื่อมต่อผ่าน VPN, Private APN SIM หรือ Fixed IP เลือกตามความพร้อมของแต่ละไซต์',
      },
      {
        id: 'ppa-billing',
        title: 'ออกใบแจ้งหนี้ตามสัญญา PPA',
        desc: 'คำนวณบิลตามอัตราที่ตกลงในแต่ละสัญญา ตั้งส่วนลดตามระยะเวลาสัญญาได้ และระบบปรับกลับอัตราปกติให้เองเมื่อครบกำหนด',
        scope: 'รองรับ Fix Rate, TOU และอัตรา PPA เฉพาะราย ตั้งค่าตามเงื่อนไขที่ระบุในสัญญา',
      },
      {
        title: 'ระบบตรวจสอบก่อนออกบิล',
        desc: 'ป้องกันบิลผิดพลาดหลุดออกไปถึงลูกค้า ทุกขั้นตอนมีประวัติตรวจสอบย้อนหลังได้',
        scope: 'Workflow อนุมัติ 3 ระดับ พร้อมลายเซ็นอิเล็กทรอนิกส์',
      },
      {
        title: 'เว็บพอร์ทัลสำหรับลูกค้า',
        desc: 'ลูกค้าปลายทาง (Off-taker) ดูข้อมูลการใช้ไฟฟ้าของตัวเองและกราฟย้อนหลังได้ ใช้ได้ทั้งมือถือและคอมพิวเตอร์',
        scope: 'ใช้ผ่านเบราว์เซอร์ทั่วไป ไม่ต้องติดตั้งโปรแกรม ดูข้อมูลย้อนหลังได้ถึง 10 ปี',
      },
      {
        title: 'แจ้งเตือนความผิดปกติ',
        desc: 'รู้ทันทีเมื่อมิเตอร์อ่านค่าไม่ได้หรือมีความผิดปกติ ช่วยแก้ปัญหาก่อนกระทบการเก็บเงิน',
        scope: 'แจ้งเตือนผ่าน Email และ SMS',
      },
      {
        title: 'รายงานสำหรับบริหารพอร์ตโฟลิโอ',
        desc: 'ดูภาพรวมทุกโครงการ ทุกสัญญา ในที่เดียว และเปรียบเทียบข้อมูลรายเดือน',
        scope: 'Export รายงานเป็น PDF หรือ Excel',
      },
    ],
    highlights: [
      {
        title: 'ออกแบบสำหรับ Private PPA',
        desc: 'รองรับสัญญาที่มีเงื่อนไขต่างกันในแต่ละราย',
      },
      {
        title: 'รองรับการขยายตัว',
        desc: 'ตั้งแต่ไม่กี่สิบมิเตอร์ ไปจนถึงหลักหมื่นมิเตอร์',
      },
      {
        title: 'ลดเวลาปิดรอบบิล',
        desc: 'จากหลักวันเหลือไม่กี่นาที และลดต้นทุนแรงงานอ่านมิเตอร์',
      },
      {
        title: 'ข้อมูลชุดเดียวกันทุกฝ่าย',
        desc: 'Solar Developer และลูกค้าปลายทางเห็นข้อมูลเดียวกัน ลดข้อโต้แย้งเรื่องบิล',
      },
    ],

    startEyebrow: 'การเชื่อมต่อและการเริ่มต้น',
    startHeading: 'ก่อนเริ่มใช้งาน ต้องเตรียมอะไรบ้าง',
    startLede: 'ข้อมูลเหล่านี้ช่วยให้ทีมงานประเมินความพร้อมของโครงการและแนะนำวิธีเชื่อมต่อได้ตรงหน้างาน',
    prepareHeading: 'ข้อมูลที่ควรเตรียม',
    prepareItems: [
      'รายการมิเตอร์ที่ใช้งาน (ยี่ห้อ รุ่น และจำนวน) ของแต่ละไซต์',
      'จำนวนไซต์และขนาดกำลังผลิตของพอร์ต',
      'อัตราค่าไฟฟ้า ส่วนลด และระยะเวลาสัญญา PPA ของลูกค้าแต่ละราย',
      'ช่องทางสื่อสารที่มีอยู่หน้างาน (เช่น อินเทอร์เน็ต หรือ SIM)',
    ],
    onboardingHeading: 'ขั้นตอนเริ่มต้น',
    onboarding: [
      {
        title: 'เชื่อมต่อมิเตอร์',
        desc: 'ติดตั้งและลงทะเบียนมิเตอร์เข้าระบบ เลือกช่องทางสื่อสารตามหน้างาน',
      },
      {
        title: 'ตั้งค่าสัญญา PPA',
        desc: 'กำหนดอัตราค่าไฟฟ้า ส่วนลด และระยะเวลาสัญญาของลูกค้าแต่ละราย',
      },
      {
        title: 'เริ่มรอบบิล',
        desc: 'ระบบดึงข้อมูล ส่งให้ตรวจอนุมัติ คำนวณ และจัดทำใบแจ้งหนี้ทุกรอบ',
      },
    ],
    supportedMetersNote:
      'รองรับมิเตอร์ CEWE และ Secure ที่ใช้งานในโครงการ Private PPA — ไม่ต้องเปลี่ยนมิเตอร์เดิม การอ่านและจัดการข้อมูลมิเตอร์ทำผ่าน',
    amrLinkText: 'ระบบ AMR',

    customersHeading: 'ลูกค้าที่ใช้งานระบบคิดเงิน (Billing) ของเราแล้ว',

    faqEyebrow: 'คำถามที่พบบ่อย',
    faqHeading: 'คำถามเกี่ยวกับระบบ Billing',
    faq: [
      {
        question: 'ต้องเปลี่ยนมิเตอร์เดิมหรือไม่?',
        answer:
          'ไม่ต้อง หากเป็นมิเตอร์ CEWE หรือ Secure ที่ใช้งานในโครงการ Private PPA อยู่แล้ว สำหรับมิเตอร์ยี่ห้ออื่น ส่งรายการรุ่นมาให้ทีมงานตรวจสอบก่อนได้',
      },
      {
        question: 'ระบบอ่านข้อมูลมิเตอร์บ่อยแค่ไหน?',
        answer: 'ระบบดึงค่าพลังงานไฟฟ้าจากมิเตอร์ทุก 15 นาที',
      },
      {
        question: 'ถ้าสัญญาณสื่อสารขาดหาย ข้อมูลจะหายไหม?',
        answer:
          'เมื่อระบบสื่อสารกลับมาใช้งานได้ ระบบจะดึงข้อมูลย้อนหลังกลับมาอัตโนมัติ และแจ้งเตือนผ่าน Email และ SMS เมื่อมิเตอร์อ่านค่าไม่ได้',
      },
      {
        question: 'บิลถูกตรวจสอบก่อนส่งถึงลูกค้าอย่างไร?',
        answer:
          'บิลทุกฉบับผ่าน Workflow อนุมัติ 3 ระดับ พร้อมลายเซ็นอิเล็กทรอนิกส์ และมีประวัติตรวจสอบย้อนหลังได้ทุกขั้นตอน',
      },
      {
        question: 'รองรับอัตราค่าไฟแบบใดบ้าง?',
        answer:
          'Fix Rate, TOU และอัตรา PPA เฉพาะราย ตั้งส่วนลดตามระยะเวลาสัญญาได้ และระบบปรับกลับอัตราปกติเมื่อครบกำหนด',
      },
      {
        question: 'ทดลองใช้งานก่อนได้หรือไม่?',
        answer: 'ได้ ทดลองใช้งานฟรี 30 วัน ไม่ต้องใช้บัตรเครดิต',
      },
    ],

    quoteHeading: 'ขอ Demo ระบบ Billing',
    quoteLede: 'ตอบกลับภายใน 1 วันทำการ · ทดลองใช้งานฟรี 30 วัน ไม่ต้องใช้บัตรเครดิต',
    quoteNextStep:
      'กรอกชื่อ อีเมล ประเภทธุรกิจ และขนาดพอร์ต ทีมงานจะติดต่อกลับเพื่อนัด Demo และประเมินความพร้อมของโครงการ',
    businessTypes: [
      'Solar Developer / EPC',
      'IPP / Solar PPA Operator',
      'Asset Manager / O&M',
      'ผู้ลงทุน / Investor',
    ],
    portfolioSizes: ['ต่ำกว่า 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', 'มากกว่า 50 MWp'],
  },
  en: {
    metaTitle: 'Billing System for Private PPA — Invoices from Meter Data, per Contract',
    metaDescription:
      'A billing system for solar developers and Private PPA operators — uses meter data read every 15 minutes, 3-level review and approval, per-contract rate calculation, invoicing, and a customer web portal for self-serve usage history. Supports CEWE and Secure meters.',
    eyebrow: 'Billing System · Private PPA',
    heroHeading: 'Billing from Meter Data for Private PPA Projects',
    heroSub:
      "Collects meter data from every site, routes each bill through review and approval, calculates against each customer's contract terms, and produces the invoice — cutting manual meter reading and manual billing.",
    heroAudience:
      'Built for solar developers, EPCs, Private PPA operators and asset managers running multiple sites',
    ctaDemo: 'Request a Billing Demo →',
    ctaConsult: 'Talk to Sales',

    painsEyebrow: 'Problems on the Ground',
    painsHeading: 'Back-Office Work Private PPA Teams Commonly Face',
    painsLede:
      'The more sites and contracts you run, the longer manual data collection, number-checking and billing take — and the higher the risk of errors.',
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

    workflowEyebrow: 'How It Works',
    workflowHeading: 'From Meter Data to Invoice',
    workflowLede:
      'The system receives meter data every 15 minutes, and every billing cycle passes through review before a bill goes out — with a reviewable history at every step.',
    workflow: [
      {
        title: 'Receive meter data',
        desc: 'Pulls energy data from meters every 15 minutes over the communication channel that suits each site.',
      },
      {
        title: 'Review and approve',
        desc: 'A 3-level approval workflow with e-signatures before any bill reaches a customer.',
      },
      {
        title: 'Calculate per contract',
        desc: 'Applies the rate agreed in each contract — Fix Rate, TOU, or a customer-specific PPA rate — including contract-term discounts.',
      },
      {
        title: 'Produce the invoice',
        desc: "Issues invoices in a format close to the utility's own, and lets customers view their own data in the web portal.",
      },
    ],

    featuresEyebrow: 'Core Capabilities',
    featuresHeading: 'Key Capabilities and Their Scope',
    featuresScopeLabel: 'Scope',
    features: [
      {
        title: 'Automatic Meter Data Collection',
        desc: "Pulls energy data every 15 minutes with no manual reads. If the communication link drops temporarily, the system automatically backfills the missing data once it's back.",
        scope: 'Connects via VPN, private APN SIM, or fixed IP, chosen to suit each site',
      },
      {
        id: 'ppa-billing',
        title: 'PPA Contract Billing',
        desc: 'Calculates bills against the rate agreed in each contract. Set contract-term discounts and the system reverts to the standard rate automatically once the term ends.',
        scope: 'Supports Fix Rate, TOU and customer-specific PPA rates, configured from each contract',
      },
      {
        title: 'Pre-Billing Review',
        desc: 'Prevents an incorrect bill from reaching a customer. Every step keeps a reviewable history.',
        scope: '3-level approval workflow with e-signatures',
      },
      {
        title: 'Customer Web Portal',
        desc: 'Offtakers view their own usage data and history charts on mobile or desktop.',
        scope: 'Runs in any standard browser, no install required, up to 10 years of history',
      },
      {
        title: 'Anomaly Alerts',
        desc: 'Know immediately when a meter fails to report or something looks off — fix it before it affects collections.',
        scope: 'Alerts via email and SMS',
      },
      {
        title: 'Portfolio Reporting',
        desc: 'See every project and every contract in one place and compare month over month.',
        scope: 'Export any report to PDF or Excel',
      },
    ],
    highlights: [
      {
        title: 'Designed for Private PPA',
        desc: 'Handles contracts whose terms differ from customer to customer.',
      },
      { title: 'Scales with you', desc: 'From a few dozen meters to tens of thousands.' },
      {
        title: 'Faster billing close',
        desc: 'From days to minutes, with lower meter-reading labor costs.',
      },
      {
        title: 'One dataset for everyone',
        desc: 'Developers and offtakers see the same data, reducing billing disputes.',
      },
    ],

    startEyebrow: 'Connecting and Getting Started',
    startHeading: 'What to Prepare Before You Start',
    startLede:
      'This information helps our team assess your project’s readiness and recommend the right way to connect each site.',
    prepareHeading: 'Information to prepare',
    prepareItems: [
      'The meters in use at each site (brand, model and quantity)',
      'Number of sites and the portfolio’s installed capacity',
      "Each customer's PPA electricity rate, discounts and contract term",
      'Communication options already available on site (e.g. internet or SIM)',
    ],
    onboardingHeading: 'Getting started',
    onboarding: [
      {
        title: 'Connect the meters',
        desc: 'Install and register meters into the system, choosing the communication channel that fits each site.',
      },
      {
        title: 'Set up the PPA contract',
        desc: "Configure each customer's electricity rate, discounts, and contract term.",
      },
      {
        title: 'Start the billing cycle',
        desc: 'The system pulls data, routes it for approval, calculates and produces invoices every cycle.',
      },
    ],
    supportedMetersNote:
      'Supports CEWE and Secure meters used in Private PPA projects — no need to replace existing meters. Meter reading and data management run through the',
    amrLinkText: 'AMR system',

    customersHeading: 'Customers Already Using Our Billing System',

    faqEyebrow: 'FAQ',
    faqHeading: 'Questions About the Billing System',
    faq: [
      {
        question: 'Do we need to replace our existing meters?',
        answer:
          'No, not if they are CEWE or Secure meters already used in a Private PPA project. For other brands, send us the model list and our team can check first.',
      },
      {
        question: 'How often does the system read the meters?',
        answer: 'The system pulls energy data from the meters every 15 minutes.',
      },
      {
        question: 'If the communication link drops, is data lost?',
        answer:
          'Once the link is back, the system automatically backfills the missing data, and sends email and SMS alerts when a meter fails to report.',
      },
      {
        question: 'How are bills checked before they reach customers?',
        answer:
          'Every bill goes through a 3-level approval workflow with e-signatures, with a reviewable history at every step.',
      },
      {
        question: 'Which rate types are supported?',
        answer:
          'Fix Rate, TOU and customer-specific PPA rates. Contract-term discounts can be set, and the system reverts to the standard rate when the term ends.',
      },
      {
        question: 'Can we try it first?',
        answer: 'Yes — a 30-day free trial, no credit card required.',
      },
    ],

    quoteHeading: 'Request a Billing Demo',
    quoteLede: 'We reply within 1 business day · 30-day free trial, no credit card required',
    quoteNextStep:
      'Share your name, email, business type and portfolio size. Our team will get back to you to schedule a demo and assess your project’s readiness.',
    businessTypes: [
      'Solar Developer / EPC',
      'IPP / Solar PPA Operator',
      'Asset Manager / O&M',
      'Investor',
    ],
    portfolioSizes: ['Under 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', 'Over 50 MWp'],
  },
  zh: {
    metaTitle: 'Private PPA 计费系统 — 基于电表数据按合同开票',
    metaDescription:
      '面向太阳能开发商与 Private PPA 运营商的计费系统——使用每 15 分钟读取的电表数据，三级审核审批，按每份合同电价计算并开具发票，并提供客户自助查询用电历史的网页门户。支持 CEWE 与 Secure 电表。',
    eyebrow: '计费系统 · Private PPA',
    heroHeading: '面向 Private PPA 项目、基于电表数据的计费系统',
    heroSub:
      '汇集所有站点的电表数据，出账前经过审核审批，按每位客户的合同条款计算，并生成发票——减少人工抄表与手动开票。',
    heroAudience: '适用于管理多个站点的太阳能开发商、EPC、Private PPA 运营商与资产管理方',
    ctaDemo: '申请计费系统演示 →',
    ctaConsult: '联系销售',

    painsEyebrow: '现场问题',
    painsHeading: 'Private PPA 项目团队常见的后台工作难题',
    painsLede: '站点和合同越多，人工收集数据、核对数字与开票就越耗时，出错风险也越高。',
    painsProblemLabel: '问题',
    painsImpactLabel: '影响',
    pains: [
      { problem: '电表数据无法自动获取', impact: '每月都要派人到现场抄表' },
      { problem: '每份 PPA 合同的电价都不一样', impact: '只能靠人工或 Excel 计算账单，出错风险高' },
      { problem: '没有系统让客户自行查询数据', impact: '客户经常来电询问历史数据，浪费团队时间' },
      { problem: '站点数量增加后难以扩展', impact: '项目越多，人工管理越吃不消' },
    ],

    workflowEyebrow: '系统如何运作',
    workflowHeading: '从电表数据到发票',
    workflowLede: '系统每 15 分钟接收一次电表数据，每个结算周期在出账前都经过审核——每个环节均可追溯。',
    workflow: [
      { title: '接收电表数据', desc: '通过适合各站点的通信方式，每 15 分钟从电表抓取一次用电数据' },
      { title: '审核与审批', desc: '账单发送给客户前，经过配合电子签名的三级审批流程' },
      {
        title: '按合同条件计算',
        desc: '采用每份合同约定的电价——固定价（Fix Rate）、TOU 或客户专属 PPA 电价，并包含按合同期限的折扣',
      },
      { title: '生成发票', desc: '以接近电力公司账单的格式开具发票，并让客户通过网页门户查看自己的数据' },
    ],

    featuresEyebrow: '核心能力',
    featuresHeading: '主要能力及适用范围',
    featuresScopeLabel: '范围',
    features: [
      {
        title: '电表数据自动采集',
        desc: '每 15 分钟抓取一次用电数据，无需人工抄表。即使通信暂时中断，系统也能在恢复后自动回填缺失的数据。',
        scope: '根据各站点条件，通过 VPN、专用 APN SIM 卡或固定 IP 连接',
      },
      {
        id: 'ppa-billing',
        title: 'PPA 合同账单',
        desc: '按每份合同约定的电价计算账单。可设置按合同期限的折扣，到期后系统自动恢复标准电价。',
        scope: '支持固定价（Fix Rate）、TOU 与客户专属 PPA 电价，按合同条款配置',
      },
      {
        title: '出账前审核',
        desc: '防止错误账单流向客户，每个环节均可追溯审核记录。',
        scope: '三级审批流程，配合电子签名',
      },
      {
        title: '客户网页门户',
        desc: '购电方（Off-taker）可在手机或电脑上查看自己的用电数据与历史图表。',
        scope: '通过常规浏览器使用，无需安装程序，最长可查询 10 年历史',
      },
      {
        title: '异常告警',
        desc: '电表无法读数或出现异常时第一时间获知，在影响收款前及时处理。',
        scope: '通过邮件与短信告警',
      },
      {
        title: '资产组合报告',
        desc: '在同一处查看所有项目、所有合同的整体情况，并逐月比较数据。',
        scope: '报告可导出为 PDF 或 Excel',
      },
    ],
    highlights: [
      { title: '专为 Private PPA 设计', desc: '支持每位客户条款各不相同的合同' },
      { title: '轻松扩展', desc: '从几十块电表到数万块电表' },
      { title: '缩短结算时间', desc: '从数天缩短到几分钟，并降低人工抄表成本' },
      { title: '各方同一套数据', desc: '开发商与购电方看到相同数据，减少账单争议' },
    ],

    startEyebrow: '连接与上线',
    startHeading: '开始使用前需要准备什么',
    startLede: '这些信息有助于我们的团队评估项目准备情况，并针对现场推荐合适的连接方式。',
    prepareHeading: '需准备的信息',
    prepareItems: [
      '各站点使用的电表（品牌、型号与数量）',
      '站点数量与资产组合的装机容量',
      '每位客户的 PPA 电价、折扣与合同期限',
      '现场已有的通信条件（例如互联网或 SIM 卡）',
    ],
    onboardingHeading: '上线步骤',
    onboarding: [
      { title: '连接电表', desc: '安装并将电表注册入系统，根据现场情况选择通信方式' },
      { title: '设置 PPA 合同', desc: '为每位客户设定电价、折扣与合同期限' },
      { title: '开始结算周期', desc: '系统每个周期自动抓取数据、提交审批、计算并生成发票' },
    ],
    supportedMetersNote:
      '支持 Private PPA 项目中使用的 CEWE 与 Secure 电表——无需更换现有电表。电表读数与数据管理通过',
    amrLinkText: 'AMR 系统',

    customersHeading: '已在使用我们计费系统的客户',

    faqEyebrow: '常见问题',
    faqHeading: '关于计费系统的常见问题',
    faq: [
      {
        question: '需要更换现有电表吗？',
        answer:
          '如果是已在 Private PPA 项目中使用的 CEWE 或 Secure 电表，则无需更换。其他品牌可先将型号清单发给我们的团队核实。',
      },
      { question: '系统多久读取一次电表？', answer: '系统每 15 分钟从电表抓取一次用电数据。' },
      {
        question: '通信中断时数据会丢失吗？',
        answer: '通信恢复后，系统会自动回填缺失的数据；电表无法读数时会通过邮件与短信告警。',
      },
      {
        question: '账单在发送给客户前如何审核？',
        answer: '每张账单都经过配合电子签名的三级审批流程，每个环节均可追溯审核记录。',
      },
      {
        question: '支持哪些电价类型？',
        answer:
          '固定价（Fix Rate）、TOU 与客户专属 PPA 电价。可设置按合同期限的折扣，到期后系统自动恢复标准电价。',
      },
      { question: '可以先试用吗？', answer: '可以——30 天免费试用，无需信用卡。' },
    ],

    quoteHeading: '申请计费系统演示',
    quoteLede: '1 个工作日内回复 · 30 天免费试用，无需信用卡',
    quoteNextStep: '请填写姓名、邮箱、业务类型与资产组合规模，我们的团队会与您联系，安排演示并评估项目准备情况。',
    businessTypes: [
      '太阳能开发商 / EPC',
      'IPP / 太阳能 PPA 运营商',
      '资产管理 / 运维（O&M）',
      '投资人',
    ],
    portfolioSizes: ['低于 500 kWp', '500 kWp – 5 MWp', '5 MWp – 50 MWp', '高于 50 MWp'],
  },
};
