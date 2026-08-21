import type { Locale } from '../locales';

export interface IndustryDetailCopy {
  productsEyebrow: string;
  productsHeading: string;
  productsEmpty: string;
  servicesEyebrow: string;
  servicesHeading: string;
  projectsEyebrow: string;
  projectsHeading: string;
  projectsEmpty: string;
  articlesEyebrow: string;
  articlesHeading: string;
  articlesEmpty: string;
  solutionsEyebrow: string;
  solutionsHeading: string;
  solutionAmrDesc: string;
  solutionBillingDesc: string;
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
}

export const INDUSTRY_DETAIL_COPY: Record<Locale, IndustryDetailCopy> = {
  th: {
    productsEyebrow: 'ผลิตภัณฑ์ที่เกี่ยวข้อง',
    productsHeading: 'อุปกรณ์ที่ใช้ในอุตสาหกรรมนี้',
    productsEmpty: '[pending] — ยังไม่มีผลิตภัณฑ์ที่ระบุสำหรับอุตสาหกรรมนี้',
    servicesEyebrow: 'บริการของเรา',
    servicesHeading: 'บริการครบวงจรสำหรับทุกอุตสาหกรรม',
    projectsEyebrow: 'เรื่องราวลูกค้า',
    projectsHeading: 'ผลงานในอุตสาหกรรมนี้',
    projectsEmpty: '[pending] — ยังไม่มีเรื่องราวลูกค้าที่เผยแพร่แล้วสำหรับอุตสาหกรรมนี้',
    articlesEyebrow: 'บทความ',
    articlesHeading: 'ความรู้ที่เกี่ยวข้อง',
    articlesEmpty: '[pending] — ยังไม่มีบทความสำหรับอุตสาหกรรมนี้',
    solutionsEyebrow: 'โซลูชันที่เกี่ยวข้อง',
    solutionsHeading: 'AMR และระบบคิดเงิน',
    solutionAmrDesc: 'อ่านมิเตอร์อัตโนมัติ และมอนิเตอร์ผลผลิตโซลาร์แบบเรียลไทม์',
    solutionBillingDesc: 'คำนวณค่าไฟตามเรทจริงและออก Private PPA Billing อัตโนมัติ',
    ctaHeading: 'พร้อมเป็นส่วนหนึ่งของโครงการคุณ',
    ctaBody: 'ส่งรายละเอียดโครงการของคุณ ทีมวิศวกรของเราจะประเมินขอบเขตงาน และเสนอราคาให้ภายใน 2 วันทำการ',
    ctaLabel: 'ติดต่อเรา →',
  },
  en: {
    productsEyebrow: 'Relevant Products',
    productsHeading: 'Equipment used in this industry',
    productsEmpty: '[pending] — no products have been tagged for this industry yet',
    servicesEyebrow: 'Our Services',
    servicesHeading: 'End-to-end services for every industry',
    projectsEyebrow: 'Customer Stories',
    projectsHeading: 'Our work in this industry',
    projectsEmpty: '[pending] — no published customer stories for this industry yet',
    articlesEyebrow: 'Insights',
    articlesHeading: 'Related knowledge',
    articlesEmpty: '[pending] — no articles for this industry yet',
    solutionsEyebrow: 'Related Solutions',
    solutionsHeading: 'AMR and Billing',
    solutionAmrDesc: 'Automatic meter reading, with real-time solar production monitoring.',
    solutionBillingDesc: 'Calculate charges at real tariff rates and issue Private PPA billing automatically.',
    ctaHeading: 'Ready to be part of your project',
    ctaBody:
      'Send us your project details. Our engineering team will assess the scope of work and get back to you with a quote within 2 business days.',
    ctaLabel: 'Contact Us →',
  },
  zh: {
    productsEyebrow: '相关产品',
    productsHeading: '本行业所用设备',
    productsEmpty: '[待补充] — 该行业尚未标注相关产品',
    servicesEyebrow: '我们的服务',
    servicesHeading: '面向所有行业的一站式服务',
    projectsEyebrow: '客户故事',
    projectsHeading: '我们在该行业的项目实绩',
    projectsEmpty: '[待补充] — 该行业尚无已发布的客户故事',
    articlesEyebrow: '洞察',
    articlesHeading: '相关知识',
    articlesEmpty: '[待补充] — 该行业尚无相关文章',
    solutionsEyebrow: '相关解决方案',
    solutionsHeading: 'AMR 与计费系统',
    solutionAmrDesc: '自动抄表，并实时监控太阳能发电量。',
    solutionBillingDesc: '按实际电价计算费用，自动生成私人购电协议（PPA）账单。',
    ctaHeading: '期待成为您项目的一部分',
    ctaBody: '发送您的项目详情，我们的工程团队将评估工作范围，并在 2 个工作日内为您提供报价。',
    ctaLabel: '联系我们 →',
  },
};
