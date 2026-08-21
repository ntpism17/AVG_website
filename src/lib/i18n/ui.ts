/**
 * Shared UI chrome dictionary — strings repeated across many pages (nav,
 * footer, breadcrumbs, cards, forms). Content unique to one page lives in
 * `src/lib/i18n/pages/*.ts` instead; see that folder's files for the
 * per-page pattern.
 *
 * These are AI-generated translations, not yet reviewed by a native/
 * professional translator — flagged in CLAUDE.md's Todo list for follow-up.
 */

import type { Locale } from './locales';

export interface UiStrings {
  nav: {
    industries: string;
    allIndustries: string;
    products: string;
    allProducts: string;
    services: string;
    smartMeter: string;
    amr: string;
    billing: string;
    customerStories: string;
    insights: string;
    about: string;
    contact: string;
  };
  requestQuote: string;
  /** A11y label for the phone link, e.g. "Call 099-226-8000". */
  callLabel: string;
  footer: {
    tagline: string;
    productsHeading: string;
    servicesHeading: string;
    companyHeading: string;
    rightsReserved: string;
    registrationLabel: string;
  };
  breadcrumb: {
    home: string;
    backToProducts: string;
    backToProjects: string;
    backToInsights: string;
    backToIndustries: string;
  };
  card: {
    readMore: string;
    readStory: string;
    viewDetails: string;
    viewSolution: string;
  };
  form: {
    name: string;
    company: string;
    companyOrProject: string;
    email: string;
    phone: string;
    message: string;
    businessType: string;
    portfolioSize: string;
    consent: string;
    submit: string;
    disabledTitle: string;
    disabledBodyPrefix: string;
    disabledBodyOr: string;
    pdpaNotice: string;
  };
}

