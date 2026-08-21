import type { Locale } from '../locales';

export interface ContactCopy {
  metaTitle: string;
  metaDescription: (name: string, phone: string, email: string) => string;
  heroEyebrow: string;
  heroHeading: string;
  heroLede: string;
  directContactHeading: string;
  phoneLabel: string;
  emailLabel: string;
  locationHeading: string;
  mapIframeTitle: string;
  topicLabel: string;
  topics: string[];
  projectDetailsLabel: string;
}

export const CONTACT_COPY: Record<Locale, ContactCopy> = {
  th: {
    metaTitle: 'ติดต่อเรา',
    metaDescription: (name, phone, email) =>
      `ติดต่อ${name} โทร ${phone} อีเมล ${email} สำนักงานใหญ่และสำนักงานขาย MRV Building ปากเกร็ด นนทบุรี`,
    heroEyebrow: 'ติดต่อเรา',
    heroHeading: 'พร้อมเป็นส่วนหนึ่งของโครงการคุณ',
    heroLede: 'ส่งรายละเอียดโครงการของคุณ ทีมวิศวกรของเราจะประเมินขอบเขตงาน และเสนอราคาให้ภายใน 2 วันทำการ',
    directContactHeading: 'ติดต่อโดยตรง',
    phoneLabel: 'โทรศัพท์',
    emailLabel: 'อีเมล',
    locationHeading: 'ที่ตั้ง',
    mapIframeTitle: 'แผนที่สำนักงานขาย Advanced Grid',
    topicLabel: 'หัวข้อ',
    topics: [
      'ขอใบเสนอราคา (Energy Meter)',
      'ขอใบเสนอราคา (PQM)',
      'ออกแบบ Meter Box / Communication Box',
      'สอบเทียบมิเตอร์ (Calibration)',
      'ปรึกษาทางวิศวกรรม',
      'อื่นๆ',
    ],
    projectDetailsLabel: 'รายละเอียดโครงการ',
  },
  en: {
    metaTitle: 'Contact Us',
    metaDescription: (name, phone, email) =>
      `Contact ${name} — call ${phone}, email ${email}. Head office and sales office at MRV Building, Pak Kret, Nonthaburi.`,
    heroEyebrow: 'Contact Us',
    heroHeading: 'Ready to be part of your project',
    heroLede:
      'Send us your project details. Our engineering team will assess the scope of work and get back to you with a quote within 2 business days.',
    directContactHeading: 'Direct Contact',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    locationHeading: 'Location',
    mapIframeTitle: 'Map of the Advanced Grid sales office',
    topicLabel: 'Topic',
    topics: [
      'Request a quote (Energy Meter)',
      'Request a quote (PQM)',
      'Meter Box / Communication Box design',
      'Meter calibration',
      'Engineering consultation',
      'Other',
    ],
    projectDetailsLabel: 'Project details',
  },
  zh: {
    metaTitle: '联系我们',
    metaDescription: (name, phone, email) =>
      `联系 ${name} —— 电话 ${phone}，电子邮箱 ${email}。总部及销售办公室位于 MRV Building，Pak Kret，Nonthaburi。`,
    heroEyebrow: '联系我们',
    heroHeading: '期待成为您项目的一部分',
    heroLede: '发送您的项目详情，我们的工程团队将评估工作范围，并在 2 个工作日内为您提供报价。',
    directContactHeading: '直接联系方式',
    phoneLabel: '电话',
    emailLabel: '电子邮箱',
    locationHeading: '地址',
    mapIframeTitle: 'Advanced Grid 销售办公室地图',
    topicLabel: '主题',
    topics: [
      '报价咨询（电表）',
      '报价咨询（电能质量表）',
      '计量箱 / 通信箱设计',
      '电表校准',
      '工程咨询',
      '其他',
    ],
    projectDetailsLabel: '项目详情',
  },
};