export const UI: Record<Locale, UiStrings> = {
  th: {
    nav: {
      industries: 'อุตสาหกรรม',
      allIndustries: 'ทุกอุตสาหกรรม',
      products: 'ผลิตภัณฑ์',
      allProducts: 'ผลิตภัณฑ์ทั้งหมด',
      services: 'บริการ',
      smartMeter: 'สมาร์ทมิเตอร์',
      amr: 'AMR',
      billing: 'ระบบคิดเงิน (Billing)',
      customerStories: 'เรื่องราวลูกค้า',
      insights: 'บล็อก',
      about: 'เกี่ยวกับเรา',
      contact: 'ติดต่อ',
    },
    requestQuote: 'ขอใบเสนอราคา',
    callLabel: 'โทร',
    footer: {
      tagline: 'ระบบมิเตอร์ไฟฟ้าและสื่อสาร สำหรับโครงการระดับอุตสาหกรรมในประเทศไทย',
      productsHeading: 'ผลิตภัณฑ์',
      servicesHeading: 'บริการ',
      companyHeading: 'บริษัท',
      rightsReserved: 'สงวนลิขสิทธิ์',
      registrationLabel: 'เลขทะเบียนนิติบุคคล',
    },
    breadcrumb: {
      home: 'หน้าแรก',
      backToProducts: '← ผลิตภัณฑ์ทั้งหมด',
      backToProjects: '← เรื่องราวลูกค้าทั้งหมด',
      backToInsights: '← บล็อกทั้งหมด',
      backToIndustries: '← อุตสาหกรรมทั้งหมด',
    },
    card: {
      readMore: 'อ่านต่อ →',
      readStory: 'อ่านเรื่องราว →',
      viewDetails: 'ดูรายละเอียด →',
      viewSolution: 'ดูโซลูชัน →',
    },
    form: {
      name: 'ชื่อ-นามสกุล',
      company: 'บริษัท',
      companyOrProject: 'บริษัท / โครงการ',
      email: 'อีเมล',
      phone: 'เบอร์โทร',
      message: 'ข้อความเพิ่มเติม',
      businessType: 'ประเภทธุรกิจ',
      portfolioSize: 'ขนาดพอร์ตโซลาร์ (โดยประมาณ)',
      consent: 'ยินยอมให้ Advanced Grid ใช้ข้อมูลเพื่อติดต่อกลับ',
      submit: 'ส่งคำขอ →',
      disabledTitle: 'แบบฟอร์มออนไลน์ปิดใช้งานชั่วคราว',
      disabledBodyPrefix: 'กรุณาติดต่อเราที่',
      disabledBodyOr: 'หรือ',
      pdpaNotice: 'ข้อมูลเก็บในประเทศไทย ปลอดภัยตาม PDPA',
    },
  },
  en: {
    nav: {
      industries: 'Industries',
      allIndustries: 'All industries',
      products: 'Products',
      allProducts: 'All Products',
      services: 'Services',
      smartMeter: 'Smart Meter',
      amr: 'AMR',
      billing: 'Billing',
      customerStories: 'Customer Stories',
      insights: 'Blog',
      about: 'About',
      contact: 'Contact',
    },
    requestQuote: 'Request a Quote',
    callLabel: 'Call',
    footer: {
      tagline: 'Electricity metering and communication systems for industrial-scale projects in Thailand',
      productsHeading: 'Products',
      servicesHeading: 'Services',
      companyHeading: 'Company',
      rightsReserved: 'All rights reserved',
      registrationLabel: 'Company registration no.',
    },
    breadcrumb: {
      home: 'Home',
      backToProducts: '← All products',
      backToProjects: '← All customer stories',
      backToInsights: '← All blog posts',
      backToIndustries: '← All industries',
    },
    card: {
      readMore: 'Read more →',
      readStory: 'Read the story →',
      viewDetails: 'View details →',
      viewSolution: 'View solution →',
    },
    form: {
      name: 'Full name',
      company: 'Company',
      companyOrProject: 'Company / project',
      email: 'Email',
      phone: 'Phone',
      message: 'Additional message',
      businessType: 'Business type',
      portfolioSize: 'Solar portfolio size (approx.)',
      consent: 'I agree to let Advanced Grid use this information to contact me',
      submit: 'Submit request →',
      disabledTitle: 'The online form is temporarily disabled',
      disabledBodyPrefix: 'Please contact us at',
      disabledBodyOr: 'or',
      pdpaNotice: 'Data is stored in Thailand and handled in compliance with the PDPA',
    },
  },
  zh: {
    nav: {
      industries: '行业',
      allIndustries: '所有行业',
      products: '产品',
      allProducts: '所有产品',
      services: '服务',
      smartMeter: '智能电表',
      amr: 'AMR',
      billing: '计费系统',
      customerStories: '客户故事',
      insights: '博客',
      about: '关于我们',
      contact: '联系我们',
    },
    requestQuote: '索取报价',
    callLabel: '电话',
    footer: {
      tagline: '为泰国工业级项目提供电力计量与通信系统',
      productsHeading: '产品',
      servicesHeading: '服务',
      companyHeading: '公司',
      rightsReserved: '版权所有',
      registrationLabel: '公司注册号',
    },
    breadcrumb: {
      home: '首页',
      backToProducts: '← 所有产品',
      backToProjects: '← 所有客户故事',
      backToInsights: '← 所有博客',
      backToIndustries: '← 所有行业',
    },
    card: {
      readMore: '阅读更多 →',
      readStory: '阅读案例 →',
      viewDetails: '查看详情 →',
      viewSolution: '查看解决方案 →',
    },
    form: {
      name: '姓名',
      company: '公司',
      companyOrProject: '公司 / 项目',
      email: '电子邮箱',
      phone: '电话',
      message: '补充信息',
      businessType: '业务类型',
      portfolioSize: '太阳能项目规模（约）',
      consent: '我同意 Advanced Grid 使用此信息与我联系',
      submit: '提交申请 →',
      disabledTitle: '在线表单暂时停用',
      disabledBodyPrefix: '请通过以下方式联系我们：',
      disabledBodyOr: '或',
      pdpaNotice: '数据存储于泰国，并按照 PDPA 规定处理',
    },
  },
};
